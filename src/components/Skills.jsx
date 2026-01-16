import { motion } from "framer-motion";
import { Database, Layout, Server, Zap } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"],
    icon: <Layout className="text-blue-400" />,
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "GraphQL", "Rest API"],
    icon: <Server className="text-purple-400" />,
  },
  {
    name: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    icon: <Database className="text-pink-400" />,
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "AWS", "Vite"],
    icon: <Zap className="text-yellow-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
          Technical Stack
        </h2>
        <p className="text-gray-400 font-light tracking-widest uppercase text-sm">
          Elevating ideas with modern tech
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="glass p-8 rounded-[2.5rem] hover:scale-[1.03] transition-all duration-500 hover:border-blue-500/30 group"
          >
            <div className="mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-500">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">
              {skill.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 font-medium group-hover:text-blue-300 transition-colors duration-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
