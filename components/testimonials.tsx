import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Class of 2023",
    // Make sure this image exists in your `public` folder
    image: "/portrait-professional.jpg",
    text: "Yeti International College transformed my academic journey. The supportive community and exceptional faculty made all the difference.",
  },
  {
    name: "Marcus Johnson",
    role: "Engineering Student",
    // Make sure this image exists in your `public` folder
    image: "portrait-male-student.jpg",
    text: "The hands-on projects and internship opportunities prepared me perfectly for my career in tech.",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Graduate",
    // Make sure this image exists in your `public` folder
    image: "portrait-young-woman.jpg",
    text: "The networking opportunities and mentorship programs were invaluable for launching my entrepreneurial venture.",
  },
  {
    name: "David Kim",
    role: "Medical Student",
    // Make sure this image exists in your `public` folder
    image: "professional-man-portrait.png",
    text: "The rigorous curriculum and access to research facilities set me up for success in medical school.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-slate-900">
            Student Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from our students about their transformative experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 h-full flex flex-col"
            >
              <div className="absolute top-4 right-4 w-1 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <p className="text-slate-700 mb-6 italic flex-1 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {/* --- FIX: Replaced the initial div with an img tag --- */}
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
