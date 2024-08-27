"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { delay, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Pong game",
    Description:
      "In the Pong game project, you developed a full-featured web application, combining both frontend and backend technologies. The project involved creating a social platform with real-time communication features, user authentication, and authorization mechanisms. You used modern web development tools and frameworks, focusing on implementing a responsive design, RESTful API, and WebSocket-based real-time updates. This project helped you understand the full stack development process, from database design to user interface, and reinforced best practices in software architecture and security.",
    href: "",
  },
  {
    num: "02",
    title: "Docker",
    Description:
      "In the Inception project, you set up a multi-container Docker environment using Docker Compose. The primary goal was to deepen your understanding of system administration, containerization, and orchestration. You configured and managed various services such as Nginx, WordPress, and MariaDB, ensuring they operated seamlessly within isolated containers. The project emphasized the importance of service isolation, networking, and data persistence in containerized environments. Through this, you gained hands-on experience in deploying and managing complex, scalable applications using Docker.",
    href: "",
  },
  {
    num: "03",
    title: "Web Server",
    Description:
      "In this project, you built a web server from scratch using C and C++. The main objective was to develop a deep understanding of the HTTP/1.1 protocol, socket programming, and server-client communication. The server was designed to handle HTTP requests, serve static files, and manage routing. You implemented concurrency to manage multiple client connections simultaneously and focused on robust error handling and basic security measures. This project provided hands-on experience with low-level networking concepts and the inner workings of web servers.",
    href: "",
  },
  {
    num: "04",
    title: "cub3D",
    Description:
      'In the Cub3D project, you created a basic 3D game using C , inspired by the classic "Wolfenstein 3D." The project involved implementing a ray-casting engine to render a 3D environment from a 2D map, simulating perspective and depth. You handled texture mapping, sprite rendering, and basic player movement. The focus was on understanding the mathematical concepts behind 3D rendering and optimizing performance within the constraints of low-level programming. This project helped you gain valuable experience in graphics programming and game development.',
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
