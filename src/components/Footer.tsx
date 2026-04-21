import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-20 mt-32 bg-stone-50 dark:bg-stone-950 flex flex-col items-center gap-10 px-4 text-center">
      
      {/* Closing Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl font-accent text-slate-500 max-w-xl leading-relaxed"
      >
        Built for something bigger than myself,
        <br />
        becoming someone I once promised.
      </motion.div>

      {/* Social Links */}
      <div className="flex gap-6 font-headline text-xs tracking-widest uppercase">
        
        <a
          href="https://github.com/Gahlawat-9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 text-slate-400 hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
        >
          <Github size={16} /> Github
        </a>

        <a
          href="https://www.linkedin.com/in/priyanshi-gahlawat-534673370/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 text-slate-400 hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
        >
          <Linkedin size={16} /> LinkedIn
        </a>

        <a
          href="https://drive.google.com/file/d/1_kCIMnfkYTEP5FEoN0B0iKNbJ3CA7Ox2/view?usp=sharing"   // 👉 replace with your actual resume path or drive link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 text-slate-400 hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
        >
          <FileText size={16} /> Resume
        </a>

      </div>

      {/* Copyright */}
      <div className="text-slate-400 text-xs font-body tracking-widest uppercase opacity-70">
        © {new Date().getFullYear()} Priyanshi Gahlawat · Crafted with intention 
      </div>

      {/* Final Line */}
      <p className="text-xs italic text-primary/50 mt-1">
        This is just the beginning.
      </p>

      {/* Scroll to Top */}
      <motion.button
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="mt-6 text-primary/50 hover:text-primary transition-all p-3 rounded-full hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}