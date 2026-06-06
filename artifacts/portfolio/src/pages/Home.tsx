import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
