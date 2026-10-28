"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section calculation
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);

    // If on a page other than root (e.g. /projects/[slug]), let normal Link navigation work
    if (window.location.pathname !== "/") {
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#FAF9F6]/70 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#9F1239] to-[#F472B6] text-sm font-bold text-white shadow-xs transition-transform group-hover:scale-105">
              <Sparkles className="h-4 w-4 text-white" />
            </div>

            <div className="flex items-center">
              <span className="text-base font-bold tracking-tight text-[#1E1B1D] transition-colors duration-300 group-hover:text-[#9F1239]">
                {portfolioData.personalInfo.name}
                <span className="ml-0.5 text-xl font-bold leading-none text-[#9F1239]">
                  .
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-100/80 shadow-2xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${isActive
                      ? "text-[#9F1239] font-semibold bg-rose-50 shadow-2xs"
                      : "text-[#564E52] hover:text-[#9F1239] hover:bg-rose-50/50"
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download="Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#9F1239] bg-rose-50 hover:bg-rose-100 border border-rose-200/80 transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-rose-600" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#4B4449] hover:text-[#9F1239] hover:bg-rose-100/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#FAF8F6]/98 backdrop-blur-lg border-b border-rose-100 shadow-lg px-6 py-6 transition-all duration-200 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
                      ? "bg-rose-100/70 text-[#9F1239] font-semibold"
                      : "text-[#4A4347] hover:bg-rose-50 hover:text-[#9F1239]"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-rose-600" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-rose-100/80 flex flex-col gap-2.5">
              <a
                href={portfolioData.personalInfo.resumeUrl}
                download="Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-[#9F1239] bg-rose-50 border border-rose-200"
              >
                <FileText className="w-4 h-4 text-rose-600" />
                <span>Download Resume</span>
              </a>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#9F1239] to-[#BE185D] shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

