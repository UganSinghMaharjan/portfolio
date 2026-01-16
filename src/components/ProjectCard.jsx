import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
  index,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Silkier spring settings: lower stiffness, higher damping for a "weightless" feel
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Quintic ease-out for ultra smoothness
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative glass overflow-hidden rounded-[2.5rem] flex flex-col md:flex-row group transition-colors duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]"
    >
      <div
        className="md:w-1/2 overflow-hidden relative"
        style={{ transform: "translateZ(30px)" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-1000 cubic-bezier(0.22, 1, 0.36, 1)"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div
        className="md:w-1/2 p-10 flex flex-col justify-center"
        style={{ transform: "translateZ(50px)" }}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-xs font-semibold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors duration-500 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-400/90 text-lg mb-8 leading-relaxed font-light">
            {description}
          </p>

          <div className="flex gap-4">
            <a
              href={liveLink}
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 transition-all duration-300"
            >
              Explore Live <ExternalLink size={18} />
            </a>
            <a
              href={githubLink}
              target="_blank"
              className="flex items-center gap-2 glass px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all active:scale-95 border border-white/10 transition-all duration-300"
            >
              Code <Github size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dynamic light follow effect (subtle) */}
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="absolute inset-0 pointer-events-none bg-blue-500/5 opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-700"
      />
    </motion.div>
  );
};

export default ProjectCard;
