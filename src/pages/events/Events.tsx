import { motion } from "framer-motion";

import { useEventStore } from "@/store/eventStore";
import EventCard from "@/components/events/EventCard";

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
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Past Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
