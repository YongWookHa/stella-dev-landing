import type { Metadata } from "next";
import { Nanum_Gothic_Coding } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Background from '@/components/Background';
import "../globals.css";

const nanumGothicCoding = Nanum_Gothic_Coding({
  variable: "--font-nanum-gothic-coding",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Stella Dev",
  description: "Stella Dev is a technology company that solves problems through innovative solutions. The project serves as the primary web presence showcasing the company's services, expertise, and contact information.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Make sure to populate the request locale for static rendering
  setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${nanumGothicCoding.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Background />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
