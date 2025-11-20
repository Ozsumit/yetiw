"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Types & Data ---

type Event = {
  id: number;
  title: string;
  date: string; // Format: YYYY-MM-DD
  category: string;
  description: string;
  location: string;
  time: string;
  accent: string; // Tailwind color class
};

const eventsData: Event[] = [
  {
    id: 1,
    title: "Open Campus Day",
    date: "2024-03-15",
    category: "Admissions",
    description:
      "Join us for a campus tour and meet our faculty in an immersive open house experience.",
    location: "Main Quad",
    time: "09:00 AM",
    accent: "bg-blue-600",
  },
  {
    id: 2,
    title: "Design Workshop",
    date: "2024-03-22",
    category: "Workshop",
    description:
      "Hands-on session focusing on Swiss typography and grid systems.",
    location: "Studio A",
    time: "02:00 PM",
    accent: "bg-orange-500",
  },
  {
    id: 3,
    title: "Research Symposium",
    date: "2024-04-02",
    category: "Academic",
    description:
      "Explore groundbreaking research projects from our graduating scholars.",
    location: "Science Hall",
    time: "01:00 PM",
    accent: "bg-violet-600",
  },
  {
    id: 4,
    title: "Career Fair 2024",
    date: "2024-04-18",
    category: "Professional",
    description:
      "Connect with leading industry employers and explore internship opportunities.",
    location: "Student Center",
    time: "10:00 AM",
    accent: "bg-emerald-600",
  },
];

// --- Helper Functions ---

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...

// Adjust for Monday start (Swiss/European standard)
const getAdjustedDayIndex = (dayIndex: number) =>
  dayIndex === 0 ? 6 : dayIndex - 1;

// --- Components ---

const SwissCalendar = ({
  events,
  onDateSelect,
  selectedDate,
}: {
  events: Event[];
  onDateSelect: (date: string | null) => void;
  selectedDate: string | null;
}) => {
  // Default to March 2024 for demo purposes since data starts there
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const startingDayIndex = getAdjustedDayIndex(getFirstDayOfMonth(year, month));

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  // Create date string YYYY-MM-DD
  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <>
      <div className="p-6 bg-zinc-900 text-white rounded-3xl w-full shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold tracking-tight">
            {monthName} <span className="text-zinc-500">{year}</span>
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {days.map((d) => (
            <div key={d} className="text-xs text-zinc-500 font-medium">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-zinc-400">
          {/* Empty slots */}
          {Array.from({ length: startingDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = formatDate(day);
            const hasEvent = events.some((e) => e.date === dateStr);
            const isSelected = selectedDate === dateStr;

            return (
              <button
                key={day}
                onClick={() => onDateSelect(isSelected ? null : dateStr)}
                className={`
                    relative aspect-square flex flex-col items-center justify-center rounded-2xl transition-all duration-300
                    ${
                      isSelected
                        ? "bg-white text-zinc-900 font-bold scale-110 shadow-lg"
                        : "hover:bg-zinc-800 hover:text-white"
                    }
                        ${
                          !isSelected && hasEvent
                            ? "font-bold text-white bg-zinc-800/50"
                            : ""
                        }
                            `}
              >
                {day}
                {/* Event Indicator Dot */}
                {hasEvent && (
                  <div
                    className={`absolute bottom-1.5 w-1 h-1 rounded-full ${
                      isSelected ? "bg-zinc-900" : "bg-blue-500"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Filter logic
  const displayedEvents = selectedDate
    ? eventsData.filter((e) => e.date === selectedDate)
    : eventsData;

  // Date formatter for display
  const getDateParts = (dateString: string) => {
    const date = new Date(dateString);
    // Fix timezone offset issue for simple display by appending time
    const d = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
    return {
      day: d.getDate(),
      month: d.toLocaleString("default", { month: "short" }).toUpperCase(),
      weekday: d.toLocaleString("default", { weekday: "long" }),
    };
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-8 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* --- Left Sidebar (Sticky) --- */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                {/* Title Card */}
                <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-4">
                    Event
                    <br />
                    <span className="text-zinc-400">Calendar.</span>
                  </h1>
                  <p className="text-zinc-600 font-medium">
                    Select a date to filter upcoming activities.
                  </p>
                </div>

                {/* Functional Calendar */}
                <SwissCalendar
                  events={eventsData}
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />

                {/* Active Filter Status */}
                {selectedDate && (
                  <div className="bg-blue-600 text-white p-6 rounded-3xl flex items-center justify-between animate-in fade-in slide-in-from-top-4">
                    <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">
                        Filtering By
                      </p>
                      <p className="text-xl font-bold">{selectedDate}</p>
                    </div>
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* --- Right Content (Feed) --- */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Feed Header */}
              <div className="flex justify-between items-end mb-2 px-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  {selectedDate ? "Filtered Events" : "All Upcoming Events"}
                </h2>
                <span className="text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {displayedEvents.length} found
                </span>
              </div>

              {/* Empty State */}
              {displayedEvents.length === 0 && (
                <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-zinc-300">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="w-6 h-6 text-zinc-400" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    No events found
                  </h3>
                  <p className="text-zinc-500">
                    There are no events scheduled for this specific date.
                  </p>
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="mt-6 text-sm font-bold text-blue-600 underline underline-offset-4"
                  >
                    View all events
                  </button>
                </div>
              )}

              {/* Event Cards */}
              {displayedEvents.map((event) => {
                const { day, month, weekday } = getDateParts(event.date);

                return (
                  <Card
                    key={event.id}
                    className="group relative border-0 bg-white rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Date Column */}
                      <div className="md:w-40 bg-zinc-50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-zinc-100 group-hover:bg-zinc-100 transition-colors">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                          {month}
                        </span>
                        <span className="text-5xl font-bold tracking-tighter text-zinc-900 my-1">
                          {day}
                        </span>
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                          {weekday}
                        </span>
                      </div>

                      {/* Content Column */}
                      <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`w-2 h-2 rounded-full ${event.accent}`}
                              />
                              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                {event.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 leading-tight">
                              {event.title}
                            </h3>
                          </div>
                          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>

                        <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-auto">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-zinc-100 px-3 py-2 rounded-xl">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-zinc-100 px-3 py-2 rounded-xl">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
