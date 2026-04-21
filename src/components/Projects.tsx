import { motion } from "motion/react";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  Activity,
  CheckCircle,
  Palette,
  MousePointer2,
  Sparkles,
  Pencil,
  Quote
} from "lucide-react";

const projects = [
  {
    id: "erp",
    title: "Factory ERP System",
    category: "Full Stack Web App",
    description:
      "A role-based ERP platform to manage orders, production workflows, and client communication for a manufacturing business. Includes real-time order tracking, blueprint sharing, and approval system.",
    image: "/images/erp.png",
    features: [
      { icon: ClipboardList, label: "Order Management" },
      { icon: FileText, label: "Blueprint & Quotation" },
      { icon: Activity, label: "Production Tracking" },
      { icon: CheckCircle, label: "Client Approval Flow" }
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Gahlawat-9/appliance-forge-frontend",
    live: "https://appliance-forge-frontend.vercel.app/",
    fullWidth: true
  },
  {
    id: "veg",
    title: "VEG Intel",
    category: "Full Stack Web App",
    description:
      "A smart agriculture platform with a farmer mobile app and admin dashboard enabling crop management, visualization, and intelligent decision-making.",
    image: "/images/veg.png",
    tags: ["React", "React Native", "Node.js", "MongoDB"],
    github: "https://github.com/Gahlawat-9/veg-intel",
    colSpan: 7
  },
  {
    id: "expense",
    title: "Expense Tracker",
    category: "Analytics Dashboard",
    description:
      "A Java-based expense tracker using Swing and JFreeChart for managing and visualizing daily expenses.",
    image: "/images/java.png",
    tags: ["Java", "Swing", "JFreeChart"],
    quote: "Track Every Penny.",
    github: "https://github.com/Gahlawat-9/expense-tracker-java",
    colSpan: 5,
    offset: true
  },
  {
    id: "mental",
    title: "AI Mental Wellness App",
    category: "Web App",
    description:
      "A wellness app to track emotions, manage stress, and improve mental health with a simple UI.",
    image: "/images/mental.png",
    tags: ["React", "Node.js", "API"],
    quote: "Feel. Heal. Repeat.",
    github: "https://github.com/Gahlawat-9/ai-mental-wellness-frontend",
    live: "https://ai-mental-wellness-frontend.vercel.app/",
    colSpan: 5,
    offset: true
  }
];

export default function Projects() {
  return (
    <section id="library" className="pt-32 px-4 max-w-7xl mx-auto">

      {/* Header */}
      <header className="mb-24 relative">
        <motion.h1 className="font-headline text-7xl font-extrabold mb-6">
          Meaningful <span className="text-primary italic">Craft</span>
        </motion.h1>
        <p className="max-w-xl text-xl text-on-surface-variant">
          Every line of code is a brushstroke in a larger portrait of accessibility.
        </p>
      </header>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`${project.fullWidth
              ? "md:col-span-12"
              : project.colSpan === 7
              ? "md:col-span-7"
              : "md:col-span-5"
            } ${project.offset ? "md:mt-32" : ""}`}
          >

            {project.fullWidth ? (
              /* ================= ERP ================= */
              <div className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col lg:flex-row transition-all duration-500 hover:shadow-2xl">

                {/* Image */}
                <div className="lg:w-2/3 h-[500px]">
                  <img src={project.image} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="lg:w-1/3 p-12 flex flex-col justify-center">

                  <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
                    {project.category}
                  </span>

                  <h3 className="font-headline text-4xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-on-surface-variant mb-6 italic">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {project.features?.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-primary">
                        <f.icon size={18} />
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-6">
                    {project.github && (
                      <a href={project.github} target="_blank">
                        <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-semibold">
                          GitHub
                        </span>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank">
                        <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-semibold">
                          Live
                        </span>
                      </a>
                    )}
                  </div>

                  {/* Explore */}
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    className="mt-8 flex items-center gap-2 text-primary font-bold"
                  >
                    Explore the Logic
                    <ArrowRight size={18} />
                  </a>

                </div>
              </div>

            ) : (
              /* ================= NORMAL CARDS ================= */
              <div className="bg-surface-container-high rounded-lg p-8 h-full flex flex-col transition-all duration-300 hover:translate-y-[-8px] shadow-sm">

                <div className="rounded-lg overflow-hidden mb-6">
                  <img src={project.image} className="w-full h-full object-cover" />
                </div>

                <span className="text-xs font-bold uppercase text-primary/60 mb-2">
                  {project.category}
                </span>

                <h3 className="font-headline text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-on-surface-variant mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                  {project.github && (
                    <a href={project.github} target="_blank">
                      <span className="text-primary text-sm font-semibold">
                        GitHub
                      </span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank">
                      <span className="text-primary text-sm font-semibold">
                        Live
                      </span>
                    </a>
                  )}
                </div>

                {/* Quote */}
                {project.quote && (
                  <p className="mt-4 italic text-tertiary">
                    "{project.quote}"
                  </p>
                )}

              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <section className="mt-32 text-center">
        <Quote className="text-primary opacity-20 mx-auto mb-6" size={50} />
        <p className="text-2xl italic max-w-xl mx-auto text-on-surface">
          Technology reaches its highest form when it becomes invisible.
        </p>
      </section>
    </section>
  );
}