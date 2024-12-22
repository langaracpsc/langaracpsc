import { Executive } from "@/types/member";
import { ExecutiveMemberProfileCard } from "./ExecutiveMemberProfileCard";
import { motion } from "framer-motion";

interface ExecutiveSectionProps {
  title: string;
  executives: Executive[];
  onSelectExecutive: (executive: Executive) => void;
}

export function ExecutiveMemberProfileList({
  title,
  executives = [], // Default to an empty array if undefined
  onSelectExecutive,
}: ExecutiveSectionProps) {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          }}
        }
        initial="hidden"
        animate="show"
      >
        {executives.length > 0 ? (
          executives.map((executive) => (
            <ExecutiveMemberProfileCard
              key={executive.id}
              executive={executive}
              onClick={() => onSelectExecutive(executive)}
            />
          ))
        ) : (
          <p className="text-gray-300 text-center">No executives to display.</p>
        )}
      </motion.div>
    </motion.section>
  );
}

