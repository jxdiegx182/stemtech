"use client";

import { useState } from "react";
import { brandName, navLinks, whatsappUrl } from "./landingData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-load absolute inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/10 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[68px] max-w-[1100px] items-center justify-between px-5 sm:px-6"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#f2f4f6] transition-colors hover:text-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black"
          aria-label={`${brandName} inicio`}
        >
          {brandName}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d969f] transition-colors duration-200 hover:text-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-[#006ea0]/70 bg-[#003c60]/45 px-4 py-2 text-xs font-bold text-[#8fdcff] transition duration-200 hover:-translate-y-px hover:border-[#009fe3] hover:bg-[#003c60]/70 focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black lg:inline-flex"
        >
          Hablemos
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-[#f2f4f6] transition-colors duration-200 hover:border-[#009fe3]/70 hover:text-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3] focus:ring-offset-4 focus:ring-offset-black lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/[0.06] bg-black/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-[1100px] flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/[0.06] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d969f] transition-colors hover:text-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-md border border-[#006ea0]/70 bg-[#003c60]/55 px-4 py-3 text-center text-xs font-bold text-[#8fdcff] transition-colors hover:border-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]"
              onClick={() => setIsOpen(false)}
            >
              Hablemos
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
