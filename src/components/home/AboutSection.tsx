import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-gray-300">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Langara Computer Science Club (LCSC) fosters collaboration,
        innovation, and professional growth for students. Join us for workshops,
        hackathons, and networking opportunities to sharpen your skills and
        connect with peers.
      </motion.p>
      <Link
        to="/about"
        className="inline-flex justify-center items-center py-3 px-6 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-700 transition duration-300"
      >
        Learn More
      </Link>
    </div>
  </section>
);

export default AboutSection;
