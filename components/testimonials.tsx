"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Class of 2023",
    image: "/portrait-professional.jpg",
    text: "Yeti International College transformed my academic journey. The supportive community and exceptional faculty made all the difference.",
  },
  {
    name: "Marcus Johnson",
    role: "Engineering Student",
    image: "portrait-male-student.jpg",
    text: "The hands-on projects and internship opportunities prepared me perfectly for my career in tech.",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Graduate",
    image: "portrait-young-woman.jpg",
    text: "The networking opportunities and mentorship programs were invaluable for launching my entrepreneurial venture.",
  },
  {
    name: "David Kim",
    role: "Medical Student",
    image: "professional-man-portrait.png",
    text: "The rigorous curriculum and access to research facilities set me up for success in medical school.",
  },
  {
    name: "Aisha Patel",
    role: "Computer Science",
    image: "portrait-woman-tech.jpg",
    text: "I found my passion for coding here. The hackathons and coding clubs were the highlight of my college years.",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Update state for the dots
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mt-4  mx-auto">
            Hear from our graduates about their journey.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations

            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 pb-4">
              {testimonials.map((testimonial, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full pt-2 pb-2 px-1">
                    {/* Card Design Matching Reference */}
                    <Card className="h-full border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                      <CardContent className="flex flex-col p-8 h-full">
                        {/* Main Text Area */}
                        <div className="flex-grow">
                          <p className="text-slate-700 text-lg leading-relaxed italic font-medium">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-slate-100 my-6" />

                        {/* Profile Section */}
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border border-slate-100"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=e2e8f0&color=475569`;
                            }}
                          />
                          <div>
                            <h4 className="font-bold text-slate-900 text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-slate-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Optional: Arrows (Hidden on mobile, visible on large screens) */}
            <CarouselPrevious className="hidden lg:flex -left-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600" />
            <CarouselNext className="hidden lg:flex -right-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600" />
          </Carousel>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index + 1
                    ? "w-8 h-2.5 bg-slate-800"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
