import { createJSONStorage, persist } from "zustand/middleware";

import { ClubEvent } from "@/types/member";
import axios from "axios";
import { create } from "zustand";

interface ClubEventStoreState {
  clubEvents: ClubEvent[];
  isLoaded: boolean;
  fetchClubEvents: () => Promise<void>;
  validateClubEvents: () => Promise<void>;
}

export const useClubEventStore = create(
  persist<ClubEventStoreState>(
    (set, get) => ({
      clubEvents: [],
      isLoaded: false,

      // Fetch data from the API and populate the store
      fetchClubEvents: async () => {
        try {
          const response = await axios.get<{ events: ClubEvent[] }>(
            `${import.meta.env.VITE_BASE_URL}/events/all`
          );

          const fetchedClubEvents = response.data.events;

          if (fetchedClubEvents) {
            set({ clubEvents: fetchedClubEvents, isLoaded: true });
          }
        } catch (error) {
          console.error("Error fetching club events:", error);
        }
      },

      // Validate local data against API data
      validateClubEvents: async () => {
        try {
          const response = await axios.get<{ events: ClubEvent[] }>(
            `${import.meta.env.VITE_BASE_URL}/events/all`
          );

          const fetchedClubEvents = response.data.events;
          const currentClubEvents = get().clubEvents;

          // Compare lengths or perform a deep comparison
          const hasDifferences =
            fetchedClubEvents.length !== currentClubEvents.length ||
            !fetchedClubEvents.every((apiExec, index) => {
              const currentClubEvent = currentClubEvents[index];
              if (!currentClubEvent) return true; // Avoid undefined error if lengths differ

              return Object.keys(apiExec).every((key) => {
                const apiValue = apiExec[key as keyof ClubEvent];
                const currentValue = currentClubEvent[key as keyof ClubEvent];
                return apiValue === currentValue;
              });
            });

          if (hasDifferences) {
            console.log("Updating club events due to changes in the API.");
            set({ clubEvents: fetchedClubEvents });
          }
        } catch (error) {
          console.error("Error validating club events:", error);
        }
      },
    }),
    {
      name: "club-events-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
