"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Image as ImageIcon,
  Download,
  X,
  Filter,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Types & Data ---

export type Notice = {
  id: number;
  title: string;
  date: string;
  category: "Administrative" | "Academic" | "Exam" | "Holiday";
  description: string;
  mediaType: "pdf" | "image" | "none";
  mediaUrl?: string;
  accent: string;
};

export const noticesData: Notice[] = [
  {
    id: 1,
    title: "Semester End Examination Schedule",
    date: "2024-03-10",
    category: "Exam",
    description:
      "The final routine for the Spring 2024 semester has been published. Please check for conflicting dates.",
    mediaType: "pdf",
    mediaUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    accent: "bg-rose-600",
  },
  {
    id: 2,
    title: "Campus Renovation Progress",
    date: "2024-03-12",
    category: "Administrative",
    description:
      "See the progress on the new library wing. Construction is expected to finish by July.",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    accent: "bg-blue-600",
  },
  {
    id: 3,
    title: "Holi Festival Holiday",
    date: "2024-03-24",
    category: "Holiday",
    description:
      "The campus will remain closed on March 24th and 25th for Holi celebrations.",
    mediaType: "none",
    accent: "bg-amber-500",
  },
  {
    id: 4,
    title: "Scholarship Application Form",
    date: "2024-04-01",
    category: "Academic",
    description:
      "Applications for the Merit Scholarship are now open. Download the attached PDF form.",
    mediaType: "pdf",
    mediaUrl: "/Ojt-report-final.pdf",
    accent: "bg-emerald-600",
  },
];

// --- Helper: Media Preview Component ---
// This generates the visual preview for both List and Grid views
export const MediaThumbnail = ({
  type,
  url,
  className = "",
}: {
  type: string;
  url?: string;
  className?: string;
}) => {
  if (type === "image" && url) {
    return (
      <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
        <img
          src={url}
          alt="Notice preview"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  }

  if (type === "pdf") {
    return (
      <div
        className={`relative overflow-hidden bg-zinc-100 flex items-center justify-center ${className}`}
      >
        {/* CSS-only "Document" visual */}
        <div className="w-3/5 h-4/5 bg-white shadow-sm border border-zinc-200 rounded-md p-2 flex flex-col gap-1.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
          <div className="w-full h-1.5 bg-zinc-100 rounded-full" />
          <div className="w-2/3 h-1.5 bg-zinc-100 rounded-full" />
          <div className="w-full h-1.5 bg-zinc-100 rounded-full mt-2" />
          <div className="w-full h-1.5 bg-zinc-100 rounded-full" />
          <div className="w-4/5 h-1.5 bg-zinc-100 rounded-full" />
          <div className="mt-auto self-end text-[8px] font-bold text-red-500 border border-red-100 bg-red-50 px-1 rounded">
            PDF
          </div>
        </div>
      </div>
    );
  }

  // Fallback for text-only
  return (
    <div
      className={`relative overflow-hidden bg-zinc-50 flex items-center justify-center ${className}`}
    >
      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
      </div>
    </div>
  );
};

// --- Main Page ---

export default function NoticesPage() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  // Scroll Lock
  useEffect(() => {
    document.body.style.overflow = selectedNotice ? "hidden" : "unset";
  }, [selectedNotice]);

  const filteredNotices = noticesData.filter(
    (n) => filterCategory === "All" || n.category === filterCategory
  );

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-8 md:py-12 px-4 md:px-8 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters (Same as before) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-8 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                  <h1 className="text-5xl font-bold tracking-tighter leading-[0.9] mb-4">
                    Official
                    <br />
                    <span className="text-zinc-400">Notices.</span>
                  </h1>
                  <p className="text-zinc-600 font-medium">
                    Stay updated with the latest announcements.
                  </p>
                </div>
                <div className="bg-zinc-900 text-white p-6 rounded-[2rem] shadow-xl">
                  <div className="flex items-center gap-2 mb-6 text-zinc-400">
                    <Filter className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">
                      Filter by Category
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "All",
                      "Administrative",
                      "Academic",
                      "Exam",
                      "Holiday",
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium flex justify-between items-center ${
                          filterCategory === cat
                            ? "bg-white text-zinc-900 font-bold shadow-md scale-105"
                            : "hover:bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {cat}
                        {filterCategory === cat && (
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feed List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2 px-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Recent Updates
                </h2>
                <span className="text-sm font-semibold text-zinc-400 bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {filteredNotices.length} Notices
                </span>
              </div>

              {filteredNotices.map((notice) => (
                <Card
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="group relative border-0 bg-white rounded-[2rem] p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-visible"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-2">
                    {/* Date Badge */}
                    <div className="hidden sm:flex flex-col items-center justify-center bg-zinc-50 rounded-[1.5rem] p-3 w-20 h-24 text-center border border-zinc-100 shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        {new Date(notice.date).toLocaleString("default", {
                          month: "short",
                        })}
                      </span>
                      <span className="text-2xl font-bold text-zinc-900 leading-none my-1">
                        {new Date(notice.date).getDate()}
                      </span>
                    </div>

                    {/* Media Preview Thumbnail */}
                    <MediaThumbnail
                      type={notice.mediaType}
                      url={notice.mediaUrl}
                      className="w-full sm:w-32 h-32 sm:h-24 rounded-[1.5rem] border border-zinc-100 shrink-0"
                    />

                    {/* Text Content */}
                    <div className="flex-1 min-w-0 py-2 px-2 sm:px-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${notice.accent}`}
                        />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                          {notice.category}
                        </span>
                        <span className="sm:hidden text-xs text-zinc-400 font-medium ml-auto">
                          {notice.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 truncate leading-tight group-hover:text-blue-700 transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-1 line-clamp-1 pr-4">
                        {notice.description}
                      </p>
                    </div>

                    {/* Action Icon */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 shrink-0 mr-2">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* --- Popup Modal (Same as previous, handling media full view) --- */}
      {selectedNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedNotice(null)}
          />
          <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row">
            {/* Details Panel */}
            <div className="md:w-1/3 bg-zinc-50 p-8 md:p-10 border-r border-zinc-100 flex flex-col overflow-y-auto relative z-20">
              <button
                onClick={() => setSelectedNotice(null)}
                className="self-start p-2 -ml-2 mb-6 hover:bg-zinc-200 rounded-full transition-colors md:hidden"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white ${selectedNotice.accent}`}
                >
                  {selectedNotice.category}
                </span>
                <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                  {selectedNotice.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight leading-tight mb-6">
                {selectedNotice.title}
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                {selectedNotice.description}
              </p>
              {selectedNotice.mediaUrl && (
                <a
                  href={selectedNotice.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-zinc-900 text-white font-bold hover:opacity-90 transition-transform hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" /> Download Attachment
                </a>
              )}
            </div>

            {/* Media Panel */}
            <div className="flex-1 bg-zinc-900 relative flex items-center justify-center p-4 overflow-hidden">
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-6 right-6 z-30 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors hidden md:block"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedNotice.mediaType === "image" &&
              selectedNotice.mediaUrl ? (
                <img
                  src={selectedNotice.mediaUrl}
                  alt="Full View"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              ) : selectedNotice.mediaType === "pdf" &&
                selectedNotice.mediaUrl ? (
                <iframe
                  src={`${selectedNotice.mediaUrl}#toolbar=0`}
                  className="w-full h-full rounded-xl bg-white"
                  title="PDF Viewer"
                />
              ) : (
                <div className="text-zinc-500 flex flex-col items-center text-center">
                  <FileText className="w-16 h-16 opacity-20 mb-4" />
                  <p className="opacity-50">No Media Preview Available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
