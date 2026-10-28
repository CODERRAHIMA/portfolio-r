"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#FAF9F6_0%,#FFF9F8_50%,#FAF9F6_100%)]">

            {/* Background Glows */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute -left-32 top-[4%] h-80 w-80 rounded-full bg-rose-300/35 blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
                    className="absolute -right-32 top-[30%] h-96 w-96 rounded-full bg-pink-200/45 blur-[110px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="absolute bottom-[-10rem] left-[22%] h-80 w-80 rounded-full bg-amber-200/35 blur-[100px]"
                />
            </div>

            {/* Splash Content */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative flex w-[90%] flex-col items-center text-center"
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-7 grid h-[76px] w-[76px] place-items-center rounded-[22px] border border-rose-200 bg-gradient-to-br from-[#9F1239] to-[#BE185D] text-3xl font-extrabold text-white shadow-[0_0_40px_rgba(159,18,57,0.2)]"
                >
                    {"</>"}
                </motion.div>

                {/* Welcome Text */}
                <h1 className="mb-3 text-3xl font-extrabold text-[#1E1B1D] sm:text-4xl md:text-6xl">
                    Welcome to{" "}
                    <span className="bg-gradient-to-r from-[#9F1239] to-[#BE185D] bg-clip-text text-transparent">
                        My Portfolio
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8 text-sm text-[#564E52] sm:text-base"
                >
                    Full Stack Developer
                </motion.p>

                {/* Animated Loading Bar */}
                <div className="mb-4 h-[3px] w-[150px] overflow-hidden rounded-full bg-rose-100">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#9F1239] to-[#F472B6]"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="text-[10px] tracking-[2px] text-[#8A7B81]"
                >
                    INITIALIZING EXPERIENCE...
                </motion.p>
            </motion.div>
        </div>
    );
};