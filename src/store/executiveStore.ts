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

      fetchExecutives: async () => {
        if (get().isLoaded) return; // Avoid redundant fetch
        try {
          const response = await axios.get<{ executives: Executive[] }>(
            `${import.meta.env.VITE_BASE_URL}/executives/all`
          );

          if (response.data.executives) {
            set({ executives: response.data.executives, isLoaded: true });
          }
        } catch (error) {
          console.error("Error fetching executives:", error);
        }
      },

      validateExecutives: async () => {
        try {
          const response = await axios.get<{ executives: Executive[] }>(
            `${import.meta.env.VITE_BASE_URL}/executives/all`
          );
          const fetchedExecutives = response.data.executives;
          const currentExecutives = get().executives;

          if (Array.isArray(fetchedExecutives)) {
            const isDataDifferent =
              fetchedExecutives.length !== currentExecutives.length ||
              fetchedExecutives.some(
                (fetchedExecutive, index) =>
                  JSON.stringify(fetchedExecutive) !==
                  JSON.stringify(currentExecutives[index])
              );

            if (isDataDifferent) {
              console.log("Executives data has updates. Refreshing...");
              set({ executives: fetchedExecutives });
            }
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
