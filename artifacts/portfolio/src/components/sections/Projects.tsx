import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    id: "shatranj",
    title: "Shatranj",
    type: "Large-scale Web Application",
    description: "A full-scale real-time multiplayer chess platform. Features an elegant glassmorphic interface, sophisticated matchmaking, and comprehensive game analysis.",
    image: "/images/shatranj.png",
    features: [
      "Real-time online multiplayer",
      "Matchmaking & ELO system",
      "AI Coach & Interactive lessons",
      "Tactical puzzles & Game Analysis"
    ],
    tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL"],
    flagship: true,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "openminded",
    title: "OpenMinded Intelligence",
    type: "AI Startup Website",
    description: "AI-focused platform featuring modern design, branding, responsive layouts, and engaging user experiences tailored for the next generation of AI tools.",
    image: "/images/openminded.png",
    features: [
      "Futuristic UI/UX design",
      "Intricate data visualizations",
      "Responsive glassmorphic layouts",
      "Performance optimized"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    flagship: false,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "beyond",
    title: "Beyond",
    type: "Creative Platform",
    description: "A premium content-focused platform designed around storytelling, modern aesthetics, and immersive user experiences with large elegant typography.",
    image: "/images/beyond.png",
    features: [
      "Immersive storytelling layout",
      "Masonry media grids",
      "Smooth scroll reveals",
      "Premium typography system"
    ],
    tech: ["React", "Vite", "GSAP", "Styled Components"],
    flagship: false,
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section className="py-32 relative" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured Work</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              className={`group flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-full z-0"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <div className="text-white/20 text-lg font-mono">Image Generation Pending</div>
                  )}
                  {project.flagship && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(229,9,20,0.5)]">
                      Flagship Project
                    </div>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col">
                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
                  {project.type}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white font-medium mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/80 border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Button asChild className="rounded-full shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] transition-all">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10 transition-all">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
