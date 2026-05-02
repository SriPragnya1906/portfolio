"use client";

import { ExpandableSpeedDial } from "@/components/lightswind/expandable-speed-dial";
import { User, Code, Briefcase, Mail, ArrowUp } from "lucide-react";

export default function SpeedDialNav() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <ExpandableSpeedDial
        direction="up"
        size="md"
        actions={[
          {
            icon: <ArrowUp size={16} />,
            label: "Top",
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          },
          {
            icon: <User size={16} />,
            label: "About",
            onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
          },
          {
            icon: <Code size={16} />,
            label: "Skills",
            onClick: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
          },
          {
            icon: <Briefcase size={16} />,
            label: "Projects",
            onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
          },
          {
            icon: <Mail size={16} />,
            label: "Contact",
            onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
          },
        ]}
      />
    </div>
  );
}
