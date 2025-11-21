import Link from "next/link";

export default function DeveloperCredit() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] text-black px-6 py-12 md:p-20 font-sans selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between">
        {/* Header / Navigation Line */}
        <header className="flex items-center justify-between border-b-2 border-black pb-6 mb-20">
          <span className="font-bold text-sm tracking-widest uppercase">
            / Credits
          </span>
          <Link
            href="/about/team"
            className="text-sm font-medium hover:line-through decoration-2 transition-all"
          >
            Close [x]
          </Link>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-8">
          {/* Large Typographic Statement */}
          <div className="lg:col-span-9">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
              Design &
              <br />
              <span className="text-zinc-400">Development.</span>
            </h1>
          </div>

          {/* Right Column: Details (Asymmetrical Balance) */}
          <div className="lg:col-span-3 flex flex-col justify-end space-y-10">
            {/* The "Swiss" Plus Sign */}
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-2xl font-light">
              +
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Crafted By
              </p>
              <p className="text-xl font-semibold block">Sumit Pokhrel</p>
              <p className="text-sm text-zinc-600">Frontend Developer</p>
              <p className="text-xl font-semibold block">Chandan Kushwaha</p>
              <p className="text-sm text-zinc-600">Backend Developer</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                Tech Stack
              </p>
              <ul className="text-sm font-mono space-y-1 border-l border-zinc-300 pl-4">
                <li>Next.js 14</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="https://instagram.com/sumitp._"
                className="inline-block border-b border-black pb-1 text-lg hover:text-zinc-500 hover:border-zinc-500 transition-colors"
              >
                Get in touch &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Footer / Timestamp */}
        <footer className="mt-20 md:mt-40 flex items-end justify-between text-xs font-mono text-zinc-400 uppercase">
          <div>Ref: 001-DEV</div>
          <div className="text-right">
            {new Date().getFullYear()} Edition
            <br />
            Kathmandu, Nepal
          </div>
        </footer>
      </div>
    </main>
  );
}
