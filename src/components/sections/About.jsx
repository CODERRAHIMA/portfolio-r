"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "@/utils/animations";
import { Sparkles, Download } from "lucide-react";
import { Button } from "../ui/Button";

export const About = () => {
    return (
        <section
            id="about"
            className="py-20 overflow-hidden text-slate-600"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center lg:mb-8 mb-2 px-[5%]">
                    <div className="inline-block relative group">
                        <motion.h2
                            variants={zoomIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48]"
                        >
                            About Me
                        </motion.h2>
                    </div>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-2 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
                    >
                        <Sparkles className="w-5 h-5 text-rose-600" />
                        <span className="text-[10px] md:text-lg">Building Technology That Solves Real Problems</span>
                        <Sparkles className="w-5 h-5 text-rose-600" />
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center">

                    {/* Left */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >

                        <div className="relative group">
                            {/* Profile Image */}
                            <img
                                src="/rahima.png"
                                alt="Profile portrait"
                                className="relative mx-auto block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                            />

                            {/* Floating Code Badge - Positioned Top Left & Theme Synchronized */}
                            <div className="absolute bottom-2 left-20 md:bottom-8 md:left-54 lg:bottom-5 lg:left-34 z-30 bg-gradient-to-br from-[#9F1239] via-[#BE185D] to-[#E11D48] rounded-2xl p-3 sm:p-3.5 shadow-2xl flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:translate-y-1 group-hover:translate-x-1">
                                <svg
                                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>


                    </motion.div>

                    {/* Right */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className=""
                    >

                        <span className="text-3xl md:text-4xl flex items-center justify-center lg:justify-start font-bold mb-4 md:mb-3 mt-10 md:mt-7 lg:mt-2 text-transparent bg-clip-text bg-linear-to-r from-[#BE185D] to-[#E11D48]">
                            Hello, I’m Rahima
                        </span>


                        <p className="text-slate-700 leading-8 text-[15px] md:text-md mb-2 md:mb-1">
                            Currently, I am a final-year Computer Science undergraduate student with hands-on expertise in Frontend Development.
                        </p>

                        <p className="text-slate-700 leading-8 text-[15px] md:text-md mb-2 md:mb-1">
                            I am actively learning and improving my skills in Full Stack Web Development, while building projects and strengthening my understanding of modern web technologies. Also, I actively practice Data Structures & Basic Algorithms and Problem Solving to strengthen my programming and logical thinking.
                            <br />My goal is to become proficient in MERN Stack Development and build scalable, user-focused web applications with clean and maintainable code.
                        </p>

                        <p className="text-slate-700 leading-8 text-[15px] md:text-md mb-2 md:mb-1">
                            In the long run, I aspire to explore the integration of Artificial Intelligence into Software Engineering and contribute to innovative solutions across various fields of technology.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8 md:mt-4 justify-center lg:justify-start">
                            <div className="group relative inline-block">

                                {/* The Button */}
                                <Button
                                    href="/resume.pdf"
                                    download="Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex items-center gap-2 h-13 px-6 py-4 text-white shadow-sm backdrop-blur-xl rounded-xl leading-none overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold cursor-pointer"
                                    icon={<Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />}
                                    iconPosition="right"
                                >
                                    Download Resume{" "}
                                </Button>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

