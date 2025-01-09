import { Link } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";
import TruncatedText from "./TruncatedText";

const AfResources: React.FC = () => {
  const events = [
    { title: "SFU & UBC Transfer Guides", description:"Over the years, Langara alumni have generously shared their experiences by compiling transfer guides filled with advice, common pitfalls, and recommendations. These valuable resources can be found below. Additionally, the Langara Computer Science Club (LCSC) hosts an annual Transfer Panel in November, providing an opportunity to connect with alumni who have successfully navigated the transfer process from Langara.",buttonText:"Transfer Resource" ,buttonLink:"https://langaracs.notion.site/LCSC-Transfer-Information-a0548da4b3084681868381310c604c34" },
    { title: "Langara Course Planner", description:"The Langara Course Planner is an unofficial website that you can use to help plan your courses at Langara. It aggregates information about course attributes, transfer agreements, previous offerings, and more and lets you plan your courses using a visually based approach.",buttonText:"Langara Course Planner" ,buttonLink:"https://planner.langaracs.ca/" },
    { title: "Course Outlines", description:"If you would like more information about the structure of a course, check out the #course-outlines channel on our discord server. We have course outlines for almost all computer science courses as well as some other courses.", buttonText:"LCSC Discord" ,buttonLink:"https://discord.com/invite/langara-computer-science-club-753037165050593300" },
    { title: "Langara Course API", description:"The Langara Course API is a non-official REST API that provides information about courses at Langara. Check it out at the link below.", buttonText:"Lagara Course API" ,buttonLink:"https://coursesapi.langaracs.ca/"},
    { title: "Tech Talk", description:"LCSC, in collaboration with the Coop and Career Development Center, co-hosts monthly in-person tech talks featuring industry speakers from diverse computer science fields.", buttonText:"Tech Talk" ,buttonLink:"https://langara.ca/coop-and-career-development/workshops-and-events/tech-talks/index.html"},
    { title: "Course Availability Document", description:"This document lists all available computer science courses for the upcoming semester, including course codes, titles, instructors, prerequisites, and credit hours. From introductory programming to advanced topics like AI and cybersecurity, find the courses that fit your academic goals and plan your semester effectively.", buttonText:"Course Availability" ,buttonLink:"https://docs.google.com/spreadsheets/d/1au-d_-j5VrDwNvTFUHbp8WI_URfDc9lGSvi1eUiTJXE/edit"},
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-orange-500"> Affiliated Resources</h2>
      
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-transparent border-[rgb(241,90,34)]/20 hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {event.title}
              </h3>
              <TruncatedText text={event.description} maxLength={200}></TruncatedText>
                
              
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

export default AfResources;