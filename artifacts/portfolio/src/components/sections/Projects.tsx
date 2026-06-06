import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import shatranj1 from "@assets/Screenshot_(16)_1780789607629.png";
import shatranj2 from "@assets/Screenshot_(17)_1780789607630.png";
import shatranj3 from "@assets/Screenshot_(18)_1780789607631.png";
import shatranj4 from "@assets/Screenshot_(19)_1780789607632.png";
import shatranj5 from "@assets/Screenshot_(20)_1780789607632.png";
import shatranj6 from "@assets/Screenshot_(21)_1780789607633.png";
import shatranj7 from "@assets/Screenshot_(22)_1780789607639.png";

const SHATRANJ_SCREENSHOTS = [
  { src: shatranj1, label: "Pairing Arena" },
  { src: shatranj2, label: "AI Chess Engine" },
  { src: shatranj3, label: "Interactive Lessons" },
  { src: shatranj4, label: "Tactics Puzzles" },
  { src: shatranj5, label: "Opening Explorer" },
  { src: shatranj6, label: "Interactive Analysis" },
  { src: shatranj7, label: "Global Leaderboards" },
];

function ShatranjCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SHATRANJ_SCREENSHOTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SHATRANJ_SCREENSHOTS.length) % SHATRANJ_SCREENSHOTS.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SHATRANJ_SCREENSHOTS.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video shadow-2xl group-hover:border-white/20 transition-all duration-500">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={SHATRANJ_SCREENSHOTS[current].src}
          alt={SHATRANJ_SCREENSHOTS[current].label}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full object-cover"
          data-testid={`img-shatranj-${current}`}
        />
      </AnimatePresence>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-10">
        <span className="text-sm font-mono text-white/70 tracking-wider uppercase">
          {SHATRANJ_SCREENSHOTS[current].label}
        </span>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
        data-testid="button-shatranj-prev"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
        data-testid="button-shatranj-next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
        {SHATRANJ_SCREENSHOTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            data-testid={`button-shatranj-dot-${idx}`}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-4 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Flagship badge */}
      <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(229,9,20,0.5)]">
        Flagship Project
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: "shatranj",
    title: "Shatranj",
    type: "Large-scale Web Application",
    description: "A full-scale real-time multiplayer chess platform. Features an elegant glassmorphic interface, sophisticated matchmaking, AI coaching, game analysis, and a comprehensive ranking system.",
    features: [
      "Real-time online multiplayer & matchmaking",
      "ELO rating system & global leaderboards",
      "AI Coach with GrandMaster advisory",
      "Interactive lessons, puzzles & opening explorer",
    ],
    tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "Chess Engine"],
    flagship: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "openminded",
    title: "OpenMinded Intelligence",
    type: "AI Startup Website",
    description: "AI-focused platform featuring modern design, branding, responsive layouts, and engaging user experiences tailored for the next generation of AI tools.",
    image: null,
    features: [
      "Futuristic UI/UX design",
      "Intricate data visualizations",
      "Responsive glassmorphic layouts",
      "Performance optimized",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    flagship: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "beyond",
    title: "Beyond",
    type: "Creative Platform",
    description: "A premium content-focused platform designed around storytelling, modern aesthetics, and immersive user experiences with large elegant typography.",
    image: null,
    features: [
      "Immersive storytelling layout",
      "Masonry media grids",
      "Smooth scroll reveals",
      "Premium typography system",
    ],
    tech: ["React", "Vite", "GSAP", "Styled Components"],
    flagship: false,
    liveUrl: "#",
    githubUrl: "#",
  },
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
              className={`group flex flex-col ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Image / Carousel */}
              <div className="w-full lg:w-3/5 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-full z-0"></div>
                <div className="relative z-10">
                  {project.id === "shatranj" ? (
                    <ShatranjCarousel />
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                      <div className="text-white/20 text-lg font-mono tracking-wider">
                        {project.title}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
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
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Button
                    asChild
                    className="rounded-full shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] transition-all"
                    data-testid={`button-live-${project.id}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/20 hover:bg-white/10 transition-all"
                    data-testid={`button-github-${project.id}`}
                  >
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
