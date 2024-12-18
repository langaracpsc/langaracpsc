import { Link } from "react-router-dom";
import React from "react";
import ViewAllButton from "../ViewAllButton";
import { motion } from "framer-motion";

const EventsSection: React.FC = () => {
  const events = [
    { title: "SFU/UBC Transfer Panel", date: "Nov 28, 2024", location: "Library L224" },
    { title: "Tech Talks: AI & ML", date: "Nov 20, 2024", location: "T Gallery" },
    { title: "Full Stack Developer", date: "Nov 15, 2024", location: "Library L224" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500">Upcoming Events</h2>
      <ViewAllButton link="/events" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {event.title}
              </h3>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-400 mb-4">{event.location}</p>
              <Link
                to="/events"
                className="text-orange-500 hover:text-orange-700 font-medium"
              >
                View Details &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
