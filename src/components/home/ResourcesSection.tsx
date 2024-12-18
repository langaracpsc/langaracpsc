import React from "react";
import ViewAllButton from "../ViewAllButton";
import { motion } from "framer-motion";

const ResourcesSection: React.FC = () => {
  const resources = [
    { title: "📖 SFU & UBC Transfer Guides", link: "/resources/transfer-guides" },
    { title: "🗂️ Langara Course Planner", link: "/resources/course-planner" },
    { title: "📄 Course Outlines", link: "https://discord.gg/your-discord-link" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header with View All */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500">Resources</h2>
          <ViewAllButton link="/resources" />
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {resource.title}
              </h3>
              <a
                href={resource.link}
                className="text-orange-500 hover:text-orange-700 font-medium"
              >
                Explore &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
