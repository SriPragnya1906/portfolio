import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SpeedDialNav from "@/components/SpeedDialNav";

export default function Home() {
  return (
    <main className="relative z-0">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <SpeedDialNav />
    </main>
  );
}
