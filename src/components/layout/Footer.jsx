'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { Sparkles, Mail, Heart } from 'lucide-react';
import FooterLinks from '../ui/FooterLinks';
import { socialLinksData } from '@/data/socialLinks';



export const Footer = () => {
    const { personalInfo } = portfolioData;
    const { socialLinks } = socialLinksData;

    const githubLink = socialLinks.find((l) => l.platform === 'github');
    const linkedinLink = socialLinks.find((l) => l.platform === 'linkedin');

    return (
        <footer className="relative border-t border-rose-200/60 bg-[#F8F0ED]">
            {/* Top glowing horizontal line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-rose-300 to-transparent blur-[1px]"></div>

            <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* col-1 */}
                    <div className="space-y-4">
                        <a
                            href="#home"
                            className="flex items-center gap-2">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#9F1239] to-[#F472B6] text-sm font-bold text-white shadow-xs transition-transform group-hover:scale-105">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-bold tracking-tight text-slate-800">
                                {personalInfo.name}<span className="text-rose-700">.</span>
                            </span>
                        </a>
                        <p className="text-sm leading-6 text-slate-700 max-w-sm">
                            Building modern, responsive, and user-focused web applications, transforming abstract ideas into practical solutions through clean UI design and reusable components.
                        </p>
                    </div>

                    {/* col-2 */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#9F1239]">
                            Navigation
                        </h4>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-3 text-sm font-medium text-slate-600">
                            <FooterLinks href="#home" level="Home" />
                            <FooterLinks href="#about" level="About" />
                            <FooterLinks href="#portfolio" level="Portfolio" />
                            <FooterLinks href="#education" level="Education" />
                            <FooterLinks href="#contact" level="Contact" />
                        </ul>
                    </div>

                    {/* col-3 */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#9F1239]">
                            Stay Connected
                        </h4>
                        <p className="text-sm text-slate-700">
                            Let's build something cool together. Find me on social platforms:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {githubLink && (
                                <a
                                    href={githubLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="p-2 rounded-full bg-rose-50/70 text-stone-700 hover:text-stone-900 hover:bg-rose-100/80 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-xs hover:shadow-md"
                                >
                                    <GithubIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                                </a>
                            )}

                            {linkedinLink && (
                                <a
                                    href={linkedinLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="p-2 rounded-full bg-rose-50/70 text-stone-700 hover:text-[#0A66C2] hover:bg-rose-100/80 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-xs hover:shadow-md"
                                >
                                    <LinkedinIcon className="w-5 h-5" />
                                </a>
                            )}

                            <a
                                href={`mailto:${personalInfo.email}`}
                                aria-label="Email Me"
                                className="p-2 rounded-full bg-rose-50/70 text-stone-700 hover:text-rose-900 hover:bg-rose-100/80 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-xs hover:shadow-md"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>

                    </div>
                </div>
                {/* bottom */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:border-white/5">
                    <p className="text-xs lg:text-sm flex items-center justify-center gap-1.5 flex-wrap">
                        &copy; 2026. Crafted with
                        <span className="inline-flex items-center justify-center animate-pulse">
                            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        </span>
                        All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

