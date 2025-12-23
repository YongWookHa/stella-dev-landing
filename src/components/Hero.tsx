export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-[#0a0a0a] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          <span className="text-gradient">Technology</span> <br />
          <span className="text-gray-500">Solving Problems</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto font-light">
          We build innovative solutions that make a difference in people's lives.
          Simple, elegant, and effective.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-gray-800 text-gray-300 hover:border-gray-600 hover:text-white transition-colors glass"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}