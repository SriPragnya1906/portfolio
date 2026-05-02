"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 120, links: { opacity: 0.3 } } },
        },
        particles: {
          color: { value: ["#6366f1", "#818cf8"] },
          links: {
            color: "#6366f1",
            distance: 160,
            enable: true,
            opacity: 0.07,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: { value: 40, density: { enable: true } },
          opacity: { value: 0.2 },
          shape: { type: "circle" },
          size: { value: { min: 0.5, max: 1.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
