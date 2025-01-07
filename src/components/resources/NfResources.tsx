import { Link } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";
import TruncatedText from "./TruncatedText";

const NfResources: React.FC = () => {
  const events = [
    { title: "Linkedin Learning Pro", description:"As a Langara student, you can access free training, courses, and certificates on LinkedIn Learning. These resources span various fields of computer science and offer knowledge beyond the classroom, enhancing your skills and expertise.",buttonText:"LinkedIn Learning" ,buttonLink:"https://langara.ca/information-technology/it-services/teaching-learning-tools/linkedin-learning.html" },
    { title: "Textbook Lookup", description:"You can lookup which textbook is used for a course through the Langara Bookstore website.",buttonText:"Langara Bookstore" ,buttonLink:"https://mycampusstore.langara.bc.ca/buy_courselisting.asp?selTerm=3%7C8" },
    { title: "Github Student Developer Pack", description:"Free access to tons of software, notably free domains, free cloud credits, and much more.", buttonText:"LCSC Discord" ,buttonLink:"https://education.github.com/pack0" },
   
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500"> Non LCSC Resources</h2>
      
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-transparent border-[rgb(241,90,34)]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {event.title}
              </h3>

              <TruncatedText text={event.description} maxLength={100}></TruncatedText>
              
              <Link
                to={event.buttonLink}
                className="text-orange-500 hover:text-orange-700 font-medium"
              >
                {event.buttonText} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfResources;