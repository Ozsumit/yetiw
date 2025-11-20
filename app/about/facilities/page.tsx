"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Users,
  Wifi,
  Zap,
  Coffee,
  BookOpen,
  Monitor,
  Microscope,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Data Configuration ---

const facilitiesData = [
  {
    category: "Academic Core",
    description:
      "Spaces designed for focus, collaboration, and intellectual growth.",
    items: [
      {
        title: "Lecture Theaters",
        image: "/modern-classroom.png", // Replace with real path
        icon: Users,
        specs: ["Capacity: 60 Students", "Smart Boards", "Climate Controlled"],
        description:
          "Amphitheater-style seating with acoustic treatment ensuring every word is heard.",
      },
      {
        title: "The Knowledge Hub",
        image: "/modern-library-interior.png", // Replace with real path
        icon: BookOpen,
        specs: ["20,000+ Volumes", "Digital Access", "Silent Zones"],
        description:
          "A comprehensive library combining physical archives with high-speed digital research terminals.",
      },
    ],
  },
  {
    category: "Research & Tech",
    description: "Advanced infrastructure for the innovators of tomorrow.",
    items: [
      {
        title: "IT & Innovation Lab",
        image: "/computer-lab.jpg", // Replace with real path
        icon: Monitor,
        specs: ["Mac & PC Stations", "Gigabit Internet", "3D Printers"],
        description:
          "State-of-the-art computing facility open 24/7 for coding, design, and research projects.",
      },
      {
        title: "Science Center",
        image: "/science-laboratory-equipment.jpg", // Replace with real path
        icon: Microscope,
        specs: ["Chemistry Bay", "Physics Wing", "Safety Grade A"],
        description:
          "Fully equipped laboratories meeting international safety standards for practical experimentation.",
      },
    ],
  },
  {
    category: "Lifestyle & Recreation",
    description:
      "Balancing academic rigor with physical and social well-being.",
    items: [
      {
        title: "Student Lounge & Cafeteria",
        image: "/cafeteria.jpg", // Replace with real path
        icon: Coffee,
        specs: ["Organic Menu", "Lounge Seating", "Event Space"],
        description:
          "A vibrant social hub serving healthy meals and providing a space to unwind between classes.",
      },
      {
        title: "Sports Complex",
        image: "/sports-court.jpg", // Replace with real path
        icon: Dumbbell,
        specs: ["Basketball Court", "Indoor Gym", "Changing Rooms"],
        description:
          "Facilities promoting physical fitness, teamwork, and competitive spirit among students.",
      },
    ],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    Campus Infrastructure
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  Built for <br />
                  <span className="text-muted-foreground/40">Brilliance.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-3 pb-4">
              <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                Explore an environment where architecture serves education.
                Every corner is crafted to inspire.
              </p>
            </div>
          </div>
        </section>

        {/* --- FEATURED IMAGE --- */}
        <section className="px-6 pb-32 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative w-full h-[50vh] md:h-[70vh] rounded-[3rem] overflow-hidden"
          >
            <Image
              src="/campus-wide.jpg" // Use a wide shot of the building
              alt="Campus Building"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-md p-6 rounded-3xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-full text-primary-foreground">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">Smart Campus</div>
                  <div className="text-xs text-muted-foreground">
                    High-speed coverage everywhere
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CATALOG SECTIONS --- */}
        <div className="flex flex-col gap-0 pb-32">
          {facilitiesData.map((category, idx) => (
            <CategorySection key={idx} data={category} index={idx} />
          ))}
        </div>

        {/* --- CTA SECTION --- */}
        <section className="px-6 pb-20">
          <div className="max-w-[1600px] mx-auto bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <Building2 className="w-16 h-16 mx-auto opacity-80" />
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                See it to believe it.
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Pictures only say so much. Book a guided campus tour and feel
                the atmosphere yourself.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full h-14 px-8 text-base font-bold"
              >
                Schedule a Visit
              </Button>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// --- SUB-COMPONENTS ---

function CategorySection({ data, index }: { data: any; index: number }) {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                0{index + 1} — Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                {data.category}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {data.description}
              </p>

              {/* Decorative Indicator */}
              <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {data.items.length} Facilities
              </div>
            </div>
          </div>

          {/* Right: Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {data.items.map((item: any, i: number) => (
                <FacilityCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col gap-6"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-muted border border-border group-hover:border-primary/50 transition-colors duration-300">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating Icon */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-muted-foreground -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Spec Sheet Look */}
        <div className="pt-4 border-t border-border border-dashed">
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {item.specs.map((spec: string, k: number) => (
              <div
                key={k}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/80"
              >
                <div className="w-1 h-1 rounded-full bg-primary" />
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
