"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="flex justify-center items-center h-max md:h-screen mt-56 md:mt-40  bg-[rgb(228,228,228)] w-full dark:bg-[rgb(15,15,15)] relative py-20"
    >
      <div className="flex flex-col puff-in-center md:flex-row items-center justify-center max-w-6xl px-6 md:px-16 h-max md:h-screen space-y-10 gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-black dark:text-white heading-animation">
            About Me
          </h2>
          <p className="text-black/80 dark:text-white/80 leading-relaxed text-lg max-w-2xl">
            I am <strong>Ali Askari</strong>, an 15 yrs old, energetic Front-End
            Developer with expertise in front-end development. My passion is all
            about the art of spectacular web experiences designed to attract and
            engage visitors through an intuitive interaction. My skills include{" "}
            <strong>
              HTML, CSS, JavaScript, TypeScript, React.js, and Next.js
            </strong>
            , synthesizing design and function to create a great user
            experience.
          </p>
          <p className="text-black/80 dark:text-white/80 leading-relaxed text-lg max-w-2xl">
            What I really live for is solving problems in an innovative way with
            passion and learning new technologies like Back-End Development, AI
            and the Metaverse. My ultimate dream is to work on projects that
            could change humanity and advance the web towards a promising
            future.
          </p>
        </div>

        <div>
          <Image
            src={"/about.png"}
            alt="About image"
            width={1000}
            height={1000}
            className="relative w-full h-full md:w-96 md:h-60 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
