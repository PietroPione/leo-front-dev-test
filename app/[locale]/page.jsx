'use client';

import { useParams } from 'next/navigation';
import Hero from "@/components/Hero";
import homepageIt from '@/locales/homepage.json';
import homepageEn from '@/locales/homepage-en.json';
import ScrittaGrande from '@/components/ScrittaGrande';
import CardSection from '@/components/CardSection';
import Accordion from '@/components/Accordion';
import Benefici from '@/components/Benefici';

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
    <div className="text-blue min-h-screen space-y-28 ">
      <Hero data={heroData} />
      <ScrittaGrande data={heroData.primo_titolosezione} />
      <CardSection data={heroData} />
      <ScrittaGrande data={heroData.secondo_titolosezione} />
      <Benefici data={heroData.benefici} />
      <Accordion data={heroData} />
    </div>
  );
}
