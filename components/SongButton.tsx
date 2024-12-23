"use client";
import React, { useState, useRef } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { MdSkipNext } from "react-icons/md";

const songs = [
  { id: 1, name: "Song 01", file: "/song1.mp3" },
  { id: 2, name: "Song 02", file: "/song01.mp4" },
  { id: 3, name: "Song 03", file: "/song02.mp3" },
  { id: 4, name: "Song 04", file: "/song03.mp3" },
];

const SongButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.05;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      const newIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(newIndex);
      audioRef.current.src = songs[newIndex].file;
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center justify-center">
      <div className="relative group">
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].file}
          preload="auto"
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-2 flex justify-center items-center rounded-full dark:text-black text-white bg-black dark:bg-white transition-all duration-300 shadow-lg hover:scale-105"
        >
          {isPlaying ? (
            <HiSpeakerWave size={20} />
          ) : (
            <HiSpeakerXMark size={20} />
          )}
        </button>

        <button
          onClick={nextSong}
          className="fixed flex justify-center items-center gap-1 text-xs bottom-[65px] left-5 transform px-4 py-2 w-max bg-black dark:bg-white dark:text-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {songs[currentSongIndex].name} <MdSkipNext size={16} />
        </button>
      </div>
    </div>
  );
};

export default SongButton;
