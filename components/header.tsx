"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Trophy,
  Users,
  Building2,
  Monitor,
  Briefcase,
  Globe,
  CalendarDays,
  Cpu,
  Hotel,
  User,
  ArrowRight,
  History,
  GraduationCap,
  BookOpen, // Added for variety
  Network, // Added for variety
} from "lucide-react";

// --- Data Configuration ---

const aboutLinks = [
  { href: "/about", label: "About Us", icon: History },
  { href: "/about/message/ceo", label: "Message From CEO", icon: User },
  {
    href: "/about/message/director",
    label: "Message From Director",
    icon: User,
  },
  {
    href: "/about/message/principal",
    label: "Message From Principal",
    icon: User,
  },
  { href: "/about/mission-vision", label: "Mission & Vision", icon: Trophy },
  { href: "/about/facilities", label: "Facilities", icon: Building2 },
  { href: "/about/team", label: "Our Team", icon: Users },
  // { href: "#", label: "Alumni Ass÷ociation", icon: GraduationCap },
];

const programLinks = [
  {
    href: "/programs/mba",
    label: "Master in Business Administration",
    icon: Briefcase,
  },
  {
    href: "/programs/bhm",
    label: "Bachelor in Hotel Management",
    icon: Hotel,
  },
  {
    href: "/programs/babm",
    label: "Bachelor in Airlines Business Management",
    icon: Globe,
  },
  {
    href: "/programs/bamm",
    label: "Bachelor in MICE (Event) Management",
    icon: CalendarDays,
  },
  {
    href: "/programs/bttm",
    label: "Bachelor in Tourism & MICE Management",
    icon: Briefcase,
  },
  {
    href: "/programs/bca",
    label: "Bachelor in Computer Application",
    icon: Cpu,
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<"none" | "about" | "programs">(
    "none"
  );
  const isDropdownOpen = activeMenu !== "none";

  // --- Split links for two-column layouts ---
  const firstColAbout = aboutLinks.slice(0, 4);
  const secondColAbout = aboutLinks.slice(4);

  // MODIFICATION: First column gets 4, second column gets the rest
  const firstColPrograms = programLinks.slice(0, 4);
  const secondColPrograms = programLinks.slice(4);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      onMouseLeave={() => setActiveMenu("none")}
    >
      {/* Navbar Container */}
      <div className="relative z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="mx-auto max-w-full px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-[100px] h-[70px]">
              <Image
                src="/logo.png"
                alt="Yeti International College Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground hidden sm:block">
              Yeti International College
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 items-center">
            <NavItem
              label="Programs"
              active={activeMenu === "programs"}
              onHover={() => setActiveMenu("programs")}
            />
            <NavItem
              label="About"
              active={activeMenu === "about"}
              onHover={() => setActiveMenu("about")}
            />
            <Link
              href="/events"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Events
            </Link>
            <Link
              href="/news"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <div className="pl-4">
              <Button className="rounded-full px-6 font-semibold">
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Dropdown Wrapper */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b shadow-xl overflow-hidden z-40"
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              {/* ABOUT MENU */}
              {activeMenu === "about" && (
                <div className="grid grid-cols-12 gap-12">
                  {/* Left: Context / Highlight */}
                  <div className="col-span-4 pr-6 border-r">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Who We Are
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Yeti International College stands as a beacon of
                      educational excellence in Nepal, fostering innovation and
                      leadership since its inception.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary font-bold"
                    >
                      Read Our Full Story{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  {/* Right: Two-Column Vertical List */}
                  <div className="col-span-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Explore About
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8">
                      {/* First Column */}
                      <ul className="flex flex-col gap-2">
                        {firstColAbout.map((link) => (
                          <ListLink key={link.label} {...link} />
                        ))}
                      </ul>
                      {/* Second Column */}
                      <ul className="flex flex-col gap-2">
                        {secondColAbout.map((link) => (
                          <ListLink key={link.label} {...link} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* PROGRAMS MENU */}
              {activeMenu === "programs" && (
                <div className="grid grid-cols-12 gap-12">
                  {/* Left: Context / Highlight */}
                  <div className="col-span-4 pr-6 border-r">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Academics
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Our curriculum is designed to meet global standards,
                      ensuring you are ready for the challenges of the modern
                      workforce.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground">
                        Next Intake
                      </p>
                      <p className="font-bold text-foreground">
                        Fall 2024 - Applications Open
                      </p>
                    </div>
                  </div>

                  {/* Right: Two-Column Vertical List */}
                  <div className="col-span-8">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Degree Programs
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8">
                      {/* First Column */}
                      <ul className="flex flex-col gap-2">
                        {firstColPrograms.map((link) => (
                          <ListLink key={link.label} {...link} />
                        ))}
                      </ul>
                      {/* Second Column */}
                      <ul className="flex flex-col gap-2">
                        {secondColPrograms.map((link) => (
                          <ListLink key={link.label} {...link} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[80px] bg-black/20 backdrop-blur-[1px] z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </header>
  );
}

// --- Sub Components ---

function NavItem({
  label,
  active,
  onHover,
}: {
  label: string;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      className={`
        relative px-4 py-2 cursor-pointer group flex items-center gap-1 text-sm font-medium transition-colors
        ${active ? "text-primary" : "text-foreground hover:text-primary"}
      `}
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          active ? "rotate-180" : ""
        }`}
      />
      <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
    </div>
  );
}

function ListLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: any;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between p-3 rounded-lg hover:bg-accent group transition-all duration-200 border border-transparent hover:border-border/50"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 text-primary rounded-md group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
            {label}
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  );
}
