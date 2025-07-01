'use client';

import { useParams } from 'next/navigation';
import Hero from "@/components/Hero";
import homepageIt from '@/locales/homepage.json';
import homepageEn from '@/locales/homepage-en.json';

const homepageDataMap = {
  it: homepageIt.homepage,
  en: homepageEn.homepage,
};

export default function Home() {
  const params = useParams();
  const currentLang = params.locale || 'it';
  const heroData = homepageDataMap[currentLang];

  if (!heroData) {
    return <div className="container py-8">Errore: dati homepage non trovati per la lingua {currentLang}</div>;
  }

  return (
    <div className="flex text-blue items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-alexandria-sans)]">
      <Hero data={heroData} />
    </div>
  );
}
