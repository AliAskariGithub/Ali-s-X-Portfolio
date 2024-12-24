"use client";

import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import SongButton from "@/components/SongButton";
import SkillsAndEducation from "@/components/SkillsandEducation";
import Image from "next/image";
import Projects from "@/components/Project";
import InfiniteMovingCards from "@/components/MovingCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const connection = (navigator as any).connection || {};
    const speed = connection.downlink || .1;

    const totalDuration = 15000 / speed;
    const intervalTime = totalDuration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsOpen(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen bg-white overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-[rgb(23,23,23)] transition-all duration-1000 ease-in-out ${
            isOpen ? "w-0" : "w-1/2"
          }`}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full bg-[rgb(23,23,23)] transition-all duration-1000 ease-in-out ${
            isOpen ? "w-0" : "w-1/2"
          }`}
        ></div>

        {!isOpen && (
          <>
            <div className="absolute w-full top-[25%] flex flex-col items-center">
              <div
                className={`transition-opacity duration-500 rounded-full ${
                  isBlinking ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="blinking-logo"
                  width={200}
                  height={200}
                />
              </div>
              
              <div className="absolute -bottom-12 w-full flex justify-center gap-4">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            </div>

            <div className="absolute w-full top-0 hidden  md:flex flex-col items-center justify-center gap-2 h-full">
              <div className="absolute top-0 w-full bg-white/40 h-2 overflow-hidden">
                <div
                  className="h-full bg-white transition-all rounded-full duration-75"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="absolute bottom-2 right-5 text-white mt-2 sub-head text-6xl">{progress}</p>
            </div>

            <div className="absolute w-full top-0 md:hidden  flex flex-col items-end justify-center gap-2">
              <div className="w-full bg-white/40 h-2 overflow-hidden">
                <div
                  className="h-full bg-white transition-all rounded-full duration-75"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-white mt-2 text-4xl sub-head mr-2">{progress}</p>
            </div>
          </>
        )}
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isOpen ? "opacity-100 flex flex-col items-center delay-1000" : "opacity-0 hidden overflow-hidden"
        }`}
      >
        <Navbar />
        <SideBar />
        <SongButton />
        <Hero />
        <About />
        <SkillsAndEducation />
        <InfiniteMovingCards />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
