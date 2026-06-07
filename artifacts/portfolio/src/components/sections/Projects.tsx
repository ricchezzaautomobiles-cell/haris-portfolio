import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import shatranj1 from "@assets/Screenshot_(16)_1780789607629.png";
import shatranj2 from "@assets/Screenshot_(17)_1780789607630.png";
import shatranj3 from "@assets/Screenshot_(18)_1780789607631.png";
import shatranj4 from "@assets/Screenshot_(19)_1780789607632.png";
import shatranj5 from "@assets/Screenshot_(20)_1780789607632.png";
import shatranj6 from "@assets/Screenshot_(21)_1780789607633.png";
import shatranj7 from "@assets/Screenshot_(22)_1780789607639.png";

import beyond1 from "@assets/Screenshot_(24)_1780789869651.png";
import beyond2 from "@assets/Screenshot_(25)_1780789869651.png";
import beyond3 from "@assets/Screenshot_(26)_1780789869652.png";
import beyond4 from "@assets/Screenshot_(27)_1780789869671.png";
import beyond5 from "@assets/Screenshot_(28)_1780789869672.png";
import beyond6 from "@assets/Screenshot_(29)_1780789869672.png";
import beyond7 from "@assets/Screenshot_(30)_1780789869672.png";
import beyond8 from "@assets/Screenshot_(31)_1780789869673.png";
import beyond9 from "@assets/Screenshot_(32)_1780789869673.png";
import beyond10 from "@assets/Screenshot_(33)_1780789869673.png";
import beyond11 from "@assets/Screenshot_(34)_1780789869674.png";
import beyond12 from "@assets/Screenshot_(35)_1780789869674.png";
import beyond13 from "@assets/Screenshot_(36)_1780789869674.png";
import beyond14 from "@assets/Screenshot_(37)_1780789869675.png";
import beyond15 from "@assets/Screenshot_(38)_1780789869675.png";
import beyond16 from "@assets/Screenshot_(39)_1780789869675.png";

import openminded1 from "@assets/Screenshot_(76)_1780831241851.png";
import openminded2 from "@assets/Screenshot_(77)_1780831241852.png";
import openminded3 from "@assets/Screenshot_(78)_1780831241853.png";
import openminded4 from "@assets/Screenshot_(79)_1780831241853.png";
import openminded5 from "@assets/Screenshot_(80)_1780831241854.png";
import openminded6 from "@assets/Screenshot_(81)_1780831241854.png";
import openminded7 from "@assets/Screenshot_(82)_1780831241855.png";

const OPENMINDED_SCREENSHOTS = [
  { src: openminded1, label: "Cognitive Intelligence — Landing" },
  { src: openminded2, label: "Find Clarity in Complexity" },
  { src: openminded3, label: "Cognitive Products Ecosystem" },
  { src: openminded4, label: "The Ecosystem of Clarity" },
  { src: openminded5, label: "About the Founder" },
  { src: openminded6, label: "The Next Interface is Intelligence" },
  { src: openminded7, label: "Build Beyond" },
];

const BEYOND_SCREENSHOTS = [
  { src: beyond1, label: "Think Clearly — Landing" },
  { src: beyond2, label: "Neural Engine Active" },
  { src: beyond3, label: "Elite Reasoning as a Service" },
  { src: beyond4, label: "Navigate High-Stakes Choices" },
  { src: beyond5, label: "Ready to Evolve" },
  { src: beyond6, label: "Dashboard — System Active" },
  { src: beyond7, label: "New Decision — Structure Your Thought" },
  { src: beyond8, label: "Analyze Decision Form" },
  { src: beyond9, label: "Strategy Archive" },
  { src: beyond10, label: "Strategic Architecture" },
  { src: beyond11, label: "System Recommendation" },
  { src: beyond12, label: "Long-Term Horizon & Bias Alert" },
  { src: beyond13, label: "Intelligence Feed" },
  { src: beyond14, label: "Systems Configuration — Profile" },
  { src: beyond15, label: "Systems Configuration — Theme" },
  { src: beyond16, label: "Welcome Back" },
];

const SHATRANJ_SCREENSHOTS = [
  { src: shatranj1, label: "Pairing Arena" },
  { src: shatranj2, label: "AI Chess Engine" },
  { src: shatranj3, label: "Interactive Lessons" },
  { src: shatranj4, label: "Tactics Puzzles" },
  { src: shatranj5, label: "Opening Explorer" },
  { src: shatranj6, label: "Interactive Analysis" },
  { src: shatranj7, label: "Global Leaderboards" },
];

function ProjectCarousel({ screenshots, projectId }: { screenshots: { src: string; label: string }[]; projectId: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video shadow-2xl group-hover:border-white/20 transition-all duration-500">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={screenshots[current].src}
          alt={screenshots[current].label}
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
          className="absolute inset-0 w-full h-full object-cover object-top"
          data-testid={`img-${projectId}-${current}`}
        />
      </AnimatePresence>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-10">
        <span className="text-sm font-mono text-white/70 tracking-wider uppercase">
          {screenshots[current].label}
        </span>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
        data-testid={`button-${projectId}-prev`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
        data-testid={`button-${projectId}-next`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators — capped at 10 visible dots for dense sets */}
      <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            data-testid={`button-${projectId}-dot-${idx}`}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-4 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ShatranjCarousel() {
  return (
    <div className="relative">
      <ProjectCarousel screenshots={SHATRANJ_SCREENSHOTS} projectId="shatranj" />
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
    liveUrl: "https://shatranj-gb.vercel.app",
  },
  {
    id: "openminded",
    title: "OpenMinded Intelligence",
    type: "AI Startup Website",
    description: "An AI intelligence platform building cognitive tools for clarity and human thinking. Features a full product ecosystem — Beyond, Neural Memory, Cognitive OS — engineered around zero-friction interactivity and premium dark aesthetics.",
    features: [
      "Cognitive product ecosystem (Beyond, OMI Research, Neural Memory)",
      "Interactive intelligence layer & strategic analysis demo",
      "Premium dark UI with cinematic motion design",
      "Founded & built by Haris at 19",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    flagship: false,
    liveUrl: "https://openminded-intelligence.vercel.app",
  },
  {
    id: "beyond",
    title: "Beyond",
    type: "Decision Clarity AI",
    description: "An AI-powered decision intelligence platform that deconstructs complexity and restores clarity. Uses structural logic and first-principles reasoning to help users navigate high-stakes choices with confidence.",
    features: [
      "AI-driven strategic analysis & recommendations",
      "First-principles & bias detection reasoning",
      "Decision archive with clarity scoring",
      "Intelligence feed — meta-analysis of patterns",
    ],
    tech: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Tailwind CSS", "Framer Motion"],
    flagship: false,
    liveUrl: "https://beyond.openminded.vercel.app",
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
                  ) : project.id === "beyond" ? (
                    <ProjectCarousel screenshots={BEYOND_SCREENSHOTS} projectId="beyond" />
                  ) : project.id === "openminded" ? (
                    <ProjectCarousel screenshots={OPENMINDED_SCREENSHOTS} projectId="openminded" />
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
                    data-testid={`button-visit-${project.id}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> Visit Site
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
