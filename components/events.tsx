import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const events = [
  {
    title: 'Open Campus Day',
    date: 'March 15, 2024',
    description: 'Join us for a campus tour and meet our faculty and students',
    accent: 'primary'
  },
  {
    title: 'Research Symposium',
    date: 'April 2, 2024',
    description: 'Explore groundbreaking research projects from our students',
    accent: 'secondary'
  },
  {
    title: 'Career Fair',
    date: 'April 18, 2024',
    description: 'Connect with leading employers and explore job opportunities',
    accent: 'accent'
  },
]

export default function Events() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-slate-900">
            Upcoming Events
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Be part of our vibrant campus community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg z-10">
                {event.date.split(' ')[0]} {event.date.split(' ')[1]}
              </div>
              
              <div className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>
                
                <button className="text-blue-600 font-semibold inline-flex items-center gap-2 group/btn hover:gap-3 transition-all">
                  Learn more <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
