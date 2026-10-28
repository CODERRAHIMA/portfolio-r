"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, CalendarDays, ChevronDown, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { fadeUp, zoomIn } from "@/utils/animations";

export const Educations = () => {
    const timelineRef = useRef(null);
    const [expandedEducation, setExpandedEducation] = useState(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 40%"],
    });
    const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const graduationCapPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="education" className="overflow-hidden py-22 text-slate-600">
            {/* <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <p className="mb-3 text-sm uppercase tracking-[3px] text-slate-500">
                        Academic Background
                    </p>
                    <h2 className="bg-linear-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
                        Education
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-md">
                        The studies and experiences shaping my journey in computer science.
                    </p>
                </motion.div>

                <div ref={timelineRef} className="relative mx-auto max-w-4xl space-y-6">
                    <div className="pointer-events-none absolute -left-4 bottom-0 top-0 w-0.5 bg-rose-100 sm:-left-7" aria-hidden="true">
                        <motion.div
                            className="h-full w-full origin-top bg-gradient-to-b from-rose-800 via-rose-600 to-pink-300"
                            style={{ scaleY: timelineProgress }}
                        />
                    </div>
                    <motion.div
                        className="pointer-events-none absolute -left-4 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rose-800 text-white shadow-md sm:-left-7"
                        style={{
                            top: graduationCapPosition,
                            x: "-50%",
                            y: "-50%",
                        }}
                        aria-hidden="true"
                    >
                        <GraduationCap className="h-5 w-5" />
                    </motion.div>
                    {portfolioData.education.map((education) => {
                        const institutionIsPlaceholder = education.institution.startsWith("[");
                        const isExpanded = expandedEducation === education.id;
                        const detailsId = `education-details-${education.id}`;

                        return (
                            <motion.article
                                key={education.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="rounded-3xl border border-rose-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-[0_12px_30px_rgba(225,29,72,0.10)] sm:p-8"
                            >
                                <button
                                    type="button"
                                    aria-expanded={isExpanded}
                                    aria-controls={detailsId}
                                    onClick={() => setExpandedEducation(isExpanded ? null : education.id)}
                                    className="w-full text-left"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700">
                                                {education.status}
                                            </span>
                                            <h3 className="mt-3 text-xl font-bold text-slate-800 sm:text-[22px]">
                                                {education.degree}
                                            </h3>
                                            <span className="mt-3 inline-flex flex-wrap items-center gap-2 text-sm text-slate-600">
                                                <CalendarDays className="h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" />
                                                {education.period}
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={`mt-1 h-5 w-5 shrink-0 text-rose-800 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </button>

                                <motion.div
                                    id={detailsId}
                                    initial={false}
                                    animate={{
                                        height: isExpanded ? "auto" : 0,
                                        opacity: isExpanded ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                    aria-hidden={!isExpanded}
                                >
                                    <div className="pt-4">
                                        {!institutionIsPlaceholder && (
                                            <p className="text-lg font-medium text-rose-700">
                                                {education.institution}
                                            </p>
                                        )}
                                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                                            <span className="inline-flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-rose-600" aria-hidden="true" />
                                                {education.location}
                                            </span>
                                        </div>
                                        <ul className="mt-5 space-y-2">
                                            {education.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" aria-hidden="true" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                        {education.coursework.length > 0 && (
                                            <div className="mt-6 border-t border-rose-100 pt-5">
                                                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                    <BookOpen className="h-4 w-4 text-rose-600" aria-hidden="true" />
                                                    Relevant Coursework
                                                </h4>
                                                <ul className="flex flex-wrap gap-2">
                                                    {education.coursework.map((course) => (
                                                        <li
                                                            key={course}
                                                            className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-800"
                                                        >
                                                            {course}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.article>
                        );
                    })}
                </div>
            </div> */}
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <motion.div
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 text-center sm:mb-10 lg:mb-12"
                >
                    <p className="mb-2 text-xs uppercase tracking-[2px] text-slate-500 sm:mb-3 sm:text-sm sm:tracking-[3px]">
                        Academic Background
                    </p>

                    <h2 className="bg-linear-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                        Education
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
                        The studies and experiences shaping my journey in computer science.
                    </p>
                </motion.div>

                <div
                    ref={timelineRef}
                    className="relative mx-auto w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-4 pl-5 sm:space-y-6 sm:pl-7"
                >
                    {/* Timeline Line */}
                    <div
                        className="pointer-events-none absolute bottom-0 left-1 top-0 w-0.5 bg-rose-100 sm:left-1.5"
                        aria-hidden="true"
                    >
                        <motion.div
                            className="h-full w-full origin-top bg-gradient-to-b from-rose-800 via-rose-600 to-pink-300"
                            style={{ scaleY: timelineProgress }}
                        />
                    </div>

                    {/* Graduation Cap */}
                    <motion.div
                        className="pointer-events-none absolute left-1 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-rose-800 text-white shadow-md sm:left-1.5 sm:h-10 sm:w-10"
                        style={{
                            top: graduationCapPosition,
                            x: "-50%",
                            y: "-50%",
                        }}
                        aria-hidden="true"
                    >
                        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>

                    {portfolioData.education.map((education) => {
                        const institutionIsPlaceholder =
                            education.institution.startsWith("[");
                        const isExpanded = expandedEducation === education.id;
                        const detailsId = `education-details-${education.id}`;

                        return (
                            <motion.article
                                key={education.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="min-w-0 rounded-2xl border border-rose-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-rose-300 hover:shadow-[0_12px_30px_rgba(225,29,72,0.10)] sm:rounded-3xl sm:p-6 md:p-8"
                            >
                                <button
                                    type="button"
                                    aria-expanded={isExpanded}
                                    aria-controls={detailsId}
                                    onClick={() =>
                                        setExpandedEducation(
                                            isExpanded ? null : education.id
                                        )
                                    }
                                    className="w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
                                >
                                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                                        <div className="min-w-0 flex-1">
                                            <span className="inline-flex max-w-full flex-wrap rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[10px] md:text-xs font-medium text-rose-700 sm:px-3 sm:text-sm">
                                                {education.status}
                                            </span>

                                            <h3 className="mt-3 break-words text-md font-bold leading-snug text-slate-800 sm:text-xl md:text-[22px]">
                                                {education.degree}
                                            </h3>

                                            <span className="mt-3 flex flex-wrap items-start gap-2 text-[10px] leading-5 text-slate-600 sm:text-sm">
                                                <CalendarDays
                                                    className="mt-0.5 h-4 w-4 shrink-0 text-rose-600"
                                                    aria-hidden="true"
                                                />
                                                <span className="min-w-0 break-words">
                                                    {education.period}
                                                </span>
                                            </span>
                                        </div>

                                        <ChevronDown
                                            className={`mt-1 h-5 w-5 shrink-0 text-rose-800 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </button>

                                <motion.div
                                    id={detailsId}
                                    initial={false}
                                    animate={{
                                        height: isExpanded ? "auto" : 0,
                                        opacity: isExpanded ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                    aria-hidden={!isExpanded}
                                    inert={!isExpanded}
                                >
                                    <div className="min-w-0 pt-4 sm:pt-5">
                                        {!institutionIsPlaceholder && (
                                            <p className="break-words text-base font-medium leading-7 text-rose-700 sm:text-lg">
                                                {education.institution}
                                            </p>
                                        )}

                                        <div className="mt-0 md:mt-2 flex flex-wrap gap-x-4 gap-y-2 text-[10px] leading-5 text-slate-600 sm:gap-x-5 sm:text-sm">
                                            <span className="inline-flex min-w-0 items-start gap-2">
                                                <MapPin
                                                    className="mt-0.5 h-4 w-4 shrink-0 text-rose-600"
                                                    aria-hidden="true"
                                                />
                                                <span className="break-words">
                                                    {education.location}
                                                </span>
                                            </span>
                                        </div>

                                        <ul className="mt-4 space-y-2 sm:mt-5">
                                            {education.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex min-w-0 items-start gap-2.5 text-xs md:text-sm leading-6 text-slate-700 sm:gap-3"
                                                >
                                                    <span
                                                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="min-w-0 break-words">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {education.coursework.length > 0 && (
                                            <div className="mt-5 border-t border-rose-100 pt-4 sm:mt-6 sm:pt-5">
                                                <h4 className="mb-3 flex items-center gap-2 text-[13px] md:text-sm font-semibold text-slate-800">
                                                    <BookOpen
                                                        className="h-4 w-4 shrink-0 text-rose-600"
                                                        aria-hidden="true"
                                                    />
                                                    Relevant Coursework
                                                </h4>

                                                <ul className="flex flex-wrap gap-2">
                                                    {education.coursework.map((course) => (
                                                        <li
                                                            key={course}
                                                            className="max-w-full break-words rounded-full bg-rose-50 px-3 py-1 text-[10px] md:text-xs font-medium text-rose-800"
                                                        >
                                                            {course}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};