import { Card, CardContent } from "@/components/ui/card";

import { clubMissionData } from "@/data/data";
import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {clubMissionData.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Card className="bg-black/50 border-[rgb(241,90,34)]/20">
              <CardContent className="p-6 text-white">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
