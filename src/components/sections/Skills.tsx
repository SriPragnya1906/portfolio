import SectionWrapper from "../SectionWrapper";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 relative overflow-hidden">
          <h2 className="font-heading text-4xl md:text-5xl font-bold flex-shrink-0">
            Technical <span className="text-gold">Arsenal</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-gold/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className="glass-card relative p-8 rounded-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="font-mono text-xl text-gold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className={`text-xs font-mono px-3 py-1.5 border rounded-sm ${
                      tag.type === "cloud" 
                        ? "border-cyan/30 text-cyan bg-cyan/5" 
                        : "border-gold/30 text-gold bg-gold/5"
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
