import Link from "next/link";
import React from "react";
import { TbSourceCode } from "react-icons/tb";
import { Tilt } from "./ui/tilt";
import Image from "next/image";
import InteractiveHoverButton from "./ui/interactivehoverbutton";
import ShimmerButton from "./ui/Shinybutton";
const projects = [
  {
    id: 1,
     title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  },
  {
    id: 4,
     title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website with product listings and  cart functionality",
    demoLink: "https://e-commerce-shopco.vercel.app",
    codeLink:
      "https://github.com/AliAskariGithub/E__commerce__website",
    image: "/ecommerce.png",
  }
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex justify-center items-center h-max bg-[rgb(228,228,228)] w-full dark:bg-[rgb(15,15,15)] relative py-20 z-20"
    >
      <section className="flex flex-col items-center justify-center max-w-6xl px-6 md:px-16 h-full space-y-10 gap-10">
        <h1 className="text-4xl font-extrabold mb-6 text-center dark:text-white text-black heading-animation">
          My Projects
        </h1>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-max justify-center items-center">
          {projects.map((project) => (
            <Tilt rotationFactor={8} isRevese key={project.id}>
              <div
                className="relative flex flex-col w-full h-full justify-between d-link items-end overflow-hidden  border rounded-xl dark:border-zinc-950/10 border-gray-300/10 dark:bg-[rgb(23,23,23)] bg-[rgb(255,255,255)] shadow-lg hover:shadow-xl p-2"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="h-48 w-full object-cover rounded-xl"
                />

                <div className="p-4">
                  <h2 className="font-mono leading-snug text-black dark:text-white text-lg font-bold">
                    {project.title}
                  </h2>
                  <p className="text-sm text-black/70 dark:text-white/70 mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className="flex space-x-4">
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <InteractiveHoverButton text="View"/>
                    </Link>
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      <ShimmerButton  className="flex items-center justify-center gap-2 shadow-xl ">
                      <TbSourceCode size={20} /> Code
                      </ShimmerButton>
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
