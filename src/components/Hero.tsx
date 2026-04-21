import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="garden" className="relative min-h-screen overflow-hidden pt-20 flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-40 blur-[120px] bg-gradient-to-br from-primary-container via-secondary-container to-surface-bright"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 opacity-20 blur-[80px] bg-primary"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-12 h-[1px] bg-outline-variant"></span>
            <span className="text-sm font-body uppercase tracking-[0.2em] text-on-surface-variant font-medium">Digital Sanctuary v.01</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tight leading-[1.05] mb-8"
          >
            Curating <span className="text-primary italic">quiet</span> strength, building with intention.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12"
          >
            Built in chaos, driven by purpose. 
Not just code, but something I believe in — for someone who believed in me.


          </motion.p>
          <p className="text-sm italic text-primary/80 -mt-6 mb-10">
  "This is just the beginning."
</p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a
  href="#library"
  className="bg-primary text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-primary-dim transition-all duration-300 ambient-glow inline-block"
>
  See what I'm building
</a>
            
            <div className="relative group">
              <span className="font-accent text-primary text-2xl absolute -top-8 -right-4 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                it's all in the details
              </span>
              <a href="#sanctuary" className="flex items-center gap-3 font-headline font-semibold text-on-surface hover:text-primary transition-colors">
                <span>Read the manifesto</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main Image Mask */}
          <div className="relative w-full aspect-[4/5] max-w-md rounded-[4rem] overflow-hidden shadow-2xl">
            <img 
              alt="Self-portrait silhouette" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsrGKPp5dGXlI-OPXvLSoF8GieBBMyRXwJP-gLLTrrm30ZLo27byiZnRN8r-P1tGj-swLq-BlZsxHOdsEBl8cnq2ffN8enGEYrimQIk5__tKmfv5ZPchNe71R1L6ImNArhnWJtu92QRsEOa-DKysR1KAzkmSkkQxUgQZSHQLUcLTk505B72t4XfZeOm67JYxRiWh3ovouBoWXCFaQX4KhfVs0I_NFXjD3Rj_wnI1o201sw1qOnZ5Sua1I0cC0lnSc1ViRuyF7Y9UGC"
            />
            
            {/* Floating Glass Card */}
            <motion.div 
              initial={{ x: 20, y: 20 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-8 -left-12 right-12 glass-card rounded-lg p-6 border border-white/20 ambient-glow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-sm text-on-surface">System Status</h3>
                  <p className="text-xs text-on-surface-variant">Still learning, still building</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-body text-on-surface-variant">Current Focus</span>
                  <span className="text-xs font-bold text-primary px-2 py-1 bg-primary-container/30 rounded-full">Becoming someone I promised</span>
                </div>
                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "66%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
                <p className="text-sm font-body italic text-on-surface-variant leading-snug">
                  "Solving for more than just performance—solving for purpose."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-4 w-32 h-32 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute bottom-0 -right-8 w-16 h-16 bg-tertiary-container rounded-lg rotate-12 -z-10"></div>
        </motion.div>
      </div>

      {/* Signature Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs font-body uppercase tracking-[0.3em] text-on-surface-variant/60">Scroll to enter the garden</span>
        <motion.div 
          animate={{ height: [24, 48, 24] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-gradient-to-b from-primary/40 to-transparent"
        />
      </div>
    </section>
  );
}
