"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "@/utils/animations";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { TypeAnimation } from "react-type-animation";
import { portfolioData } from "@/data/portfolioData";
import { socialLinksData } from "@/data/socialLinks";

export const Hero = () => {
  const { personalInfo } = portfolioData;
  const { socialLinks } = socialLinksData;

  const githubLink = socialLinks.find((l) => l.platform === "github");
  const linkedinLink = socialLinks.find((l) => l.platform === "linkedin");

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-amber-100/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-48 right-10 -z-10 w-72 h-72 bg-rose-200/25 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 border border-rose-100/80 shadow-xs text-xs font-semibold text-rose-700 mb-6 backdrop-blur-xs transition-all duration-300 hover:border-rose-200 hover:shadow-[0_0_18px_rgba(244,63,94,0.15)] hover:-translate-y-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Headline Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold tracking-tight text-[#1E1B1D] leading-tight">
                <span className="block text-xl font-semibold text-neutral-5xl text-opacity-80 tracking-wide">
                  Hello, I’m{" "}
                </span>
                <span className="block bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(225,29,72,0.15)]">
                  {personalInfo.name} Akter
                </span>
              </h1>



              <div className="min-h-[40px] mt-2">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Frontend Specialist",
                    2000,
                    "MERN Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="text-xl md:text-2xl text-center md:text-left text-rose-900 font-semibold"
                />
              </div>

              {/* Compelling Introduction */}
              <p className="mt-0 sm:mt-4 text-base sm:text-lg text-[#5A5255] max-w-xl leading-relaxed">
                {personalInfo.compellingHeadline}
              </p>

              {/* Social Links & Location metadata */}
              <div className="py-6 border-b border-rose-100/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#5C5458]">
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center font-medium hover:text-[#9F1239] transition-colors group"
                  >
                    <div className="p-2.5 rounded-full bg-white border border-rose-100 group-hover:border-rose-300 shadow-sm transition-all group-hover:scale-110">
                      <GithubIcon className="w-5 h-5 text-[#2C272A] group-hover:text-[#9F1239] transition-colors" />
                    </div>
                  </a>
                )}

                {linkedinLink && (
                  <a
                    href={linkedinLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center font-medium hover:text-[#9F1239] transition-colors group"
                  >
                    <div className="p-2.5 rounded-full bg-white border border-rose-100 group-hover:border-rose-300 shadow-sm transition-all group-hover:scale-110">
                      <LinkedinIcon className="w-5 h-5 text-[#0A66C2] transition-colors" />
                    </div>
                  </a>
                )}

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="inline-flex items-center font-medium hover:text-[#9F1239] transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-white border border-rose-100 group-hover:border-rose-300 shadow-sm transition-all group-hover:scale-110">
                    <Mail className="w-5 h-5 text-rose-700 transition-colors" />
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="my-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3.5">
                <Button
                  href="#portfolio"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  View My Projects
                </Button>

                <Button
                  href={personalInfo.resumeUrl}
                  download="Resume.pdf"
                  variant="secondary"
                  size="lg"
                  icon={<Download className="w-4 h-4 text-rose-600" />}
                >
                  Download Resume
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-[#787074]">
                <MapPin className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Larger Portrait */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative isolate w-full">
              {/* Soft pink glow */}
              <div className="absolute inset-[8%] -z-10 rotate-3 rounded-[45%_55%_48%_52%] bg-gradient-to-tr from-pink-300/40 to-rose-100/50 blur-2xl" />

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 flex justify-center lg:justify-end"
              >
                <img
                  src="/rahima.png"
                  alt="Profile portrait"
                  className="relative mx-auto block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.05]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

