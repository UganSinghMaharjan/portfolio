import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useSpring } from "framer-motion";
import saleshopImg from "../assets/saleshop.png";

import hotelImg from "../assets/hotel.jpg";
import pandaImg from "../assets/Pandawagons.jpg";

const projects = [
  {
    title: "Luxury Hotel",
    description:
      "A premium hotel management and booking system designed to provide a seamless user experience for guests and administrators alike.",
    image: hotelImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Management System"],
    githubLink: "https://github.com/UganSinghMaharjan",
    liveLink: "#",
  },
  {
    title: "PandaWagons",
    description:
      "A dynamic web application featuring modern design and responsive layout. Built to demonstrate effective use of contemporary web technologies.",
    image: pandaImg,
    tags: ["React", "Tailwind CSS", "MongoDB", "JavaScript", "Web Development"],
    githubLink: "https://github.com/UganSinghMaharjan",
    liveLink: "#",
  },
  {
    title: "SaleShop",
    description:
      "A full-stack e-commerce platform built with the MERN stack. Features include user authentication, product management, cart functionality, and a smooth checkout process. Designed for high performance and mobile-first responsiveness.",
    image: saleshopImg,
    tags: ["PostgreSQL", "Express", "React", "Python", "Tailwind CSS"],
    githubLink: "https://github.com/UganSinghMaharjan",
    liveLink: "http://salesshopnepal.com/",
    imgClassName: "object-contain bg-black/20",
  },
];

const Myportfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-blue-500/30 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none text-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />

        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              A selection of my recent development work
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm relative z-10">
        <p>
          © {new Date().getFullYear()} Ugan Singh Maharjan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Myportfolio;
