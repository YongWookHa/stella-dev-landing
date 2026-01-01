import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Think from '@/components/Think';
import Build from '@/components/Build';
import Innovate from '@/components/Innovate';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Think />
        <Build />
        <Innovate />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
