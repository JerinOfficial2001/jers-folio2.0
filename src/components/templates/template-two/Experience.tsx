"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "iProtecs Solutions Private Limited",
      location: "Coimbatore, India",
      period: "2023 - Present",
      role: "MERN Stack Developer",
      responsibilities: [
        "Engineered and optimized scalable web applications, focusing on API automation, performance monitoring, and workflow optimization.",
        "Developed and maintained high-performance full-stack solutions using MERN, Next.js, and Python, improving API response efficiency and system reliability.",
        "Worked closely with product teams to implement automated testing, real-time logging, and analytics-driven optimizations.",
        "Creating RESTful APIs and managing MongoDB databases",
        "Collaborating with clients to deliver high-quality solutions",
      ],
    },
    {
      company: "Metadiac Technologies Private Limited",
      location: "Coimbatore, India",
      period: "2022 - 2023",
      role: "Web Developer",
      responsibilities: [
        "Developed full-fledged blockchain based applications using MERN stack",
        "Developed applications focusing on decentralized finance, NFTs, and smart contract automation",
        "Designed and integrated secure, scalable, and high-performance Web3 solutions using MERN, Web3.js, and Binance Smart Chain.",
        "Collaborated with cross-functional teams to enhance blockchain interoperability, optimize gas fees, and ensure seamless user experiences.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center ">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="flex flex-col items-center space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className=" bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
              style={{ width: "90%" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
