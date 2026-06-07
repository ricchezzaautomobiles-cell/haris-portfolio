import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-haris-1a48b1412" },
  { icon: SiFiverr, name: "Fiverr", href: "https://www.fiverr.com/s/0bpEZLr" },
  { icon: SiUpwork, name: "Upwork", href: "https://www.upwork.com/freelancers/~01c3f62a28d5805924" },
];

export function Contact() {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 border border-white/10 backdrop-blur-xl p-12 md:p-20 rounded-3xl shadow-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Looking for a developer who ships high-quality, production-ready products? Let's discuss your next project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" asChild className="h-16 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-105 transition-all w-full sm:w-auto">
              <a href="mailto:sultanharis655@gmail.com?subject=Project%20Inquiry&body=Hi%20Haris%2C%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.">
                <Mail className="mr-3 w-5 h-5" /> Start a Conversation
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
