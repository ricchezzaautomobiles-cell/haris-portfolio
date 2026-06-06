import { motion } from "framer-motion";

const STATS = [
  { value: "3", label: "Major Projects" },
  { value: "Real-Time", label: "Multiplayer Systems" },
  { value: "AI-Powered", label: "Applications" },
  { value: "Modern", label: "Full-Stack Development" }
];

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
