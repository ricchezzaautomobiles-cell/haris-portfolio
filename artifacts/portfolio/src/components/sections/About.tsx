import { motion } from "framer-motion";
import harisPhoto from "@assets/656570260_1303229271906495_348179682110836769_n_1780853464341.png";

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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 rounded-3xl transform rotate-3 shadow-[0_0_60px_rgba(16,185,129,0.15)] border border-primary/20"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
                <img
                  src={harisPhoto}
                  alt="Haris"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-haris-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
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
                I am a <strong className="text-white font-medium">self-taught Full-Stack Web Developer</strong> focused on creating premium digital experiences, modern web applications, and AI-powered solutions.
              </p>
              <p>
                My expertise includes <strong className="text-white font-medium">Next.js, React, TypeScript, Tailwind CSS, Firebase</strong>, and modern frontend development. I enjoy building fast, scalable, and visually engaging products that combine strong functionality with exceptional design.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
