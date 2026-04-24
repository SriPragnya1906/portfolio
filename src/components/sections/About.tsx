import SectionWrapper from "../SectionWrapper";
import { PORTFOLIO_STATS } from "@/lib/constants";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12 relative overflow-hidden">
          <h2 className="font-heading text-4xl md:text-5xl font-bold flex-shrink-0">
            About <span className="text-gold">Me</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-gold/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 text-text-muted leading-relaxed">
            <p className="text-lg">
              Hello! I'm <span className="text-white font-medium">B. S. Sri Pragnya</span>, a passionate Frontend Developer focused on building robust, scalable digital solutions. With expertise in React 19, TypeScript, and Tailwind CSS, I create beautiful, responsive, and accessible user interfaces.
            </p>
            <p className="text-lg">
              My engineering journey extends beyond the browser. I have hands-on experience building intelligent systems with Python, FastAPI, and LangChain, seamlessly connecting frontend aesthetics with advanced AI capabilities and relational databases.
            </p>
            <p className="text-lg">
              I am particularly drawn to <span className="text-cyan font-medium">innovative AI technologies</span>. My goal is to build applications that not only look great but also leverage modern AI frameworks to make a tangible, positive impact on user workflows and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6">
            {PORTFOLIO_STATS.map((stat, i) => (
              <div 
                key={i} 
                className="glass-card relative p-6 sm:p-8 group hover:-translate-y-2 transition-transform duration-300 rounded-lg overflow-hidden"
              >
                {/* Top Border Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs sm:text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
