"use client"; // Required for hooks

import * as React from "react";
import Link from "next/link"; // Best practice for internal navigation in Next.js
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Make sure your carousel component exports CarouselApi

const programs = [
  {
    id: 1,
    title: "BABM",
    category: "University Program",
    details: "4 Years",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    href: "/programs/engineering",
  },
  {
    id: 2,
    title: "BHM",
    category: "Graduate School",
    details: "4 Years",
    image: "https://picsum.photos/id/1015/800/800",
    href: "/programs/business",
  },
  {
    id: 3,
    title: "MBA",
    category: "University Program",
    details: "2 Years",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    href: "/programs/liberal-arts",
  },
  {
    id: 4,
    title: "BCA",
    category: "Technology School",
    details: "4 Years",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    href: "/programs/technology",
  },
  {
    id: 5,
    title: "BMM",
    category: "Media School",
    details: "4 Years",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    href: "/programs/media",
  },
  {
    id: 6,
    title: "BTTM",
    category: "Tourism School",
    details: "4 Years",
    image: "https://picsum.photos/id/1018/800/800",
    href: "/programs/tourism",
  },
];

export default function Programs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // --- Improved Autoplay Configuration ---
  const plugin = React.useRef<any>(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false, // Continue autoplay after user interaction
      stopOnMouseEnter: true, // Pause autoplay on hover
    })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-[#F7F7F7] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">
            Explore Our Programs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from diverse programs designed to prepare you for success.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          // eslint-disable-next-line [rule-name], [another-rule-name]
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-11/12 mx-auto"
        >
          <CarouselContent className="-ml-4">
            {programs.map((program) => (
              <CarouselItem
                key={program.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Link
                    href={program.href}
                    className="group block bg-white p-5 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 h-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={program.image}
                          alt={`${program.title} program`}
                          className="w-full h-auto object-cover aspect-square rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                          {program.category}
                        </p>
                        <p className="text-base text-slate-700 mt-1">
                          {program.details}
                        </p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-3">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex" />
          <CarouselNext className="hidden xl:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index + 1 ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* --- View All Programs Button --- */}
        <div className="mt-16 text-center">
          <Link
            href="/programs"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
