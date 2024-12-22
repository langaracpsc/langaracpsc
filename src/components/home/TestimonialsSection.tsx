import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  // Testimonial Data
  const testimonials = [
    {
      name: "Jon Ung",
      quote:
        "Being part of LCSC not only grew my technical skills but also my leadership abilities. It's an unforgettable experience!",
    },
    {
      name: "Lucas Paganine",
      quote:
        "The LCSC community has been a cornerstone for my career. I gained friends, knowledge, and confidence.",
    },
    {
      name: "Isabelle Wang",
      quote:
        "The events and workshops helped me develop real-world skills and connect with like-minded students.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Members Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Testimonial Quote */}
              <p className="text-gray-400 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              {/* Testimonial Author */}
              <cite className="text-orange-500 font-medium">
                - {testimonial.name}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
