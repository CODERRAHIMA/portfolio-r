"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "@/utils/animations";
import toast from 'react-hot-toast';

import {
    FaLinkedinIn,
    FaGithub,
    FaRegUser,
    FaRegEnvelope,
} from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);

    // Handle form submission framework
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                toast.success("Message sent successfully!");
                formRef.current.reset();
            }, (error) => {
                toast.error("Ops! Failed to send message.");
                console.error("Failed to send contact message:", error);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div
            id="contact"
            className="min-h-screen text-slate-600 px-4 py-22 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <h2 className="bg-linear-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
                    Contact Me
                </h2>

                <p className="mt-4 text-xs md:text-base text-slate-500 max-w-xl mx-auto">
                    Have a question or want to work together? Drop me an email, and I'll get back to you as soon as possible.
                </p>
            </motion.div>

            {/* Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start overflow-hidden px-1">

                {/* Left */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="col-span-12 lg:col-span-5 space-y-6 order-2 lg:order-1"
                >
                    {/* Get in Touch */}
                    <div className="bg-white/60 border border-rose-200 rounded-3xl p-6 backdrop-blur-xl shadow-[0_12px_30px_rgba(225,29,72,0.10)]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-rose-700">Get in Touch</h2>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Have something you'd like to discuss? Send over your project details, feedback, or general questions and let's start talking.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white/60 border border-rose-200 rounded-3xl p-6 backdrop-blur-xl shadow-[0_12px_30px_rgba(225,29,72,0.10)]">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-rose-700 mb-6 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-rose-700"></span>
                            Connect With Me
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://www.linkedin.com/in/rahima1630/"
                                target="_blank"
                                rel="noreferrer"
                                className="col-span-2 md:col-span-1 flex items-center gap-3 bg-white border border-gray-300 rounded-2xl px-4 py-3 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-800">
                                    <FaLinkedinIn className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-semibold text-slate-700">Let's Connect</div>
                                    <div className="text-xs text-slate-600">on LinkedIn</div>
                                </div>
                            </a>

                            <a
                                href="https://github.com/CODERRAHIMA"
                                target="_blank"
                                rel="noreferrer"
                                className="col-span-2 md:col-span-1 flex items-center gap-2 bg-white border border-gray-300 rounded-2xl px-4 py-3 transition-all duration-300"
                            >
                                <div className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-white shrink-0">
                                    <FaGithub className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-semibold text-slate-700 truncate">GitHub</div>
                                    <div className="text-[10px] sm:text-xs text-slate-600 truncate">@username</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="col-span-12 lg:col-span-7 mx-auto w-full bg-white/60 border border-rose-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-[0_12px_30px_rgba(225,29,72,0.10)] order-1 lg:order-2"

                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-rose-700 block">Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-rose-400">
                                    <FaRegUser className="w-4 h-4" />
                                </span>
                                <input
                                    type="text"
                                    name="form_name"
                                    placeholder="Your Name"
                                    className="w-full bg-[#FAF5F2]/80 border border-rose-100/70 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/50 focus:bg-white/80"
                                    required
                                />
                            </div>
                        </div>


                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-rose-700 block">Email Address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-rose-400">
                                    <FaRegEnvelope className="w-4 h-4" />
                                </span>
                                <input
                                    type="email"
                                    name="form_email"
                                    placeholder="user@gmail.com"
                                    className="w-full bg-[#FAF5F2]/80 border border-rose-100/70 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/50 focus:bg-white/80"
                                    required
                                />
                            </div>
                        </div>


                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-rose-700 block">Message</label>
                            <div className="relative">
                                <span className="absolute top-4 left-0 pl-4 flex items-center text-rose-400">
                                    <FiMessageSquare className="w-4 h-4" />
                                </span>
                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="Write your message here..."
                                    className="w-full bg-[#FAF5F2]/80 border border-rose-100/70 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/50 focus:bg-white/80 resize-none"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="relative group w-full">
                            {/* Background Soft Glow Layer on Hover */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] rounded-2xl opacity-0 blur-md group-hover:opacity-20 transition-all duration-500 pointer-events-none" />

                            {/* The Interactive Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className="relative w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] text-white font-semibold rounded-2xl py-3.5 sm:py-4 transition-all duration-300 shadow-[0_8px_24px_rgba(225,29,72,0.15)] hover:shadow-[0_12px_32px_rgba(225,29,72,0.25)] hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none cursor-pointer overflow-hidden z-10"
                            >
                                {/* Subtle inner reflection shine line */}
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                                {/* Dynamic Icon */}
                                <IoPaperPlaneOutline className={`w-4 h-4 transition-transform duration-300 ${isSending ? 'animate-bounce' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />

                                {/* Text */}
                                <span className="tracking-wide">
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </span>
                            </button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </div>
    );
}
