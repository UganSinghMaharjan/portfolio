import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass p-12 rounded-[3rem] relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-700" />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I am a dedicated{" "}
              <span className="text-white font-medium">
                MERN Stack Developer
              </span>{" "}
              with a strong foundation in building modern, scalable, and
              user-focused web applications. My approach centers on crafting
              clean interfaces while designing reliable backend systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I thrive in environments where performance and usability meet.
              Each project I build is an opportunity to sharpen my understanding
              of real-world application flow, ensuring that the code I write is
              not only technically sound, but truly meaningful to the end user.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Driven by curiosity and discipline, I am continuously improving my
              skills to stay at the forefront of modern web development,
              focusing on <span className="text-blue-400">clean code</span>,{" "}
              <span className="text-purple-400">scalable architecture</span>,
              and{" "}
              <span className="text-white">exceptional user experiences</span>.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
