import { Card, CardContent } from "@/components/ui/card";

import { clubValuesData } from "@/data/aboutUsData";
import { motion } from "framer-motion";

export function ValuesSection() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.h2
        className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {clubValuesData.map((value, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Card className="bg-black/50 border-[rgb(241,90,34)]/20">
              <CardContent className="p-6 text-white">
                <value.icon className="h-12 w-12 text-[rgb(241,90,34)]" />
                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
