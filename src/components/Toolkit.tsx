import { motion } from "motion/react";
import { Mail, MapPin, Leaf, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Toolkit() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_l9oawi7",     
        "template_ulmr6an",   
        form.current,
        "7wPkWzffs5r95pusl"     
      )
      .then(
        () => {
          setStatus("sent");
          form.current?.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="notes" className="pt-32 pb-16">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row items-end gap-4">
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface">
            The Toolkit & <span className="text-primary italic">Sanctuary</span>
          </h1>
          <p className="font-accent text-2xl text-tertiary mb-4 md:mb-8 opacity-80">
            where ideas bloom...
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-8 mb-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left */}
          <div className="md:col-span-4 md:sticky md:top-40">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">
              A Garden of Growth
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Technology isn't a static list of proficiencies. To me, it's a living ecosystem.
            </p>

            <div className="mt-8 p-6 bg-secondary-container rounded-lg border-l-4 border-primary">
              <Leaf className="text-primary mb-2" size={32} />
              <p className="italic text-on-secondary-container font-medium">
                Currently nurturing: Full Stack Development & Problem Solving.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Languages */}
            <div className="sm:col-span-2 p-8 bg-surface-container-lowest rounded-lg hover:scale-[1.02] transition">
              <h3 className="text-sm font-bold uppercase tracking-widest text-outline">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {["C/C++", "Java", "JavaScript", "SQL", "HTML5", "CSS3"].map(skill => (
                  <span key={skill} className="px-5 py-2 bg-primary-container hover:bg-primary/20 transition rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-8 bg-surface-container-low rounded-lg hover:scale-[1.02] transition">
              <h3 className="text-sm font-bold uppercase tracking-widest text-outline">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {["React JS", "Node JS", "Express JS", "React Native"].map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-secondary-fixed rounded-full text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-8 bg-tertiary-container rounded-lg hover:scale-[1.02] transition">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-tertiary-container">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Git & GitHub", "MongoDB", "Postman", "Google Cloud", "Firebase"].map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-white/50 rounded-full text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Leaf Icon */}
            <div className="hidden sm:flex p-8 rounded-lg items-center justify-center bg-primary-container/20">
              <Leaf className="text-primary text-6xl opacity-20" size={64} />
            </div>

            {/* Core */}
            <div className="sm:col-span-2 p-8 bg-surface-container-highest rounded-lg relative">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {["Presentation Skills", "Team Leadership", "Problem Solving"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <section id="contact" className="pt-32 pb-16">
      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest/60 backdrop-blur-2xl rounded-lg p-12 md:p-20 border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Reaching Out to the <span className="text-primary italic">Sanctuary</span>
              </h2>

              <p className="mb-8">
                Whether you have a technical question, a project idea, or just want to connect.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail />
                  <span>priyanshigahlawat9@gmail.com</span>
                </div>

                <div className="flex gap-4">
                  <MapPin />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              <input name="name" required placeholder="Your Name"
                className="p-4 rounded-lg bg-surface-container-high" />

              <input name="email" type="email" required placeholder="Email"
                className="p-4 rounded-lg bg-surface-container-high" />

              <textarea name="message" required placeholder="Message"
                className="p-4 rounded-lg bg-surface-container-high" />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="py-4 bg-primary text-white rounded-xl flex justify-center gap-2"
              >
                <Send size={20} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {/* STATUS MESSAGE */}
              {status === "sent" && (
                <p className="text-green-500 text-sm">Message sent successfully 🌿</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong ❌</p>
              )}
            </form>

          </div>
        </motion.div>
      </div>
      </section>

    </section>
  );
}