import { useEventStore } from "@/store/eventStore";
import EventList from "@/components/events/EventList";

export default function EventsPage() {
  const { events } = useEventStore((state) => state);

  const upcomingEvents = events.filter(
    (e) => new Date(e.event_end_date) >= new Date()
  );

  const pastEvents = events.filter(
    (e) => new Date(e.event_end_date) < new Date()
  );

  return (
    <div className="min-h-screen pb-10 bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
      <EventList events={upcomingEvents} title="Upcoming Events" />
      <EventList events={pastEvents} title="Past Events" />
    </div>
  );
}
