"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] text-white shadow-[0_8px_32px_rgba(190,24,93,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(225,29,72,0.30)]
    ${isVisible
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="h-4 w-4" />
        </button>
    );
}

export default ScrollToTop;
