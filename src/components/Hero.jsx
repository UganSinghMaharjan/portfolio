import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import cvFile from "../assets/Ugans_cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 inline-block shadow-[0_0_20px_rgba(59,130,246,0.1)]"
        >
          Open to Collaboration
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none"
        >
          Crafting Solid <br />
          <span className="text-gradient">Innovations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light tracking-wide px-4"
        >
          Dedicated{" "}
          <span className="text-white font-medium">MERN Stack Developer</span>{" "}
          building high-performance web solutions with focus on scalablity and
          user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-500 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
          >
            Explore Projects{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href={cvFile}
            download="Ugan_Singh_Maharjan_CV.pdf"
            className="group glass flex items-center gap-3 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all duration-500 active:scale-95 border border-white/5"
          >
            Download CV{" "}
            <Download
              size={20}
              className="group-hover:translate-y-[-2px] transition-transform"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
