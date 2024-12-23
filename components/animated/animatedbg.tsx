"use client";

import React from "react";
import { loadFull } from "tsparticles";
import { Engine, Container } from "tsparticles-engine";
import Particles from "react-tsparticles";

const ParticlesEffect: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    console.log(container);
  };

  return (
    <div id="tsparticles">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: true, mode: "push" },
              onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          particles: {
            color: { value: "#888888" },
            line_linked: {
              color: "#888888",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
              random: false,
              value: 0.5,
            },
            shape: {
              type: "circle",
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
              },
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5,
            },
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: "",
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticlesEffect;
