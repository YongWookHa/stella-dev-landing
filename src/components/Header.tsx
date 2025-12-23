import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/assets/stella-dev-logo.png" 
                alt="Stella Dev Logo" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold tracking-tighter text-white">
                STELLA DEV
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}