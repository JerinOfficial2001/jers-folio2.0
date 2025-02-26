"use client";

import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import FloatingNav from "./FloatingNav";
import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";
import "tailwindcss/tailwind.css";
type Props = {};

export default function TemplateTwo({}: Props) {
  const datas = {
    name: "User Name",
    role: "User Role",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    links: [
      { url: "https://www.linkedin.com/in/user-name", name: "LinkedIn" },
      { url: "https://www.github.com/user-name", name: "GitHub" },
      { url: "https://www.twitter.com/user-name", name: "Twitter" },
      { url: "https://www.instagram.com/user-name", name: "Instagram" },
    ],
  };
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero
        name={datas.name}
        role={datas.role}
        about={datas.about}
        links={datas.links}
      />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}
