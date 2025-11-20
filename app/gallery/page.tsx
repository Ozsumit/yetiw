"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Filter, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";

// --- 1. DATA (With calculated spans in mind) ---
const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/3195394/free-video-3195394.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Design Process",
    category: "Process",
    width: 1920,
    height: 1080, // 1.77 Ratio -> Wide
  },
  {
    id: 2,
    type: "image",
    src: "https://picsum.photos/id/28/800/1200",
    title: "Urban Verticality",
    category: "Architecture",
    width: 800,
    height: 1200, // 0.66 Ratio -> Tall
  },
  {
    id: 3,
    type: "image",
    src: "https://picsum.photos/id/12/800/800",
    title: "Campus Life",
    category: "Campus",
    width: 800,
    height: 800, // 1.0 Ratio -> Square
  },
  {
    id: 4,
    type: "video",
    src: "https://www.pexels.com/download/video/34737091/",
    poster:
      "https://images.pexels.com/videos/34737091/pexels-photo-34737091.jpeg",
    title: "Student Exhibition",
    category: "Events",
    width: 1920,
    height: 1080, // Wide
  },
  {
    id: 5,
    type: "image",
    src: "https://picsum.photos/id/42/800/800",
    title: "Ceramics Workshop",
    category: "Process",
    width: 800,
    height: 800, // Square
  },
  {
    id: 6,
    type: "image",
    src: "https://picsum.photos/id/26/1600/900",
    title: "Abstract Objects",
    category: "Architecture",
    width: 1600,
    height: 900, // Wide
  },
  {
    id: 7,
    type: "video",
    src: "https://www.pexels.com/download/video/34748276/",
    poster: "https://images.pexels.com/videos/34748276/free-video-34748276.jpg",
    title: "Fashion Show",
    category: "Events",
    width: 1080,
    height: 1920, // Tall
  },
  {
    id: 8,
    type: "image",
    src: "https://picsum.photos/id/60/1200/1200",
    title: "Tech Lab",
    category: "Campus",
    width: 1200,
    height: 1200, // Square
  },
  {
    id: 9,
    type: "image",
    src: "https://picsum.photos/id/29/2000/1000",
    title: "Forest Retreat",
    category: "Architecture",
    width: 2000,
    height: 1000, // Wide
  },
  {
    id: 10,
    type: "image",
    src: "https://picsum.photos/id/48/800/1200",
    title: "Structure Details",
    category: "Architecture",
    width: 800,
    height: 1200, // Tall
  },
];

const categories = ["All", "Architecture", "Process", "Campus", "Events"];

// --- 2. IMPROVED SPAN CALCULATOR ---
const getLayoutClasses = (width: number, height: number) => {
  const ratio = width / height;

  // 1. Landscape (approx 16:9 or wider)
  // Spans 2 columns, 1 row
  if (ratio > 1.55) {
    return {
      span: "col-span-1 md:col-span-2 row-span-1",
      aspect: "aspect-video",
    };
  }

  // 2. Portrait (approx 2:3 or taller)
  // Spans 1 column, 2 rows
  if (ratio < 0.7) {
    return {
      span: "col-span-1 md:row-span-2",
      aspect: "aspect-[9/16]",
    };
  }

  // 3. Square / Standard (approx 1:1 or 4:3)
  // Spans 1 column, 1 row
  return {
    span: "col-span-1 row-span-1",
    aspect: "aspect-square",
  };
};

// --- 3. GRID ITEM COMPONENT ---
const GalleryItem = ({ item }: { item: (typeof galleryItems)[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { span } = getLayoutClasses(item.width, item.height);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {}); // Catch auto-play blocks
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
      className={cn(
        "relative group rounded-3xl overflow-hidden bg-zinc-100 w-full h-full",
        span
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="absolute inset-0 w-full h-full">
        {item.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              muted
              loop
              playsInline
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            {/* Play Button Indicator */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none",
                isHovered ? "opacity-0" : "opacity-100"
              )}
            >
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Play className="w-5 h-5 fill-white text-white ml-1" />
              </div>
            </div>
          </>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-medium text-white tracking-tight leading-tight">
              {item.title}
            </h3>
          </div>
          <button className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. MAIN COMPONENT ---
export default function DynamicGallery() {
  const [filter, setFilter] = useState("All");

  const filteredItems = useMemo(() => {
    return filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <>
      <Header />
      <section className="py-24 bg-white text-zinc-900 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12 mb-16 border-b border-zinc-100 pb-12">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">
                / 04 Portfolio
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.85]">
                Visual
                <span className="text-zinc-300">.</span>
                <br />
                Archive
              </h1>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300",
                    filter === cat
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200"
                  )}
                >
                  {filter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-zinc-900 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 
           THE GRID 
           - `grid-flow-dense` fills gaps created by large items.
           - `auto-rows` sets the base height for standard items.
        */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-dense"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Footer / Load More */}
          <div className="mt-24 flex justify-center">
            <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
