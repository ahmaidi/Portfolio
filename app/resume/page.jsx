"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { DiNodejs, DiLinux, DiMongodb } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const about = {
  title: "About me",
  description:
    "I'm an energetic and collaborative individual who thrives in group settings. I have a passion for reading and a constant drive to learn new things. I enjoy analyzing everything around me, always seeking to understand and improve. My enthusiasm and curiosity fuel my growth both personally and professionally",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ahmed Hmaidi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 707 706 661",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Email",
      fieldValue: "hmaidiahmed96@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Frensh, Arabic",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I am eager to embark on my first professional experience and committed to delivering high-quality work. Click the button to hire me.",
  items: [],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I began my educational journey with a strong focus on mathematics in high school, which naturally led me to pursue a Bachelor's Degree in Mathematics and Computer Science. To further my passion for Computer Science, I studied at 1337 in Mohammed V University, where I deepened my knowledge and skills in the field.",
  items: [
    {
      institution: "1337 UM6P Benguerir",
      degree: "Software Enginner",
      duration: "2021-Present",
    },
    {
      institution: " Mohammed V University Rabat",
      degree: "Bachelor's Degree in Mathematics and Computer Science",
      duration: "2015-2019",
    },

    {
      institution: "Ahmed Ben Mohammed Errachdi Boujdour",
      degree: "High School Diploma in Mathematics -A-",
      duration: "2011-2014",
    },
  ],
};
const skills = {
  icon: "/assets/resume/cap.svg",
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <DiNodejs />,
      name: "Nodejs",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <DiLinux />,
      name: "Linux",
    },

    {
      icon: <DiMongodb />,
      name: "Mongodb",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-auto">
                  {experience.description}
                </p>
                <Button>Hire me</Button>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-auto">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-md max-w-[260px] min-h-[60px]
                    text-center lg:text-left "
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p>{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transitio-all duration-#00">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
