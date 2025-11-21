// --- Types ---
export interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  time: string;
  accent: string;
  textAccent: string;
}

// --- Data ---
export const events: Event[] = [
  {
    id: 1,
    title: "Open Campus Day",
    date: "2025-11-30",
    category: "Admissions",
    description:
      "Join us for a comprehensive campus tour. Meet our faculty, visit the new design labs, and experience student life firsthand.",
    location: "Main Quad",
    time: "09:00 AM",
    accent: "bg-[#FF4F00]",
    textAccent: "text-[#FF4F00]",
  },
  {
    id: 2,
    title: "Design Symposium",
    date: "2025-04-02",
    category: "Academic",
    description:
      "A gathering of minds exploring the future of sustainable architecture. Keynote speakers from Zurich and Tokyo.",
    location: "Auditorium A",
    time: "01:00 PM",
    accent: "bg-[#0057FF]",
    textAccent: "text-[#0057FF]",
  },
  {
    id: 3,
    title: "Career Fair",
    date: "2025-04-18",
    category: "Professional",
    description:
      "Connect with top-tier studios and agencies. Bring your portfolio and network with alumni working in the field.",
    location: "Student Union",
    time: "10:00 AM",
    accent: "bg-[#1A1A1A]",
    textAccent: "text-[#1A1A1A]",
  },
];
