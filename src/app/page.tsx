import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-0">
      <ParticleBackground />
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
