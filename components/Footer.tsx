import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RippleButton } from "./ui/button";

const Footer = () => {
  return (
    <footer className="relative z-[100] py-8 border-t dark:border-t-[rgb(34,34,34)] border-t-[rgb(202,202,202)] dark:text-white text-black bg-white dark:bg-[rgb(23,23,23)] w-full">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          {/* About Section */}
          <div className="lg:w-2/4">
            <h2 className="text-lg font-semibold">My Intro</h2>
            <p className="mt-2 text-black/80 dark:text-white/80">
            I am Ali Askari, a passionate specialized frontend developer
                skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
                Tailwind CSS, and Figma I am committed to creating highly
                user-friendly and responsive web interfaces, which impact the
                audience immeasurably.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/3">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="flex flex-col mt-4 space-y-2 text-gray-400">
              <li>
                <Link
                  href={"/"}
                  className="transition underline-hover duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#about"}
                  className="transition underline-hover duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/Services"}
                  className="transition underline-hover duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/Projects"}
                  className="transition underline-hover duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:w-1/3">
            <h2 className="text-lg font-semibold">Follow Me</h2>
            <div className="flex mt-4 space-x-4 lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/ali-askari-355257308/"
                className="transition duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white "
              >
                <FaLinkedinIn size={30} />
              </Link>
              <Link
                href="https://github.com/AliAskariGithub"
                className="transition duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61564881342854"
                className="transition duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href="https://youtube.com/shorts/3DvsWa-Hfes?si=4DuXh79G_7NNd5ec"
                className="transition duration-150 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
              >
                <FaXTwitter size={30} />
              </Link>
            </div>

            <Link
              href="mailto:syedaliaskarizaidi1@gmail.com"
              className="flex items-center gap-2 mt-4 mb-3 transition duration-200 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
            >
              <IoMdMail size={20} /> syedaliaskarizaidi@gmail.com
            </Link>

            <Link href="#Contact" className="mt-4">
              <RippleButton className="dark:text-black dark:bg-white">
                Contact Me
              </RippleButton>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="h-0.5 dark:bg-[rgb(43,43,43)] bg-[rgb(177,177,177)] mt-8 mx-16" />

        <div className="pt-4 text-center">
          <p className="text-sm text-black/80 hover:text-black dark:text-white/80 ">
            © {new Date().getFullYear()} <strong>𝒜𝓁𝒾&apos;𝓈 𝙭 𝒫o𝓇𝓉𝒻o𝓁𝒾o</strong>{" "}
            | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
