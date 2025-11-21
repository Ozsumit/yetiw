"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { events } from "@/data/events";
// Unified data structure matching the Swiss style

export default function EventsSnippet() {
  // Helper to format date
  const getDateParts = (dateString: string) => {
    const date = new Date(dateString);
    // Adjust for timezone to prevent day shifting in display
    const d = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
    return {
      day: d.getDate(),
      month: d.toLocaleString("default", { month: "short" }).toUpperCase(),
      weekday: d.toLocaleString("default", { weekday: "long" }),
    };
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F2F2F2] font-sans text-zinc-900">
      <div className="max-w-[1400px] mx-auto">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Agenda
            </h5>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-zinc-900">
              Upcoming
              <br />
              Events
            </h2>
            <p className="text-lg text-zinc-500 max-w-md font-medium leading-relaxed">
              Connect, learn, and grow. Join our vibrant community at these
              upcoming gatherings.
            </p>
          </div>

          <Link
            href="/events"
            className="hidden md:inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all bg-white border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 group"
          >
            View Full Calendar
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, idx) => {
            const { day, month, weekday } = getDateParts(event.date);

            return (
              <Card
                key={idx}
                className="group flex flex-col h-full border-0 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Date & Category Header */}
                <div className="p-8 pb-0 flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      {month}
                    </span>
                    <span className="text-6xl font-bold text-zinc-900 tracking-tighter leading-none">
                      {day}
                    </span>
                    <span className="text-sm font-medium text-zinc-500 mt-1">
                      {weekday}
                    </span>
                  </div>

                  <div className={`w-3 h-3 rounded-full ${event.accent}`} />
                </div>

                <CardContent className="p-8 flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {event.description}
                  </p>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-50 px-2.5 py-1.5 rounded-lg">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0 mt-auto">
                  <div className="w-full pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors cursor-pointer">
                      Details
                    </span>
                    <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-colors bg-white border border-zinc-200 rounded-full hover:bg-zinc-50"
          >
            View Full Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
