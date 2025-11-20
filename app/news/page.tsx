"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Search,
  Clock,
  Hash,
  ChevronRight,
  Mail,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- Data ---

const categories = [
  "All",
  "Design",
  "Technology",
  "Culture",
  "Architecture",
  "Sustainability",
];

const featuredPost = {
  id: 0,
  title: "The Renaissance of Analog: Why Print Matters in a Digital Age",
  excerpt:
    "As digital saturation reaches its peak, designers and consumers alike are returning to the tactile permanence of paper. We explore the new wave of independent publishing.",
  author: "Elena Rossi",
  date: "Oct 24, 2025",
  readTime: "8 min read",
  category: "Culture",
  image:
    "https://images.unsplash.com/photo-1507842217121-9e93a586b7b0?q=80&w=2071&auto=format&fit=crop", // Abstract paper/print image
  accent: "bg-orange-500",
};

const posts = [
  {
    id: 1,
    title: "Swiss Grid Systems: A Practical Guide for Web",
    excerpt:
      "How to translate the rigorous mathematical precision of Josef Müller-Brockmann into responsive modern web layouts.",
    date: "Nov 02, 2025",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sustainable Architecture in the Alps",
    excerpt:
      "A look at the new library in Zurich that uses 100% recycled concrete and passive heating systems.",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Future of Interface Typography",
    excerpt:
      "Why variable fonts are changing the way we think about legibility and expression on screens.",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Minimalism is Not Just White Space",
    excerpt:
      "Debunking the myth that minimal design means 'empty'. It is about the intentionality of every element.",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop",
  },
];

const trending = [
  { id: 1, title: "Typography trends for 2026" },
  { id: 2, title: "Interview: Dieter Rams" },
  { id: 3, title: "Brutalism in UI: Still relevant?" },
  { id: 4, title: "Color palettes from the 60s" },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F2F2F2] text-zinc-900 py-12 px-4 md:px-8 font-sans selection:bg-zinc-900 selection:text-white">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* --- Header Area --- */}
          <div className="flex flex-col md:flex-row justify-between items-end pb-8 border-b border-zinc-300">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Editorial
              </h5>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                The
                <br />
                Journal.
              </h1>
            </div>

            {/* Search Bar */}
            <div className="mt-8 md:mt-0 w-full md:w-auto">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full md:w-80 bg-white pl-12 pr-4 py-4 rounded-full border border-zinc-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" />
              </div>
            </div>
          </div>

          {/* --- Featured Article (Hero) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
              <Card className="relative overflow-hidden border-0 bg-zinc-900 text-white rounded-[2.5rem] group cursor-pointer">
                <div className="flex flex-col md:flex-row min-h-[500px]">
                  {/* Image Half */}
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt="Featured"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-full bg-white/90 text-zinc-900 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        Featured Story
                      </span>
                    </div>
                  </div>

                  {/* Content Half */}
                  <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {featuredPost.category}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 group-hover:text-zinc-300 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-md">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold">
                        Read Full Article
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* --- Main Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Sidebar / Utility (4 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-8 order-2 lg:order-1">
              {/* Categories */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> Categories
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center
                      ${
                        activeCategory === cat
                          ? "bg-zinc-900 text-white"
                          : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:pl-6"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Text-Only List */}
              <div className="bg-transparent p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  Trending Now
                </h3>
                <ul className="space-y-6">
                  {trending.map((item, idx) => (
                    <li key={item.id} className="group cursor-pointer">
                      <span className="text-xs font-bold text-zinc-300 mr-3">
                        0{idx + 1}
                      </span>
                      <span className="text-lg font-bold text-zinc-900 leading-tight group-hover:underline decoration-2 underline-offset-4">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Mini */}
              <div className="bg-blue-600 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <Mail className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Weekly Digest</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get curated design news sent to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <input
                      className="w-full bg-blue-800/50 border border-blue-500 rounded-lg px-3 py-2 text-sm placeholder:text-blue-300 focus:outline-none"
                      placeholder="Email"
                    />
                    <button className="bg-white text-blue-600 rounded-lg p-2 hover:bg-blue-50">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feed (8 cols) */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group flex flex-col h-full border-0 bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    <CardContent className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400 mb-4">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold leading-tight text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-zinc-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 mt-auto">
                      <div className="w-full pt-6 border-t border-zinc-100 flex justify-between items-center">
                        <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors">
                          Read Article
                        </span>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination Load More */}
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-4 bg-white border border-zinc-200 rounded-full text-sm font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
