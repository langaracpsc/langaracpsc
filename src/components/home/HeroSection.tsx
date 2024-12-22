import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-16 lg:px-12">
        <motion.div
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-400 bg-gray-800 rounded-full hover:bg-gray-700"
          role="alert"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs bg-orange-500 rounded-full text-white px-4 py-1.5 mr-3">
            💻 Code Together
          </span>
          <span className="text-sm font-medium">
            Empowering students through collaboration and coding. 🤝
          </span>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Langara Computer Science Club
        </motion.h1>

        <motion.p
          className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Join the Langara Computer Science Club and explore opportunities to
          collaborate, learn, and innovate in technology.
        </motion.p>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/about"
            className="inline-flex justify-center items-center py-3 px-6 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
