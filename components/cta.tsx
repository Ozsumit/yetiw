export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">
          Ready to Join Us?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
          Take the first step toward your future with a world-class education at
          Yeti International College
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Application
          </button>
          <button className="px-10 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm">
            Request Information
          </button>
        </div>
      </div>
    </section>
  );
}
