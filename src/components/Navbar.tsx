import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Garden", href: "#garden" },
  { name: "Library", href: "#library" },
  { name: "Sanctuary", href: "#sanctuary" },
  { name: "Notes", href: "#notes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Garden");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Simple scroll spy
      const sections = navItems.map(item => ({
        name: item.name,
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0
      }));
      
      const scrollPos = window.scrollY + 100;
      const current = sections.reverse().find(s => scrollPos >= s.offset);
      if (current) setActiveItem(current.name);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/60 backdrop-blur-2xl border-b border-outline-variant/20 shadow-[0_8px_30px_rgb(49,51,49,0.05)] py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        <a 
  href="#garden"
  className="text-xl font-bold text-primary italic font-headline tracking-tight hover:opacity-80 transition"
>
  Priyanshi Gahlawat
</a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-headline tracking-tight transition-all duration-300 relative py-1 hover:-translate-y-0.5 ${
                activeItem === item.name 
                  ? "text-primary font-bold" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.name}
              {activeItem === item.name && (
                <motion.div 
                  layoutId="navUnderline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </a>
          ))}
        </div>

        <a href="#contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-semibold hover:bg-primary-dim transition-all duration-300"
        >
          Say Hello
        </motion.button></a>
      </nav>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: scrolled ? 1 : 0 }}
  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-primary/60 italic"
>
  still becoming
</motion.div>
    </header>
  );
}
