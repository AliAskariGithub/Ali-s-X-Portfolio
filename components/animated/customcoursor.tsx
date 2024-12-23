"use client";

import React, { useEffect, useState } from "react";

const CustomMouseArrow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="md:flex hidden relative z-[10000]">
      <div
        className="dark:flex fixed top-0 left-0 pointer-events-none z-[1000] hidden"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10 L100 60 L60 60 L50 60 L30 100 Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className="dark:hidden fixed top-0 left-0 pointer-events-none z-[1000] flex"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10 L100 60 L60 60 L50 60 L30 100 Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default CustomMouseArrow;
