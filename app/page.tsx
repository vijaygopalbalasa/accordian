"use client";
import Image from 'next/image'
import desktopImg from '@/src/assets/images/background-pattern-desktop.svg';
import mobileImg from '@/src/assets/images/background-pattern-mobile.svg';
import star from '@/src/assets/images/icon-star.svg';
import Accordion from '@/app/components/Accordion';
import { faqs } from './data';

export default function Home() {

  return <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
    <BackgroundImage />

    <section className="relative bg-white transition-all mx-auto max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 p-5 mt-40 sm:mt-24">
      <h1 className="flex gap-3 items-center">
        <Image src={star} alt="star-icon" className="h-6 w-auto" />
        <span className="font-bold text-4xl">FAQs</span>
      </h1>
      <div className="flex flex-col gap-4 divide-y">
        {faqs.map((d, i) => (
          <Accordion
            answer={d.answer}
            question={d.question}
            isAccordianOpen={d.isAccordianOpen}
            key={i} />
        ))}


      </div>

    </section>
  </main>
}

function BackgroundImage() {
  return <div className="w-full h-auto absolute top-0 left-0">
    <Image src={desktopImg}
      alt="desktop-bg"
      className="w-full h-full object-cover hidden md:block" />

    <Image src={mobileImg}
      alt="mobile-bg"
      className="w-full h-full object-cover md:hidden" />
  </div>
}