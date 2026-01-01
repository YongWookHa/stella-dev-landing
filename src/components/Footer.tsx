import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="contact" className="bg-black text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">{t('companyName')}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              {t('mission')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold text-white">{t('email')}</span> support@stella-dev.org
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">{t('services')}</h4>
            <div className="space-y-4">
              <a
                href="https://slur.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('slurFooter')}
              </a>
              <a
                href="https://abohaeng.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('abohaengFooter')}
              </a>
              <a
                href="https://day100.stella-dev.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {t('day100Footer')}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} StellaDev. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}