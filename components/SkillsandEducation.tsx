"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/PinContainer";
import { Button } from "./ui/button";

const SkillsAndEducation = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 55 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 85 },
    { name: "React.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Figma", level: 60 },
    { name: "MongoDB", level: 65 },
    { name: "Clerk", level: 70 },
    { name: "Auth.js", level: 65 },
  ];

  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <section
      id="skillsandeducation"
      className="flex flex-col relative justify-center items-center h-max bg-[rgb(255,255,255)] w-full dark:bg-[rgb(23,23,23)] pt-20"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 md:px-16 h-full">
        <h2 className="text-4xl font-extrabold mb-6 text-center dark:text-white text-black">
          Skills
        </h2>
        <p className="text-sm text-center text-black dark:text-white">
          These all skills which I have learned from GIAIC in Past One Year 2024
          and also I made a lot of Projects which I already display below.{" "}
        </p>
        <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-full flex items-center justify-center d-link dark:text-white text-black  dark:bg-[rgb(23,23,23)] bg-white "
            >
              <PinContainer
                title={`${skill.level}% | ${getSkillLevel(skill.level)}`}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base dark:text-white text-black">
                    {skill.name}
                  </h3>
                  <div className="relative w-full h-2 bg-black/20 rounded-full overflow-hidden dark:bg-white/20">
                    <div
                      className="h-full dark:bg-white bg-black transition-all duration-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        <div className="flex  flex-col items-center justify-center max-w-6xl px-6 md:px-16 h-full mb-20">
          <div className=" grid md:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            {(showAllSkills ? skills : skills.slice(0, 5)).map((skill) => (
              <div
                key={skill.name}
                className="w-full flex items-center justify-center dark:text-white d-link text-black  dark:bg-[rgb(23,23,23)] bg-white "
              >
                <PinContainer
                  title={`${skill.level}% | ${getSkillLevel(skill.level)}`}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base dark:text-white text-black">
                      {skill.name}
                    </h3>
                    <div className="relative w-full h-2 bg-black/20 rounded-full overflow-hidden dark:bg-white/20">
                      <div
                        className="h-full dark:bg-white bg-black transition-all duration-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>

          <Button
          variant={"outline"}
            className="mt-4 px-6 py-2 rounded-lg transition-all flex md:hidden"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills ? "Show less " : "Show More"}
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-center dark:text-white text-black">
          Education
        </h2>
        <div className="flex flex-col gap-8 items-center px-16  py-5">
          <div className="py-6 w-full md:w-2/3 overflow-x-hidden rounded-lg shadow-md slide-in-right dark:bg-[rgb(17,17,17)] bg-[rgb(228,228,228)] px-5 ring-1 dark:ring-white/10 ring-black/50 transition duration-300 gap-1">
            <h3 className="text-2xl font-semibold mb-3 dark:text-white text-black">
              Matriculation
            </h3>
            <p className="dark:text-white/70 text-black/80">
              Completed high school education.
            </p>
            <span className="text-sm dark:text-white text-black">2025</span>
          </div>

          <div className="py-6 w-full md:w-2/3 rounded-lg shadow-md dark:bg-[rgb(17,17,17)] slide-in-left bg-[rgb(228,228,228)] px-5 ring-1 dark:ring-white/10 ring-black/50 transition duration-300 gap-1">
            <h3 className="text-2xl font-semibold mb-3 dark:text-white text-black">
              IT Courses - GIAIC
            </h3>
            <p className="dark:text-white/70 text-black/80">
              Enrolled in Programming Fundamentals and advanced IT courses,
              covering Web Development, React, Next.js, and more.
            </p>
            <span className="text-sm dark:text-white text-black">
              2024 - Present
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const getSkillLevel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 50) return "Intermediate";
  return "Beginner";
};

export default SkillsAndEducation;
