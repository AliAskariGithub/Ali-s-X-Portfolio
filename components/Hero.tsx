import Image from "next/image";
import RotatingText from "./animated/RotatingText";
import TextSlideUp from "./animated/TextSlideUp";
import { RippleButton } from "./ui/button";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import AnimatedBG from "@/components/animated/animatedbg";
import BoxReveal from "./ui/Boxrevel";

const Hero = () => {
  return (
    <div id="home">
      <section className="flex justify-center items-center sub-head h-max mt-20 md:mt-40">
        <AnimatedBG />
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl px-6 md:px-16 h-full space-y-10 gap-10">
          <div className="text-black dark:text-white flex flex-col md:items-start items-center justify-center gap-2 lg:gap-5">
            <BoxReveal  duration={0.8}>
              <h3 className="mt-10 text-lg lg:text-4xl zoom-in-bottom">
                Hello There, It&apos;s Me
              </h3>
            </BoxReveal>
            <BoxReveal  duration={0.8}>
              <h1 className="text-6xl lg:text-8xl sub-head font-extrabold">
                <TextSlideUp text="ᗩᒪᎥ ᗩsᛕᗩᖇᎥ" />
              </h1>
            </BoxReveal>
            <BoxReveal  duration={0.8}>
              <h3 className="text-lg lg:text-2xl zoom-in-bottom w-max">
                A Passionate <RotatingText />
              </h3>
            </BoxReveal>
            <BoxReveal  duration={0.8}>
              <p className="flex items-center relative font-Poppins justify-center max-w-2xl text-sm text-center lg:text-base md:text-left dark:text-white/80 text-black/80">
                I am Ali Askari, a passionate specialized frontend developer
                skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
                Tailwind CSS, and Figma I am committed to creating highly
                user-friendly and responsive web interfaces, which impact the
                audience immeasurably.
              </p>
            </BoxReveal>
            <BoxReveal  duration={0.8}>
              <div className="flex flex-col items-center justify-center gap-4 lg:mt-5 md:items-start">
                <Link href={"/cv.PDF"} download={true}>
                  <RippleButton>
                    <strong className="flex items-center justify-center gap-2">
                      Download-CV <IoMdDownload />
                    </strong>
                  </RippleButton>
                </Link>
              </div>
            </BoxReveal>
          </div>

          <div className="fade-slide-up">
            <Image
              src={"/mypic.png"}
              alt="Toggle Image"
              width={1000}
              height={1000}
              className="relative md:w-96 md:h-max "
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
