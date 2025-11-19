"use client";

import React, { useEffect, useState, useRef, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Pause,
  Play,
  BookOpen,
  Volume2,
  VolumeX,
} from "lucide-react";

// --- Type Definitions ---

interface SpotlightItem {
  id: number;
  title: string;
  author: string;
  publicationDate: string;
  field: string;
  description: string;
  imageUrl: string;
  youtubeVideoId: string;
}

// --- Hardcoded Data (Unchanged) ---

const staticSpotlights: SpotlightItem[] = [
  {
    id: 1,
    title: "The Theory of Relativity",
    author: "Albert Einstein",
    publicationDate: "1915",
    field: "Physics",
    description:
      "A pillar of modern physics, the theory of relativity revolutionized our understanding of space, time, gravity, and the universe. It describes the laws of physics as being the same for all non-accelerating observers.",
    imageUrl: "https://i.imgur.com/6X2AN4j.jpeg",
    youtubeVideoId: "1rktusvuGQE",
  },
  {
    id: 2,
    title: "The Structure of DNA",
    author: "Watson, Crick, Franklin & Wilkins",
    publicationDate: "1953",
    field: "Biology",
    description:
      "The discovery of the double helix structure of DNA was a landmark moment in science, unlocking the secrets of genetic inheritance and paving the way for modern molecular biology and genetic engineering.",
    imageUrl: "https://i.imgur.com/w1aF1sF.jpeg",
    youtubeVideoId: "8kK2zwjRV0M",
  },
  {
    id: 3,
    title: "The Printing Press",
    author: "Johannes Gutenberg",
    publicationDate: "c. 1440",
    field: "History & Technology",
    description:
      "The invention of the printing press with movable type sparked a revolution in communication and the dissemination of knowledge, accelerating the Renaissance, the Reformation, and the Age of Enlightenment.",
    imageUrl: "https://i.imgur.com/S99p7s9.jpeg",
    youtubeVideoId: "V5d1k5mR2zQ",
  },
  {
    id: 4,
    title: "The Renaissance",
    author: "Various Artists & Thinkers",
    publicationDate: "14th - 17th Century",
    field: "Art & Culture",
    description:
      "A fervent period of European cultural, artistic, political and economic “rebirth” following the Middle Ages. Famous for its masterpieces in art, architecture, and literature, it marked a new era of humanism.",
    imageUrl: "https://i.imgur.com/G5g22P3.jpeg",
    youtubeVideoId: "fI1OeMmwYjU",
  },
  {
    id: 5,
    title: "The Digital Revolution",
    author: "Pioneers of Computing",
    publicationDate: "Late 20th Century",
    field: "Computer Science",
    description:
      "The shift from mechanical and analog electronic technology to digital electronics which began in the latter half of the 20th century. This revolution has fundamentally changed the way we work, communicate, and live.",
    imageUrl: "https://i.imgur.com/3p8QCvM.jpeg",
    youtubeVideoId: "21eFwbb48sE",
  },
];

// --- Component ---

const SpotlightCarousel: FC = () => {
  const [spotlights, setSpotlights] =
    useState<SpotlightItem[]>(staticSpotlights);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const videoRef = useRef<HTMLIFrameElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    setIsMounted(true);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    if (!isPaused) {
      autoplayRef.current = setInterval(handleNextSlide, 15000);
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (spotlights.length > 0) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [isPaused, currentSlide, spotlights.length]);

  useEffect(() => {
    setShowVideo(false); // Reset video visibility on slide change
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isMobile]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % spotlights.length);
  };

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const postIframeMessage = (command: string) => {
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
        }),
        "*"
      );
    }
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      postIframeMessage(!prev ? "pauseVideo" : "playVideo");
      return !prev;
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      postIframeMessage(!prev ? "unMute" : "mute");
      return !prev;
    });
  };

  if (!isMounted) {
    return null; // Or a loading skeleton
  }

  // The background item changes with the slide
  const currentBackgroundItem = spotlights[currentSlide];
  // The text content is static, taken from the first item
  const staticTextItem = spotlights[0];

  if (!currentBackgroundItem || !staticTextItem) return null;

  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-black">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={currentBackgroundItem.imageUrl}
            alt={currentBackgroundItem.title}
            layout="fill"
            objectFit="cover"
            priority
            className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ${
              showVideo ? "opacity-0" : "opacity-100"
            }`}
          />
          {currentBackgroundItem.youtubeVideoId && !isMobile && (
            <div
              className={`relative w-full h-full transition-opacity duration-1000 ${
                showVideo ? "opacity-100" : "opacity-0"
              }`}
            >
              <iframe
                ref={videoRef}
                className="absolute w-full h-full scale-150"
                src={`https://www.youtube.com/embed/${
                  currentBackgroundItem.youtubeVideoId
                }?enablejsapi=1&vq=hd1080&autoplay=1&mute=${
                  isMuted ? 1 : 0
                }&controls=0&modestbranding=1&loop=0&playlist=${
                  currentBackgroundItem.youtubeVideoId
                }`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Foreground with Gradient and Blur */}
      <div className="absolute inset-0 z-10 grid md:grid-cols-2">
        <div className="relative flex flex-col justify-center">
          {/* Blurred Background Panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-xl"></div>

          {/* Static Text Content */}
          <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-16">
            <div className="text-gray-800 max-w-2xl space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="bg-gray-200/80 text-gray-700 px-3 py-1 rounded-full text-xs backdrop-blur-sm uppercase tracking-wider font-semibold">
                  {staticTextItem.field}
                </span>
                <span className="text-sm text-slate-100">
                  {staticTextItem.author} ({staticTextItem.publicationDate})
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-slate-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  {staticTextItem.title}
                </span>
              </h2>
              <p className="text-base md:text-lg text-slate-800 leading-relaxed max-w-xl">
                {staticTextItem.description}
              </p>
              <div className="pt-4">
                <Link
                  href={`/article/${staticTextItem.id}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-700 transition-all group font-semibold shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="mr-2 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex flex-col items-center space-y-4 z-20 px-4">
        <div className="flex items-center justify-center space-x-2 md:space-x-4 bg-white/50 backdrop-blur-md ring-1 ring-gray-900/10 p-2 md:p-3 rounded-full text-gray-800 shadow-lg">
          {currentBackgroundItem.youtubeVideoId && !isMobile && (
            <button
              onClick={toggleMute}
              className="p-1.5 md:p-2 rounded-full hover:bg-black/10 transition-all"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
          <button
            onClick={togglePause}
            className="p-1.5 md:p-2 rounded-full hover:bg-black/10 transition-all"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
          <button
            onClick={handleNextSlide}
            className="p-1.5 md:p-2 rounded-full hover:bg-black/10 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex space-x-2">
          {spotlights.map((_, index) => (
            <button
              key={index}
              onClick={() => selectSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 md:w-8 bg-black"
                  : "w-3 md:w-4 bg-gray-500/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCarousel;
