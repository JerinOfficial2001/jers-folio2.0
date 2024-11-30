import {
  FemaleAvatar,
  linkKey,
  MaleAvatar,
  Skill,
  Skills,
} from "../types/interfaces";
import { IoLogoGithub } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const SkillsImage: Skills = {
  nextjs: "/skills/nextjs.png",
  figma: "/skills/figma.png",
  express: "/skills/express.png",
  js: "/skills/js.png",
  mern: "/skills/mern.png",
  mongodb: "/skills/mongodb.png",
  node: "/skills/node.png",
  react: "/skills/react.png",
  reactnative: "/skills/reactnative.png",
  sketch: "/skills/sketch.png",
  wp: "/skills/wp.png",
  xd: "/skills/xd.png",
  java: "/skills/java.png",
  python: "/skills/python.png",
};
export const MaleImage: MaleAvatar = {
  1: "/maleAvatar/1.png",
  2: "/maleAvatar/2.png",
  3: "/maleAvatar/3.png",
  4: "/maleAvatar/4.png",
  5: "/maleAvatar/5.png",
  6: "/maleAvatar/6.png",
  7: "/maleAvatar/7.png",
  8: "/maleAvatar/8.png",
  9: "/maleAvatar/9.png",
  10: "/maleAvatar/10.png",
  11: "/maleAvatar/11.png",
  12: "/maleAvatar/12.png",
  13: "/maleAvatar/13.png",
  14: "/maleAvatar/14.png",
  15: "/maleAvatar/15.png",
  16: "/maleAvatar/16.png",
  17: "/maleAvatar/17.png",
  18: "/maleAvatar/18.png",
  19: "/maleAvatar/19.png",
  20: "/maleAvatar/20.png",
  21: "/maleAvatar/21.png",
  22: "/maleAvatar/22.png",
  23: "/maleAvatar/23.png",
  24: "/maleAvatar/24.png",
  25: "/maleAvatar/25.png",
  26: "/maleAvatar/26.png",
  27: "/maleAvatar/27.png",
  28: "/maleAvatar/28.png",
};
export const FemaleImage: FemaleAvatar = {
  1: "/femaleAvatar/1.png",
  2: "/femaleAvatar/2.png",
  3: "/femaleAvatar/3.png",
  4: "/femaleAvatar/4.png",
  5: "/femaleAvatar/5.png",
  6: "/femaleAvatar/6.png",
  7: "/femaleAvatar/7.png",
  8: "/femaleAvatar/8.png",
  9: "/femaleAvatar/9.png",
  10: "/femaleAvatar/10.png",
  11: "/femaleAvatar/11.png",
  12: "/femaleAvatar/12.png",
  13: "/femaleAvatar/13.png",
  14: "/femaleAvatar/14.png",
  15: "/femaleAvatar/15.png",
  16: "/femaleAvatar/16.png",
  17: "/femaleAvatar/17.png",
  18: "/femaleAvatar/18.png",
  19: "/femaleAvatar/19.png",
  20: "/femaleAvatar/20.png",
  21: "/femaleAvatar/21.png",
  22: "/femaleAvatar/22.png",
  23: "/femaleAvatar/23.png",
  24: "/femaleAvatar/24.png",
  25: "/femaleAvatar/25.png",
  26: "/femaleAvatar/26.png",
  27: "/femaleAvatar/27.png",
  28: "/femaleAvatar/28.png",
  29: "/femaleAvatar/29.png",
  30: "/femaleAvatar/30.png",
  31: "/femaleAvatar/31.png",
  32: "/femaleAvatar/32.png",
  33: "/femaleAvatar/33.png",
  34: "/femaleAvatar/34.png",
};
export const PortfolioDatas = [
  {
    _id: 1,
    name: "Jerin",
    role: "Mern Stack Developer",
    image_id: 3,
    gender: "male",
    image: null,
    user_name: "jerin_25_01",
    email: "jerinofficial25@gmail.com",
    about:
      "I break down complex user experience problems to create integrity focussed solutions that connect billions of people",
    resume_url: "123",
    links: [
      {
        url: "https://github.com/JerinOfficial2001",
        type: "github",
      },
      {
        url: "https://wa.me/qr/EMQB2VSLPRJLL1",
        type: "whatsapp",
      },
      {
        url: "https://www.linkedin.com/in/jerin-t-8866581a0",
        type: "linkedin",
      },
      {
        url: "https://www.facebook.com/profile.php?id=100008223483681&mibextid=ZbWKwL",
        type: "facebook",
      },
      {
        url: "https://www.instagram.com/jerin_25_01?igsh=MTBia2dzNzlpM2J5bg==",
        type: "instagram",
      },
    ],
  },
  {
    _id: 1,
    name: "Iwin",
    role: "Full Stack Developer",
    image_id: 2,
    gender: "male",
    image: null,
    user_name: "iwin_21_02",
    email: "iwinissacofficial@gmail.com",
    about:
      "I break down complex user experience problems to create integrity focussed solutions that connect billions of people",
    resume_url: null,
  },
  {
    _id: 1,
    name: "Jenisha",
    role: "App Developer",
    image_id: 3,
    gender: "female",
    image: null,
    user_name: "@jenisha",
    email: "jenisha@gmail.com",
    about:
      "I break down complex user experience problems to create integrity focussed solutions that connect billions of people",
    resume_url: null,
  },
  // {
  //   _id: 1,
  //   name: "Gokul",
  //   role: "React Native Developer",
  //   image_id: 8,
  //   gender: "male",
  //   image: null,
  //   user_name: "gokul_24_08",
  //   email: "gokulpga@gmail.com",
  //   about:
  //     "I break down complex user experience problems to create integrity focussed solutions that connect billions of people",
  //   resume_url: "123",
  // },
];
const JersAppApkImages = [
  {
    image: "/projects/jersApp-apk/1.jpg",
  },
  {
    image: "/projects/jersApp-apk/2.jpg",
  },
  {
    image: "/projects/jersApp-apk/3.jpg",
  },
  {
    image: "/projects/jersApp-apk/4.jpg",
  },
  {
    image: "/projects/jersApp-apk/5.jpg",
  },
  {
    image: "/projects/jersApp-apk/6.jpg",
  },
];
const JersAppImages = [
  {
    image: "/projects/jersapp/1.png",
  },
  {
    image: "/projects/jersapp/2.png",
  },
  {
    image: "/projects/jersapp/3.png",
  },
  {
    image: "/projects/jersapp/4.png",
  },
];
const JersCVImages = [
  {
    image: "/projects/jerscv/1.png",
  },
  {
    image: "/projects/jerscv/2.png",
  },
  {
    image: "/projects/jerscv/3.png",
  },
  {
    image: "/projects/jerscv/4.png",
  },
  {
    image: "/projects/jerscv/5.png",
  },
  {
    image: "/projects/jerscv/6.png",
  },
  {
    image: "/projects/jerscv/7.png",
  },
];
const AccountBookImages = [
  {
    image: "/projects/accountbook/1.png",
  },
  {
    image: "/projects/accountbook/2.png",
  },
  {
    image: "/projects/accountbook/3.png",
  },
  {
    image: "/projects/accountbook/4.png",
  },
  {
    image: "/projects/accountbook/5.png",
  },
  {
    image: "/projects/accountbook/6.png",
  },
];
const AccountBookApkImages = [
  {
    image: "/projects/AccountBook-apk/1.jpg",
  },
  {
    image: "/projects/AccountBook-apk/2.jpg",
  },
  {
    image: "/projects/AccountBook-apk/3.jpg",
  },
  {
    image: "/projects/AccountBook-apk/4.jpg",
  },
  {
    image: "/projects/AccountBook-apk/5.jpg",
  },
  {
    image: "/projects/AccountBook-apk/6.jpg",
  },
];
const ChordlyricsApkImages = [
  {
    image: "/projects/Chordlyrics/1.jpg",
  },
  {
    image: "/projects/Chordlyrics/2.jpg",
  },
  {
    image: "/projects/Chordlyrics/3.jpg",
  },
  {
    image: "/projects/Chordlyrics/4.jpg",
  },
  {
    image: "/projects/Chordlyrics/5.jpg",
  },
  {
    image: "/projects/Chordlyrics/6.jpg",
  },
  {
    image: "/projects/Chordlyrics/7.jpg",
  },
  {
    image: "/projects/Chordlyrics/8.jpg",
  },
  {
    image: "/projects/Chordlyrics/9.jpg",
  },
];

export const WebsiteProjectDatas: any = [
  {
    _id: 1,
    images: JersAppImages,
    title: "JersApp-web",
    description: "JersApp is a web chat application for real-time messaging.",
    about:
      "JersApp is a real-time web chat application developed using Next.js for the frontend and the MERN stack (MongoDB, Express, React, Node.js) for the backend. The app leverages Socket.IO to enable live, interactive messaging between users, ensuring a smooth and responsive chat experience. This project was built independently to showcase expertise in full-stack development and real-time communication technologies, offering features like instant messaging, user authentication, and a responsive interface.",
    primaryImage: 0,
    projectType: "website",
    link: "https://jers-app-web.vercel.app",
    icon: "/projects/JersApp.png",
  },
  {
    _id: 2,
    images: JersCVImages,
    title: "JersCV-Builder",
    description:
      "Jers-CV is a Next.js-based resume builder that helps users create professional resumes easily.",
    about:
      "Jers-CV is a user-friendly resume builder built with Next.js, allowing users to create and customize professional resumes with ease. The application offers a responsive and intuitive interface, enabling users to input personal details, work experience, skills, and education, while automatically formatting the content into a polished resume. By leveraging Next.js, Jers-CV ensures fast performance, server-side rendering, and a smooth user experience. This project showcases the ability to develop practical web applications with modern technologies, aimed at simplifying the resume creation process.",
    primaryImage: 1,
    projectType: "website",
    link: "https://jers-cv.vercel.app",
    icon: "/projects/Jersfolio.png",
  },
  {
    _id: 3,
    images: AccountBookImages,
    title: "AccountBook",
    description:
      "Account Book is a MERN stack application with a Next.js frontend for tracking credits and expenses.",
    about:
      "Account Book is a full-stack financial tracking application built using the MERN stack (MongoDB, Express, React, Node.js) for the backend and Next.js for the frontend. It allows users to easily manage and track their credits and expenses by recording transactions, categorizing them, and viewing detailed financial summaries. The application features real-time updates, secure user authentication, and an intuitive interface, making it easy to maintain a personal financial ledger. This project demonstrates proficiency in full-stack development, database management, and creating functional, user-friendly applications.",
    primaryImage: 1,
    projectType: "website",
    link: "https://account-book-gilt.vercel.app",
    icon: "/projects/AccountBook.png",
  },
  {
    _id: 6,
    images: JersAppApkImages,
    title: "JersApp",
    description: "Real time chat application",
    about:
      "Account Book is a full-stack financial tracking application built using the MERN stack (MongoDB, Express, React, Node.js) for the backend and Next.js for the frontend. It allows users to easily manage and track their credits and expenses by recording transactions, categorizing them, and viewing detailed financial summaries. The application features real-time updates, secure user authentication, and an intuitive interface, making it easy to maintain a personal financial ledger. This project demonstrates proficiency in full-stack development, database management, and creating functional, user-friendly applications.",
    primaryImage: 1,
    projectType: "application",
    link: "https://account-book-gilt.vercel.app",
    icon: "/projects/JersApp.png",
  },
  {
    _id: 4,
    images: ChordlyricsApkImages,
    title: "Chordlyrics",
    description:
      "Simplify your music practice with instant access to chords and lyrics.",
    about:
      "Account Book is a full-stack financial tracking application built using the MERN stack (MongoDB, Express, React, Node.js) for the backend and Next.js for the frontend. It allows users to easily manage and track their credits and expenses by recording transactions, categorizing them, and viewing detailed financial summaries. The application features real-time updates, secure user authentication, and an intuitive interface, making it easy to maintain a personal financial ledger. This project demonstrates proficiency in full-stack development, database management, and creating functional, user-friendly applications.",
    primaryImage: 1,
    projectType: "application",
    link: "https://account-book-gilt.vercel.app",
    icon: "/projects/Chordlyrics.png",
  },
  {
    _id: 5,
    images: AccountBookApkImages,
    title: "AccountBook",
    description: "Accounting credit and debit",
    about:
      "Account Book is a full-stack financial tracking application built using the MERN stack (MongoDB, Express, React, Node.js) for the backend and Next.js for the frontend. It allows users to easily manage and track their credits and expenses by recording transactions, categorizing them, and viewing detailed financial summaries. The application features real-time updates, secure user authentication, and an intuitive interface, making it easy to maintain a personal financial ledger. This project demonstrates proficiency in full-stack development, database management, and creating functional, user-friendly applications.",
    primaryImage: 1,
    projectType: "application",
    link: "https://account-book-gilt.vercel.app",
    icon: "/projects/AccountBook.png",
  },
];
export const skillData: Skill[] = [
  { label: "Next Js", percent: "90%", id: "nextjs", user_name: "jerin_25_01" },
  { label: "Figma", percent: "30%", id: "figma", user_name: "jerin_25_01" },
  { label: "Node Js", percent: "85%", id: "node", user_name: "jerin_25_01" },
  { label: "Mern Stack", percent: "85%", id: "mern", user_name: "jerin_25_01" },
  { label: "React Js", percent: "85%", id: "react", user_name: "jerin_25_01" },
  {
    label: "React Native",
    percent: "85%",
    id: "reactnative",
    user_name: "jerin_25_01",
  },
  {
    label: "Mongo DB",
    percent: "85%",
    id: "mongodb",
    user_name: "jerin_25_01",
  },
  {
    label: "Express Js",
    percent: "85%",
    id: "express",
    user_name: "jerin_25_01",
  },
  { label: "Next Js", percent: "90%", id: "nextjs", user_name: "iwin_21_02" },
  { label: "Node Js", percent: "85%", id: "node", user_name: "iwin_21_02" },
  { label: "Mern Stack", percent: "85%", id: "mern", user_name: "iwin_21_02" },
  { label: "React Js", percent: "85%", id: "react", user_name: "iwin_21_02" },
  {
    label: "React Native",
    percent: "85%",
    id: "reactnative",
    user_name: "iwin_21_02",
  },
  { label: "Mongo DB", percent: "85%", id: "mongodb", user_name: "iwin_21_02" },
  {
    label: "Express Js",
    percent: "85%",
    id: "express",
    user_name: "iwin_21_02",
  },
  { label: "Python", percent: "85%", id: "python", user_name: "iwin_21_02" },
  { label: "Python", percent: "85%", id: "python", user_name: "@jenisha" },
  { label: "Python", percent: "85%", id: "python", user_name: "@paulJdurai" },
  { label: "Java", percent: "85%", id: "java", user_name: "@jenisha" },
  { label: "Java", percent: "85%", id: "java", user_name: "@paulJdurai" },
  { label: "Java", percent: "85%", id: "java", user_name: "iwin_21_02" },
];
export const links: linkKey = {
  github: {
    label: "Github",
    icon: <IoLogoGithub />,
  },
  whatsapp: {
    label: "Whatsapp",
    icon: <RiWhatsappFill />,
  },
  linkedin: {
    label: "Linkedin",
    icon: <FaLinkedin />,
  },
  facebook: {
    label: "Facebook",
    icon: <FaFacebook />,
  },
  instagram: {
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
};
