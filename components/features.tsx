'use client'

export default function Features() {
  const features = [
    {
      title: 'World-Class Faculty',
      description: 'Learn from renowned experts and industry leaders committed to your success',
      icon: '👨‍🎓'
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access cutting-edge laboratories, libraries, and research centers',
      icon: '🏛️'
    },
    {
      title: 'Global Community',
      description: 'Study alongside talented students from over 100 countries',
      icon: '🌍'
    },
    {
      title: 'Career Support',
      description: 'Get guidance from our career services team and industry connections',
      icon: '💼'
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-balance text-slate-900">
              Why Choose Our Academy?
            </h2>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <div className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-96 rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <img
              src="/diverse-university-students-collaborating-in-study.jpg"
              alt="Campus life"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
