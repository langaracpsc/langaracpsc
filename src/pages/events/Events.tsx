import { useEffect } from "react";

import { useClubEventStore } from "@/store/clubEventStore";

export default function EventsPage() {
  const { clubEvents, fetchClubEvents } = useClubEventStore((state) => state);

  useEffect(() => {
    if (clubEvents.length === 0) {
      fetchClubEvents();
    }
  }, [clubEvents.length, fetchClubEvents]);

  return (
    <div className="min-h-screen pb-10 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
      <div>
        <pre style={{ color: "white" }}>
          {JSON.stringify(clubEvents, null, 4)}
        </pre>
      </div>
    </div>
  );
}
