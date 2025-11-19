import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const news = [
  {
    title: "Westfield Wins National Research Award",
    date: "March 10, 2024",
    description:
      "Our climate research team recognized for groundbreaking sustainability initiative",
    image: "/research-award-celebration.jpg",
    tag: "Achievement",
  },
  {
    title: "New Innovation Hub Inaugurated",
    date: "March 5, 2024",
    description:
      "State-of-the-art facility opens to support student entrepreneurship",
    image: "/modern-technology-center-opening.jpg",
    tag: "Campus",
  },
  {
    title: "Alumni Spotlight: From Campus to CEO",
    date: "February 28, 2024",
    description:
      "Hear how Yeti International College prepared our graduate for leadership success",
    image: "/corporate-professional-portrait.jpg",
    tag: "Alumni",
  },
];

export default function News() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-slate-900">
            Latest News
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with what's happening at our academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-lg">
                  {item.tag}
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <button className="text-blue-600 font-semibold inline-flex items-center gap-2 group/btn hover:gap-3 transition-all">
                  Read more{" "}
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
