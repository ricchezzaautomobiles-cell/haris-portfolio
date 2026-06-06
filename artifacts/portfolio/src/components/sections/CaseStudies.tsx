import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const STUDIES = [
  {
    id: "shatranj",
    title: "Building a Real-Time Chess Engine",
    project: "Shatranj",
    challenge: "Creating a seamless multiplayer experience requiring ultra-low latency, robust state synchronization to prevent cheating, and an elegant UI that didn't distract from the game itself.",
    solution: "Architected a custom WebSocket layer backed by Redis pub/sub for instant move broadcasting. Implemented an optimistic UI update pattern on the client to make moves feel instantaneous while server verification happens in the background.",
    results: "Achieved sub-50ms move latency globally. The platform handles concurrent matches smoothly while providing real-time ELO updates and game analysis post-match."
  },
  {
    id: "openminded",
    title: "Designing for AI Interactions",
    project: "OpenMinded Intelligence",
    challenge: "AI interfaces often feel overly technical or too generic. The challenge was building an identity and dashboard that felt cutting-edge but remained highly usable for non-technical users.",
    solution: "Developed a cohesive design system centered around dark glassmorphism and subtle glowing accents. Built complex data visualizations that react dynamically to AI outputs using Framer Motion for fluid state transitions.",
    results: "Delivered a premium, cohesive brand experience that elevates the perceived value of the underlying AI models."
  },
  {
    id: "beyond",
    title: "Building a Decision Intelligence Platform",
    project: "Beyond",
    challenge: "People facing high-stakes life decisions — career pivots, financial moves, life strategy — are overwhelmed by noise, emotion, and cognitive bias. Existing tools either give generic advice or reduce decisions to pros/cons lists. The challenge was building a system that thinks like a world-class strategist.",
    solution: "Architected an AI reasoning engine that applies first-principles deconstruction, bias detection, opportunity-cost analysis, and strategic depth scoring. Built a full SaaS product with auth, usage tiers, decision history, and an intelligence feed that meta-analyzes the user's decision patterns over time.",
    results: "A full-featured AI SaaS platform with clarity scoring, strategic architecture reports, cognitive bias alerts, and long-term horizon analysis — delivered with a premium dark UI that feels unlike any generic AI tool."
  }
];

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(STUDIES[0].id);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Deep Dives</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {STUDIES.map((study, i) => (
            <motion.div 
              key={study.id}
              className="border border-white/10 bg-black/40 rounded-xl overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
              >
                <div>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">{study.project}</span>
                  <h3 className="text-lg md:text-xl font-medium text-white">{study.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedId === study.id ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-medium mb-2">The Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">The Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">The Results</h4>
                          <p className="text-muted-foreground">{study.results}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
