"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextAnimation from "./animated/TextAnimation"; // Import TextAnimation
import { Button, RippleButton } from "./ui/button"; // Import RippleButton
import { ModeToggle } from "./ModeToggle"; // Import ModeToggle
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-8 py-4 shadow-md md:flex-row backdrop-blur-2xl h-max md:px-16">
      <h1 className="hidden lg:flex text-3xl tracking-wider md:text-5xl heading cursor-default">
        <TextAnimation />
      </h1>

      <div className="hidden lg:flex md:items-center md:gap-8">
        <Link
          href="#home"
          className="transition duration-200 underline-hover text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white box box-1"
        >
          Home
        </Link>
        <Link
          href="#About"
          className="transition duration-200 underline-hover text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white box box-2"
        >
          About
        </Link>
        <Link
          href="#skillsandeducation"
          className="transition duration-200 underline-hover text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white box box-3"
        >
          Skills
        </Link>
        <Link
          href="#Projects"
          className="transition duration-200 underline-hover text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white box box-4"
        >
          Projects
        </Link>
      </div>

      {/* Contact Button and ModeToggle */}
      <div className="flex items-center justify-between gap-2 zoom-in-bottom w-full lg:w-max">
        <div className="items-center justify-center hidden gap-5 lg:flex">
          <Link href="#Contact">
            <RippleButton>Contact Me</RippleButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-between items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <HiOutlineMenu />
          </button>

          <TextAnimation />
        </div>
        <ModeToggle />
      </div>

      <div
        className={`fixed top-0 left-0 w-full backdrop-blur-2xl dark:bg-[rgb(23,23,23)] bg-white shadow-md transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <Button
          variant={"ghost"}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="absolute top-4 right-5"
        >
          <IoCloseSharp />
        </Button>
        <div className="flex flex-col items-center px-4 py-6 space-y-4">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline-hover duration-200 transition"
          >
            Home
          </Link>
          <Link
            href="#About"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline-hover duration-200 transition"
          >
            About
          </Link>
          <Link
            href="#skillsandeducation"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline-hover duration-200 transition"
          >
            Skills
          </Link>
          <Link
            href="#Projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline-hover duration-200 transition"
          >
            Projects
          </Link>
          <div className="flex items-center justify-center space-x-2 ">
            <Link
              href="#Contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 dark:text-gray-200"
            >
              <RippleButton>Contact Me</RippleButton>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
