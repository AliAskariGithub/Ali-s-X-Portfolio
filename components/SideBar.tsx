"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiLink } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="fixed z-50 hidden lg:flex -translate-y-1/4 bottom-0">
        <div className="flex gap-8 fade-in-left px-6 py-3">
          <div className="relative group dark:bg-white bg-black p-2 rounded-full slide-in-bck-bottom dark:text-black text-white justify-center items-center">
            <Link
              href={"https://www.linkedin.com/in/ali-askari-355257308/"}
              className="relative flex items-center justify-center transition duration-200"
            >
              <FaLinkedinIn />

              <strong className="fixed flex flex-col bottom-[50px] px-4 justify-center items-center py-2 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100 ">
                <p className="line"> LinkedIn</p>
                <div className="fixed -bottom-6 dark:text-white text-black">
                  <TiArrowSortedDown size={40} />
                </div>
              </strong>
            </Link>
          </div>

          <div className="relative group dark:bg-white bg-black p-2 rounded-full slide-in-bck-bottom dark:text-black text-white justify-center items-center">
            <Link
              href={"https://github.com/AliAskariGithub"}
              className="relative flex items-center justify-center transition duration-200"
            >
              <FaGithub />

              <strong className="fixed flex flex-col bottom-[50px] px-4 justify-center items-center py-2 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                <p className="line">Github</p>
                <div className="fixed -bottom-6 dark:text-white text-black">
                  <TiArrowSortedDown size={40} />
                </div>
              </strong>
            </Link>
          </div>

          <div className="relative group dark:bg-white bg-black p-2 rounded-full slide-in-bck-bottom dark:text-black text-white justify-center items-center">
            <Link
              href={"https://www.facebook.com/profile.php?id=61564881342854"}
              className="relative flex items-center justify-center transition duration-200"
            >
              <FaFacebook />

              <strong className="fixed flex flex-col bottom-[50px] px-4 justify-center items-center py-2 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                <p className="line">Facebook</p>
                <div className="fixed -bottom-6 dark:text-white text-black">
                  <TiArrowSortedDown size={40} />
                </div>
              </strong>
            </Link>
          </div>

          <div className="relative group dark:bg-white bg-black p-2 rounded-full slide-in-bck-bottom dark:text-black text-white justify-center items-center">
            <Link
              href={
                "https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
              }
              className="relative flex items-center justify-center transition duration-200"
            >
              <FaXTwitter />

              <strong className="fixed flex flex-col bottom-[50px] px-4 justify-center items-center py-2 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                <p className="line">TwitterX</p>
                <div className="fixed -bottom-6 dark:text-white text-black">
                  <TiArrowSortedDown size={40} />
                </div>
              </strong>
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed flex flex-col justify-center items-center bottom-5 right-5 z-50 lg:hidden">
        {isExpanded && (
          <div
            className="flex flex-col items-center gap-4 mt-4 bg-transparent slide-in-bottom rounded-full shadow-md transition-all duration-500 ease-in-out"
            style={{
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="relative group dark:bg-white bg-black p-2 rounded-full dark:text-black text-white justify-center items-center">
              <Link
                href={"https://www.linkedin.com/in/ali-askari-355257308/"}
                className="relative flex items-center justify-center transition duration-200"
              >
                <FaLinkedinIn />

                <strong className="fixed flex flex-col  right-14 px-4 justify-center items-center py-1 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                  <p className="line"> LinkedIn</p>
                  <div className="fixed left-[84px] -rotate-90 dark:text-white text-black">
                    <TiArrowSortedDown size={40} />
                  </div>
                </strong>
              </Link>
            </div>

            <div className="relative group dark:bg-white bg-black p-2 rounded-full dark:text-black text-white justify-center items-center">
              <Link
                href={"https://github.com/AliAskariGithub"}
                className="relative flex items-center justify-center transition duration-200"
              >
                <FaGithub />

                <strong className="fixed flex flex-col right-14  px-4 justify-center items-center py-1 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                  <p className="line"> Github</p>
                  <div className="fixed left-[72px] -rotate-90 dark:text-white text-black">
                    <TiArrowSortedDown size={35} />
                  </div>
                </strong>
              </Link>
            </div>

            <div className="relative group dark:bg-white bg-black p-2 rounded-full dark:text-black text-white justify-center items-center">
              <Link
                href={"https://www.facebook.com/profile.php?id=61564881342854"}
                className="relative flex items-center justify-center transition duration-200"
              >
                <FaFacebook />

                <strong className="fixed flex flex-col right-14  px-4 justify-center items-center py-1 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                  <p className="line"> Facebook</p>
                  <div className="fixed left-[94px] -rotate-90 dark:text-white text-black">
                    <TiArrowSortedDown size={35} />
                  </div>
                </strong>
              </Link>
            </div>

            <div className="relative group dark:bg-white bg-black p-2 rounded-full dark:text-black text-white justify-center items-center">
              <Link
                href={
                  "https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
                }
                className="relative flex items-center justify-center transition duration-200"
              >
                <FaXTwitter />

                <strong className="fixed flex flex-col right-14  px-4 justify-center items-center py-1 text-lg text-white transition-all duration-300 transform scale-0 bg-black rounded-md dark:bg-white hover:bg-black hover:text-white dark:text-black group-hover:scale-100">
                  <p className="line"> TwitterX</p>
                  <div className="fixed left-[86px] -rotate-90 dark:text-white text-black">
                    <TiArrowSortedDown size={35} />
                  </div>
                </strong>
              </Link>
            </div>
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="p-4 flex items-center justify-center rounded-full relative z-30 mt-4 bg-black text-white dark:bg-white dark:text-black transition-all duration-300"
        >
          <FiLink size={16} />
        </button>
      </div>
    </>
  );
};

export default SideBar;
