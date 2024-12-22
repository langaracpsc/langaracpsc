import { motion } from "framer-motion";

export function AboutHero() {
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
        About us
      </motion.h1>
      <motion.p
        className="mx-auto mt-4 max-w-3xl text-lg text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        The Langara Computer Science Club is a student-led club dedicated to
        providing a space for students interested in computer science. We
        provide a space to learn, create, network, and to have fun. We hold
        workshops, programming competitions, and other meetups.
      </motion.p>
    </motion.section>
  );
}
