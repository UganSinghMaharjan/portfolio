import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-12">
        <div className="flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
        </div>
        <div className="h-4 w-[1px] bg-white/10" />
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/UganSinghMaharjan"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ugan-maharjan-925abb322/"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:uganmaharjan9@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
