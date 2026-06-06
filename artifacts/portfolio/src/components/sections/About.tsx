import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 relative" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Abstract decorative element replacing a photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-black border border-white/10 rounded-3xl transform rotate-3 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="w-32 h-32 bg-primary rounded-full blur-[60px] opacity-40"></div>
                <div className="font-display text-8xl font-bold text-white/5">H.</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-white font-medium">Haris</strong> is a developer focused on creating modern digital experiences, AI-powered applications, SaaS platforms, and real-time multiplayer systems.
              </p>
              <p>
                He combines beautiful design, strong engineering, and user-centered experiences to build products that people love to use. Operating at the intersection of aesthetics and functionality, he believes that the best software feels inevitable — precise, fast, and crafted with deep care.
              </p>
              <p>
                Whether building a real-time chess engine, architecting AI interfaces, or designing premium brand platforms, the goal remains the same: delivering serious engineering wrapped in uncompromising design.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
