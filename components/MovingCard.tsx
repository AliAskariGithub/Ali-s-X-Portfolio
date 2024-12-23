"use client";

import React from "react";

interface Text {
  id: number;
  content: string;
}

const InfiniteMovingCards = () => {
  const cards: Text[] = [
    {
      id: 1,
      content:
        "- True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. - True success means always trying to be better, learning new things, and growing every day. ",
    },
  ];

  return (
    <div className="flex relative z-30 justify-center items-center border-y dark:border-y-white/20 border-y-black/20 bg-[rgb(255,255,255)] dark:bg-[rgb(23,23,23)] h-max w-full">
      <div className="relative overflow-hidden w-full bg-[rgb(216,215,215)] dark:bg-[rgb(15,15,15)] py-12">
        <div className="whitespace-nowrap flex items-center animate-marquee gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 bg-[rgb(216,215,215)] dark:bg-[rgb(15,15,15)]  dark:text-white text-black sub-head rounded-lg w-max h-14 md:h-24 flex items-center justify-center text-5xl md:text-7xl font-semibold"
            >
              {card.content}
            </div>
          ))}
          {cards.map((card) => (
            <div
              key={`copy-${card.id}`}
              className="flex-shrink-0 bg-[rgb(216,215,215)] dark:bg-[rgb(15,15,15)]  dark:text-white text-black sub-head rounded-lg w-max h-14 md:h-24 flex items-center justify-center text-5xl md:text-7xl font-semibold"
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
