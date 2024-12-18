import { createJSONStorage, persist } from "zustand/middleware";

import { Executive } from "@/types/member";
import axios from "axios";
import { create } from "zustand";

interface ExecutiveStoreState {
  executives: Executive[];
  isLoaded: boolean;
  fetchExecutives: () => Promise<void>;
  validateExecutives: () => Promise<void>;
}

export const useExecutiveStore = create(
  persist<ExecutiveStoreState>(
    (set, get) => ({
      executives: [],
      isLoaded: false,

      // Fetch data from the API and populate the store
      fetchExecutives: async () => {
        try {
          const response = await axios.get<{ executives: Executive[] }>(
            `${import.meta.env.VITE_BASE_URL}/executives/all`
          );

          const fetchedExecutives = response.data.executives;

          if (fetchedExecutives) {
            set({ executives: fetchedExecutives, isLoaded: true });
          }
        } catch (error) {
          console.error("Error fetching executives:", error);
        }
      },

      // Validate local data against API data
      validateExecutives: async () => {
        try {
          const response = await axios.get<{ executives: Executive[] }>(
            `${import.meta.env.VITE_BASE_URL}/executives/all`
          );

          const fetchedExecutives = response.data.executives;
          const currentExecutives = get().executives;

          // Compare lengths or perform a deep comparison
          const hasDifferences =
            fetchedExecutives.length !== currentExecutives.length ||
            !fetchedExecutives.every((apiExec, index) => {
              const currentExec = currentExecutives[index];
              if (!currentExec) return true; // Avoid undefined error if lengths differ

              return Object.keys(apiExec).every((key) => {
                const apiValue = apiExec[key as keyof Executive];
                const currentValue = currentExec[key as keyof Executive];
                return apiValue === currentValue;
              });
            });

          if (hasDifferences) {
            console.log("Updating executives due to changes in the API.");
            set({ executives: fetchedExecutives });
          }
        } catch (error) {
          console.error("Error validating executives:", error);
        }
      },
    }),
    {
      name: "executive-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
