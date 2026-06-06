import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Database, Layers, LayoutTemplate } from "lucide-react";

const SERVICES = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Website Development",
    description: "Premium marketing websites, portfolios, and landing pages built for performance and visual impact."
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms with robust authentication, billing, and multitenancy."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "AI Web Applications",
    description: "Integrating LLMs and AI services into sleek interfaces that feel magical to end-users."
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Real-Time Applications",
    description: "WebSockets, live collaboration, and multiplayer systems where state synchronization is critical."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "Dashboard Development",
    description: "Data-heavy internal tools and customer portals designed for clarity and rapid interaction."
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "UI/UX Design",
    description: "Transforming complex requirements into elegant, intuitive interfaces that users understand instantly."
  }
];

export function Services() {
  return (
    <section className="py-24 bg-black/30 border-y border-white/5 relative" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Specialized solutions for modern digital problems. From architecture to pixel-perfect implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
