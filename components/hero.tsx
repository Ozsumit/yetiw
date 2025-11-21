"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// --- Icons ---
const Icons = {
  Calendar: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  Clock: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Grip: () => (
    <svg
      className="w-8 h-1 text-white/20"
      fill="currentColor"
      viewBox="0 0 24 4"
    >
      <rect width="24" height="4" rx="2" />
    </svg>
  ),
};

// --- Data ---
const SEAT_DATA = [
  { course: "B.Sc Computer Science", seats: 4, total: 60 },
  { course: "MBA Finance", seats: 12, total: 120 },
  { course: "B.Des Graphic Design", seats: 8, total: 40 },
  { course: "M.Sc Data Science", seats: 3, total: 30 },
  { course: "BBA Marketing", seats: 15, total: 100 },
  { course: "Cybersecurity", seats: 2, total: 25 },
];

const SLIDES = [
  {
    video: "https://www.pexels.com/download/video/6187887/",
    poster:
      "https://images.pexels.com/photos/6187887/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600", // Library vibe
  },
  {
    video: "https://www.pexels.com/download/video/34642433/",
    poster:
      "https://images.pexels.com/photos/34642433/pexels-photo-7972356.jpeg?auto=compress&cs=tinysrgb&w=1600", // Campus vibe
  },
  {
    video: "https://www.pexels.com/download/video/3366872/",
    poster:
      "https://images.pexels.com/photos/3366872/pexels-photo-3738601.jpeg?auto=compress&cs=tinysrgb&w=1600", // Lab/Tech vibe
  },
];

// --- Sub-Component: Video Slide ---
// Handles the "Thumbnail -> Video" transition logic per slide
const VideoSlide = ({ video, poster }: { video: string; poster: string }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative flex-[0_0_100%] h-full">
      {/* 1. Thumbnail Image (Shows immediately) */}
      <img
        src={poster}
        alt="Background Preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Video (Hidden until loaded) */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        // This event fires when enough data has loaded to play the frame
        onLoadedData={() => setIsVideoLoaded(true)}
      />

      {/* Optional: Dark overlay for text readability (applied to both image and video) */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

// --- Component: Video Carousel ---
const VideoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }) as any,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-zinc-900">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <VideoSlide key={index} video={slide.video} poster={slide.poster} />
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 sm:via-black/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden pointer-events-none" />

      {/* Pagination Dots */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
              index === selectedIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const constraintsRef = useRef(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  return (
    <section
      ref={constraintsRef}
      className="relative z-0 min-h-screen flex items-center overflow-hidden font-sans text-white"
    >
      <VideoCarousel />

      <style jsx>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 15s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full z-10 pointer-events-none">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE --- */}
          <div className="pointer-events-auto space-y-10 text-center md:text-left animate-in fade-in duration-1000 slide-in-from-left-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-sm">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Admissions Open 2025
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
                Your Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Starts Here.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-balance font-medium">
                Join thousands of students exploring world-class programs,
                discovering opportunities, and building success stories.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              className="w-full max-w-md mx-auto md:mx-0 group"
            >
              <div className="relative flex items-center p-1.5 bg-white/10 backdrop-blur-lg rounded-full shadow-2xl border border-white/10 group-focus-within:bg-white/15 group-focus-within:border-white/20 transition-all duration-300">
                <div className="pl-4 text-slate-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 w-full bg-transparent text-white placeholder-slate-400 text-base px-3 py-2 outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg">
                Explore Programs
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all">
                Schedule Tour
              </button>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start">
              <StatItem end={7} suffix="+" label="Faculties" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <StatItem end={2} suffix="K+" label="Students" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <StatItem end={50} suffix="+" label="Partners" />
            </div>
          </div>

          {/* --- RIGHT SIDE: Draggable --- */}
          <div className="hidden md:flex h-full flex-col justify-center items-end gap-8 pointer-events-none">
            {/* Event Card */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              whileHover={{ scale: 1.01 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
              className="pointer-events-auto cursor-grab w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="w-full bg-black/20 h-4 flex items-center justify-center">
                <Icons.Grip />
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="p-5 bg-black/40">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                      Upcoming Event
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Innovation Summit
                    </h3>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center min-w-[60px]">
                    <span className="block text-xs uppercase text-slate-400 font-bold">
                      Nov
                    </span>
                    <span className="block text-xl font-bold text-white">
                      28
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                  <Icons.Clock />
                  <span>10:00 AM - Main Hall</span>
                </div>
                <button
                  onPointerDownCapture={(e) => e.stopPropagation()}
                  className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/5 transition-colors"
                >
                  Reserve Spot
                </button>
              </div>
            </motion.div>

            {/* Ticker Card */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              whileHover={{ scale: 1.01 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
              className="pointer-events-auto cursor-grab w-72 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="w-full bg-white/5 h-4 flex items-center justify-center border-b border-white/5">
                <Icons.Grip />
              </div>
              <div className="px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Live Seat Status
                </span>
              </div>
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="animate-vertical-scroll group-hover:pause-animation">
                  {[...SEAT_DATA, ...SEAT_DATA].map((item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 border-b border-white/5 flex justify-between items-center"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white truncate w-36">
                          {item.course}
                        </span>
                        <div className="w-full bg-white/10 h-1 rounded-full mt-1.5">
                          <div
                            className={`h-full rounded-full ${
                              item.seats < 5 ? "bg-red-500" : "bg-emerald-500"
                            }`}
                            style={{
                              width: `${(1 - item.seats / item.total) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-sm font-bold ${
                            item.seats < 5 ? "text-red-400" : "text-emerald-400"
                          }`}
                        >
                          {item.seats}
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase">
                          left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StatItem = ({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) => (
  <div className="flex flex-col items-start">
    <span className="text-4xl font-bold text-white tracking-tighter">
      <CountUp end={end} duration={2.5} suffix={suffix} />
    </span>
    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);
