export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">STELLA DEV</h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              Our mission is to solve problems through technology.
              <br />
              Building innovative solutions for a better world.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span> support@stella-dev.org
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <div className="space-y-4">
              <a
                href="https://slur.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Slur - Classical Music Platform
              </a>
              <a
                href="https://abohaeng.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Abohaeng - AI Emotional Diary
              </a>
              <a
                href="https://day100.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Day 100 - Habit Challenge
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Stella Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}