import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/10">
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
                StellaDev
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#think" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('think')}
            </Link>
            <Link href="#build" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('build')}
            </Link>
            <Link href="#innovate" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('innovate')}
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('services')}
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('contact')}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
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
      </div>
    </header>
  );
}