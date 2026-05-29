import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, vh * 0.4], [80, 0]);
  const opacity1 = useTransform(scrollY, [0, vh * 0.3], [0, 1]);

  const y2 = useTransform(scrollY, [vh * 0.1, vh * 0.5], [80, 0]);
  const opacity2 = useTransform(scrollY, [vh * 0.1, vh * 0.4], [0, 1]);

  const y3 = useTransform(scrollY, [vh * 0.2, vh * 0.6], [80, 0]);
  const opacity3 = useTransform(scrollY, [vh * 0.2, vh * 0.5], [0, 1]);

  return (
    <section className="h-screen w-full bg-white text-black px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 w-full max-w-[1600px] mx-auto">

        {/* Left Column: About Me Heading */}
        <motion.div
          className="md:col-span-3 lg:col-span-3 pt-2"
          style={{ y: y1, opacity: opacity1 }}
        >
          <h2
            className="font-sans font-bold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            About Me
          </h2>
        </motion.div>

        {/* Right Column: Bio and Stats */}
        <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-16">

          {/* Bio Section */}
          <motion.div style={{ y: y2, opacity: opacity2 }} className="flex gap-5 items-start">
            <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0 mt-4" />
            <p
              className="leading-relaxed font-normal"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontFamily: "'Inter', system-ui, sans-serif", color: "#666" }}
            >
              I'm{" "}
              <span style={{ color: "#000" }} className="font-semibold">
                Dheeraj
              </span>
              , a Computer Science Engineering student passionate about{" "}
              <span style={{ color: "#000" }} className="font-semibold">
                AI/ML, full-stack development
              </span>
              , and intelligent digital systems. With a strong foundation in{" "}
              <span style={{ color: "#000" }} className="font-semibold">
                React, FastAPI, IoT
              </span>
              , and modern ML frameworks, I blend{" "}
              <span style={{ color: "#000" }} className="font-semibold">
                creativity and logic
              </span>
              {" "}to craft{" "}
              <span style={{ color: "#000" }} className="font-semibold">
                impactful real-world solutions
              </span>
              .
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            style={{ y: y3 }}
            className="grid grid-cols-3 divide-x divide-gray-200 opacity-100"
          >
            {/* Stat 1: Projects */}
            <div className="flex items-center gap-4 pr-10">
              <div className="w-[52px] h-[52px] rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-4xl md:text-5xl font-black leading-none text-black">5+</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">Projects</p>
                <div className="stat-line" />
              </div>
            </div>

            {/* Stat 2: Hackathon Experience */}
            <div className="flex items-center gap-4 px-10">
              <div className="w-[52px] h-[52px] rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-4xl md:text-5xl font-black leading-none text-black">4+</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium leading-tight">
                  Hackathon<br />Experience
                </p>
                <div className="stat-line" />
              </div>
            </div>

            {/* Stat 3: CGPA */}
            <div className="flex items-center gap-4 pl-10">
              <div className="w-[52px] h-[52px] rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-4xl md:text-5xl font-black leading-none text-black">7.90</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">CGPA</p>
                <div className="stat-line" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;