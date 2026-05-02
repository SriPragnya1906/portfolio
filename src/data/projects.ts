export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  highlights?: string[];
  link: string;
  featured?: boolean;
  category?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "00",
    title: "AI Research Assistant Platform",
    subtitle: "Intelligence for Beginner Researchers",
    description: "A full-stack AI platform that empowers beginner researchers with structured roadmaps, idea blueprints, hypothesis validation, and limitation analysis — all powered by multi-model RAG pipelines with critic scoring.",
    longDescription: "Built for researchers who are just starting out, this platform takes a problem statement and generates a comprehensive research roadmap, highlights limitations, surfaces hypothetical edge-cases, and evaluates competing ideas using an ensemble of AI models scored by a critic agent. The RAG engine fuses LangChain retrieval with LangGraph orchestration to produce grounded, multi-perspective insights.",
    tags: ["React", "Tailwind CSS", "Python", "Flask", "LangChain", "LangGraph", "RAG", "Multi-Model AI"],
    highlights: [
      "Roadmap & blueprint generation from raw problem statements",
      "Hypothesis validation with limitation detection",
      "Multi-model critic scoring for idea evaluation",
      "RAG-powered retrieval with LangGraph orchestration"
    ],
    link: "#",
    featured: true,
    category: "AI / Research",
    status: "Live"
  },
  {
    id: "01",
    title: "VR Vision",
    subtitle: "Immersive Brand Experience",
    description: "A 3D marketing showcase for a VR headset brand — featuring interactive product visualization, cinematic scroll-driven storytelling, and spatial UI design that sells the future of immersive computing.",
    tags: ["Three.js", "React", "GSAP", "Blender", "Spline", "Tailwind CSS"],
    link: "#",
    category: "3D / Marketing",
    status: "Shipped"
  },
  {
    id: "02",
    title: "Uniclubs Management",
    description: "A digital framework to centralize student engagement. Provides a unified repository for students to discover, join, and lead campus clubs.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "#",
    category: "Full Stack"
  },
  {
    id: "03",
    title: "Debate Partner AI",
    description: "A Perspective Switching System designed to act as an intelligent debate partner, helping users explore counterarguments and broaden perspectives.",
    tags: ["React", "Python", "FastAPI", "LangChain"],
    link: "#",
    category: "AI / NLP"
  }
];
