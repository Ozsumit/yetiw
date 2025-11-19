"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Constants for the "About Us" sheet links
const aboutSheetLinks = [
  { href: "#", label: "Message From Director" },
  { href: "#", label: "Why Choose us?" },
  { href: "#", label: "Association Partner" },
  { href: "#", label: "KIEC Team" },
  { href: "#", label: "Certified Agent for Australia" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutSheetOpen, setIsAboutSheetOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 "
      onMouseLeave={() => setIsAboutSheetOpen(false)}
    >
      <div className="relative mx-auto max-w-full  border border-border/40 bg-background/80 px-6 py-4 shadow-lg backdrop-blur-lg">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Yeti International College Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary hidden sm:block">
              Yeti International College
            </span>
          </a>

          <div className="hidden md:flex gap-8 items-center font-medium">
            <Link
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Programs
            </Link>
            <div
              onMouseEnter={() => setIsAboutSheetOpen(true)}
              className="h-full"
            >
              <Link
                href="#"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
            </div>
            <Link
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              News
            </Link>
            <Button className="transform rounded-full hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              Apply Now
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m4 6h-16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[110%] left-0 w-full rounded-2xl border border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          } overflow-hidden`}
        >
          <div className="px-6 py-5 space-y-4">
            <a
              href="#"
              className="block text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Programs
            </a>
            <a
              href="#"
              className="block text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="#"
              className="block text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              News
            </a>
            <Button className="w-full mt-4 text-lg py-3 rounded-full">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* "About Us" Sheet Menu */}
      <div
        onMouseEnter={() => setIsAboutSheetOpen(true)}
        className={`absolute w-full left-0 top-[85%] transition-all duration-300 ease-in-out ${
          isAboutSheetOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
        style={{ zIndex: 49 }}
      >
        <div className="max-w-6xl mx-auto rounded-2xl border border-border/40 bg-white/80 backdrop-blur-xl shadow-2xl">
          <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-primary">Yeti</span>
                <span className="text-primary"> International</span>
              </h2>
              <p className="text-gray-600 text-sm leading-6 mb-4">
                KIEC, broadly known as Kathmandu Infosys, is one of the leading
                and most sought-after Education Consultancies incorporated under
                the office of the Company Registrar, Ministry of Industry,
                Commerce and Supply of the Government of Nepal.
              </p>
              <Link
                href="#"
                className="text-sm font-bold text-blue-700 hover:underline"
              >
                LEARN MORE &rarr;
              </Link>
            </div>
            <div>
              <ul className="space-y-3">
                {aboutSheetLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 text-gray-800 hover:text-primary transition-colors group"
                    >
                      <span className="text-primary/80 group-hover:translate-x-1.5 transition-transform duration-300">
                        &gt;
                      </span>
                      <span className="font-medium text-foreground/90">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
