"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b-2 border-white/20 shadow-[0_0_30px_rgba(0,168,255,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#problem"
            className="text-white/80 hover:text-white font-medium transition-colors text-sm border-b-2 border-transparent hover:border-white"
          >
            Problem
          </a>
          <a
            href="#solution"
            className="text-white/80 hover:text-white font-medium transition-colors text-sm border-b-2 border-transparent hover:border-white"
          >
            Solution
          </a>
          <a
            href="#demos"
            className="text-white/80 hover:text-white font-medium transition-colors text-sm border-b-2 border-transparent hover:border-white"
          >
            Demos
          </a>
          <a
            href="#industries"
            className="text-white/80 hover:text-white font-medium transition-colors text-sm border-b-2 border-transparent hover:border-white"
          >
            Industries
          </a>
          <a
            href="#cta"
            className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black font-bold transition-all text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

