import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Firebase", level: 85 },
  { name: "Supabase", level: 82 },
  { name: "WebSockets", level: 88 },
  { name: "Real-Time Systems", level: 90 },
  { name: "AI Integration", level: 80 },
  { name: "UI/UX Design", level: 85 },
];

export function Skills() {
  return (
    <section className="py-24 bg-black/40 relative" id="skills">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Arsenal</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A comprehensive toolkit focused on modern web technologies, real-time architectures, and beautiful user interfaces.
            </p>
          </motion.div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                      style={{ boxShadow: "0 0 10px rgba(16,185,129,0.5)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
