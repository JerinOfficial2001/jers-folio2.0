"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "React, Next.js, Redux",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      description: "Node.js, Express",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database",
      description: "MongoDB, Mongoose",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "Optimization, Caching",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-left">
              I am a results-driven Full-Stack Developer specializing in MERN
              (MongoDB, Express.js, React, Node.js) with a strong focus on
              building scalable, high-performance web applications. With
              expertise in Next.js, Redux, and RESTful & GraphQL APIs, I craft
              seamless and efficient full-stack solutions that enhance user
              experience and optimize system performance.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-left">
              Beyond web development, I have hands-on experience in blockchain
              integration, including Web3, Solidity, and smart contracts,
              enabling secure and decentralized solutions. I am passionate about
              writing clean, maintainable code, implementing best practices, and
              continuously exploring new technologies to deliver cutting-edge
              digital solutions.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed text-left">
              I thrive in collaborative environments, working closely with
              cross-functional teams to architect, develop, and deploy
              innovative products that drive real impact.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
