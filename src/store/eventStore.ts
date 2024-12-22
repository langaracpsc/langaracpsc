import { Event } from "@/types/member";
import axios from "axios";
import { create } from "zustand";

interface EventStoreState {
  events: Event[];
  lastUpdate: string;
  isLoaded: boolean;
  fetchEvents: () => Promise<void>;
}

export const useEventStore = create<EventStoreState>((set, get) => ({
  events: [],
  lastUpdate: "",
  isLoaded: false,

  // Fetch data from the API and populate the store
  fetchEvents: async () => {
    try {
      const response = await axios.get<{
        events: Event[];
        metadata: { events_last_edited: string };
      }>(`${import.meta.env.VITE_BASE_URL}/events/all`);

      const { events: fetchedEvents, metadata } = response.data;
      const { lastUpdate, isLoaded } = get();

      if (lastUpdate === metadata.events_last_edited) {
        if (!isLoaded) {
          set({ isLoaded: true });
        }

        return;
      }

      if (fetchedEvents) {
        set({
          events: fetchedEvents,
          lastUpdate: metadata.events_last_edited,
          isLoaded: true,
        });
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  },
}));
