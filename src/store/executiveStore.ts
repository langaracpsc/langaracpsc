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

      // Fetch executives from API
      fetchExecutives: async () => {
        if (get().isLoaded) return;
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

      // Validate data by checking for updates in the backend
      validateExecutives: async () => {
        try {
          const response = await axios.get<{ executives: Executive[] }>(
            `${import.meta.env.VITE_BASE_URL}/executives/all`
          );

          const fetchedExecutives = response.data.executives;
          const currentExecutives = get().executives;

          if (
            Array.isArray(fetchedExecutives) &&
            fetchedExecutives.length !== currentExecutives.length
          ) {
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
