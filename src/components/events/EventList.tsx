import { motion } from "framer-motion";

import EventCard from "@/components/events/EventCard";
import { Event } from "@/types/member";

interface EventListProps {
  events: Event[];
  title: string;
}

const EventList: React.FC<EventListProps> = ({ events, title }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
