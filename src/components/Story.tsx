import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

export default function Story() {
  return (
    <section id="sanctuary" className="pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        {/* Hero Title */}
        <div className="mb-24 text-center">
          <motion.span 
            
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="font-accent text-primary text-2xl mb-4 block"
          >
            a journey from confusion to clarity… and still becoming.
          </motion.span>
          <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight mb-4"
          >
            My Story
          </motion.h1>
          <div className="w-24 h-1 bg-primary-container mx-auto rounded-full"></div>
        </div>

        {/* Chapter: The Spark */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-48 relative">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -top-12 -left-8 font-accent text-tertiary opacity-60 text-lg rotate-[-5deg]">
              It started with a blink...
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(49,51,49,0.08)] bg-surface-container-lowest p-4">
              <img 
                alt="The Spark" 
                className="rounded-md w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                whileHover={{ scale: 1.02 }}
                referrerPolicy="no-referrer"
                src="/images/spark.png"
              />
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="space-y-8 pr-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-container/40 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
              Chapter I
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Spark</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                In the beginning, I didn’t fall in love with code instantly.It started slowly — with curiosity, with small wins, with moments where something finally worked after hours of trying. That feeling… it stayed. 
              </p>
              <p>
                I wasn’t chasing perfection. I was chasing understanding. Somewhere between writing my first lines of code and breaking things I didn’t understand, I realized — this wasn’t just a subject. It was something I could grow into.
                And maybe, something that could shape me too.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <span className="w-12 h-px bg-outline-variant"></span>
              <span className="font-accent text-xl text-primary">"A simple 'Hello World' felt like a universe."</span>
            </div>
          </motion.div>
        </div>

        {/* Chapter: The Struggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-48 relative">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8 pl-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-container/40 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
              Chapter II
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Struggle</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
              <p>
                But it wasn’t always smooth. There were phases where nothing made sense. Concepts felt heavy, progress felt slow, and comparison made it worse. I’ve had moments where I questioned myself — if I’m really made for this, if I’m doing enough, if I’m already behind.
              </p>
              <p>
                But instead of quitting, I stayed. Not because it was easy, but because something inside me didn’t want to leave this path unfinished. I started understanding that growth isn’t loud. It’s quiet, uncomfortable, and sometimes invisible. And that’s where the real change happens.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -right-16 -top-4 font-accent text-tertiary opacity-70 text-base md:text-lg rotate-[3deg] max-w-[150px]">
                Growth doesn’t always look like progress…
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative group"
          >
            <div className="rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(49,51,49,0.08)] bg-surface-container-lowest p-4">
              <img 
                alt="The Struggle" 
                className="rounded-md w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                whileHover={{ scale: 1.02 }}
                referrerPolicy="no-referrer"
                src="/images/struggle.png"
              />
            </div>
          </motion.div>
        </div>

        {/* Chapter: The Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -bottom-10 -right-8 font-accent text-primary text-xl rotate-[-2deg] z-10">
              Humanity &gt; Binary
            </div>
            <div className="rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(49,51,49,0.08)] bg-surface-container-lowest p-4">
              <img 
                alt="The Vision" 
                className="rounded-md w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                whileHover={{ scale: 1.02 }}
                referrerPolicy="no-referrer"
                src="/images/vision.png"
              />
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 40 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
            className="space-y-8 pr-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-container/40 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
              Chapter III
            </div>
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Vision</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg">
              <p>
                Now, I don’t just see coding as a skill. I see it as a way to build things that actually matter. I want to create experiences — not just interfaces. Things that feel intentional, calm, and human. 
              </p>
              <p>
                I’m still learning. Still figuring things out. Still becoming. But now, I’m building with purpose. Not to prove something to the world — but to create something I can be proud of. Something that feels real. Something that lasts.
              </p>
            </div>
            <div className="pt-8">
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all duration-300 hover:text-white group"
              >
                Explore the Garden
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature Component: The Quote */}
      <section className="w-full bg-surface-container-low py-24 mb-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote className="text-primary text-6xl opacity-30 mx-auto mb-8" size={64} />
          <p className="font-headline text-3xl md:text-4xl font-semibold text-on-surface leading-snug italic">
            "I’m not trying to be the best. I’m trying to become someone I’m proud of — one step, one build, one day at a time."
          </p>
          <div className="mt-8 font-accent text-2xl text-tertiary">- Priyanshi Gahlawat</div>
        </div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-container/10 rounded-full blur-3xl"></div>
      </section>
    </section>
  );
}
