"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        {/* LOGO */}
        <div className="text-lg font-semibold tracking-wider">
          HK<span className="text-white/40">Estate</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-12 text-sm tracking-wide">
          {["home", "about", "features", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group capitalize"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition ${
              open && "rotate-45 translate-y-1.5"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${open && "opacity-0"}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition ${
              open && "-rotate-45 -translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 px-0 sm:px-6 py-8 text-white text-lg">
          {["home", "about", "features", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-4 capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
