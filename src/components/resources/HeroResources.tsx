import { motion } from "framer-motion";

export function ResourcesHero() {
  return (
    <motion.section
      className="px-4 py-20 text-center text-white"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h1
        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Resources
      </motion.h1>
      <motion.p
        className="mx-auto mt-4 max-w-3xl text-lg text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        The Langara Computer Science Club is proud to provide a 
        curated list of affiliated and non-affiliated resources to 
        support computer science students in their academic and professional 
        journeys. Whether you're looking for tools, tutorials, or community 
        opportunities, these resources are here to help you succeed.
      </motion.p>
    </motion.section>
  );
}