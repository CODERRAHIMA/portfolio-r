"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { projects } from "../data/projects.js";
// import SkillCard from "../components/SkillCard.jsx";
// import { skills } from "../data/skills.js";
import { CodeXml, Award, Boxes } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "@/utils/animations";
import { projectData } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import { FaArrowRightLong } from "react-icons/fa6";
import SkillCard from "../projects/SkillCard";
import { skillData } from "@/data/skills";

export const Portfolio = () => {
    const tabs = [
        { id: "Projects", label: "Projects", icon: CodeXml },
        { id: "Tech Stack", label: "Tech Stack", icon: Boxes },
        { id: "Certificates", label: "Certificates", icon: Award },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const { projects } = projectData;

    return (
        <section
            id="portfolio"
            className="py-22 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-700px h-700px bg-cyan-500/10 blur-[180px] rounded-full"></div>
            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="mb-10 md:mb-16">

                        <p className="uppercase tracking-[3px] text-slate-500 text-sm mb-4">
                            MY WORK
                        </p>

                        <h2 className="uppercase text-5xl font-bold tracking-[3px] flex flex-wrap justify-center">
                            <span className="bg-gradient-to-r from-[#9F1239] to-[#BE185D] bg-clip-text text-transparent">
                                PORTFOLIO
                            </span> &nbsp;
                            <span className="bg-gradient-to-r from-[#BE185D] to-[#E11D48] bg-clip-text text-transparent">
                                SHOWCASE
                            </span>
                        </h2>

                        <p className="text-slate-500 max-w-2xl mx-auto text-[13px] md:text-base mt-6">
                            Explore my journey through projects, technical expertise and certifications.
                            Each section represents a milestone in my continuous learning path.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="w-full px-2 sm:px-4">
                        <div
                            className="flex w-full flex-wrap gap-1 rounded-2xl border border-rose-700/50 bg-rose-50/80 p-1 h-20 backdrop-blur-xl shadow-sm"
                        >
                            {tabs.map((tab) => {
                                const Icon = tab.icon;

                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="relative flex-1 min-w-0 rounded-xl px-4 py-3 md:text-sm lg:text-lg font-medium text-center hover:bg-rose-200/30 transition-all hover:text-xl cursor-pointer"
                                    >
                                        {/* Animated Background */}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute h-18 inset-0 bg-rose-800/80 rounded-xl"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        <span className={`relative z-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 transition ${activeTab === tab.id ? "text-white" : "text-rose-700"}`} >
                                            <Icon size={24} />
                                            <span className="text-xs sm:text-lg font-medium">{tab.label}</span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="mt-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -30,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                        >
                            {/* Projects */}
                            {activeTab === "Projects" && (
                                <div className="text-slate-600 text-xl dark:text-slate-400">
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                        {projects.map((project) => (
                                            <motion.div
                                                key={project.slug}
                                                variants={fadeUp}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-50px" }}
                                                className="h-full"
                                            >
                                                <ProjectCard
                                                    project={project}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="w-full flex justify-center items-center mt-12">
                                        <a
                                            href="https://github.com/CODERRAHIMA?tab=repositories"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center text-center justify-center w-fit whitespace-nowrap gap-2.5 rounded-xl border border-rose-200 bg-white/70 px-6 py-3 text-sm lg:text-base font-semibold text-rose-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-800 hover:bg-rose-50/50 hover:shadow-[0_12px_24px_rgba(225,29,72,0.12)]"
                                        >
                                            <span>See More On GitHub</span>
                                            <FaArrowRightLong className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-inherit" />
                                        </a>
                                    </div>

                                </div>
                            )}

                            {/* Tech Stack */}
                            {activeTab === "Tech Stack" && (
                                <div className="text-center text-slate-400 text-xl">
                                    <div className="space-y-12">
                                        {skillData.map((group) => (
                                            <div key={group.category}>
                                                <h3 className="mb-6 text-2xl font-semibold text-rose-800">
                                                    {group.category}
                                                </h3>
                                                {/* <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 place-items-center"> */}
                                                <div className="flex flex-wrap justify-center gap-4">
                                                    {group.items.map((skill) => (
                                                        <SkillCard
                                                            key={skill.name}
                                                            skill={skill}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            )}

                            {/* Certificates */}
                            {activeTab === "Certificates" && (
                                <div className="text-center text-slate-600 text-xl">

                                    Will be added later

                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}