"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// 1. Video Carousel Component (Upgraded)
const VideoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }) as any,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const videos = [
    "https://www.pexels.com/download/video/6187887/",
    "https://www.pexels.com/download/video/34642433/",
    "https://www.pexels.com/download/video/3366872/",
  ];

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    // Cleanup listener on component unmount
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {videos.map((videoSrc, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <video
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. New Overlay with Gradient Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/0 backdrop-blur-sm [mask-image:linear-gradient(to_right,white_50%,transparent_100%)]" />

      {/* 3. New Carousel Controls (Prev/Next Buttons) */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-transparent hover:bg-black/40 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-transparent hover:bg-black/40 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            />
          </svg>
        </button>
      </div>

      {/* 4. New Indicator Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Hero Component (with text color adjustments) ---
export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  return (
    <section className="relative z-0 min-h-screen flex items-center overflow-hidden">
      <VideoCarousel />
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
                Your Future
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                  Starts Here
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-balance max-w-2xl mx-auto md:mx-0">
                Join thousands of students exploring world-class programs,
                discovering opportunities, and building their success stories at
                our vibrant academic community.
              </p>
            </div>
            <form
              onSubmit={handleSearch}
              className="w-full max-w-md mx-auto md:mx-0 z-20"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative flex items-center gap-3 px-6 py-3 bg-white/90 rounded-2xl shadow-lg border border-slate-200/50 backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-slate-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search programs, courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-slate-900 placeholder-slate-400 text-sm"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-xs shadow-md hover:shadow-lg"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap pt-2">
              <button className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md">
                Explore Programs
              </button>
              <button className="px-7 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-8 md:gap-16 pt-24 justify-center flex-wrap">
          <div className="flex flex-col items-center group">
            <span className="text-3xl md:text-4xl font-bold text-blue-300 group-hover:scale-110 transition-transform">
              <CountUp
                end={7}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="+"
              />
            </span>
            <span className="text-slate-200 text-sm font-medium">
              Academic Programs
            </span>
          </div>
          <div className="h-10 w-px bg-slate-300/50 hidden sm:block" />
          <div className="flex flex-col items-center group">
            <span className="text-3xl md:text-4xl font-bold text-teal-300 group-hover:scale-110 transition-transform">
              <CountUp
                end={2}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="K+"
              />
            </span>
            <span className="text-slate-200 text-sm font-medium">
              Active Students
            </span>
          </div>
          <div className="h-10 w-px bg-slate-300/50 hidden sm:block" />
          <div className="flex flex-col items-center group">
            <span className="text-3xl md:text-4xl font-bold text-blue-200 group-hover:scale-110 transition-transform">
              <CountUp
                end={50}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                suffix="+"
              />
            </span>
            <span className="text-slate-200 text-sm font-medium">
              Partner Universities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
