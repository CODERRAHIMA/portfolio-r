import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Educations } from '@/components/sections/Educations';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Educations />
        <Contact />
      </main>
      <Footer />

      <ScrollToTop />
      <Toaster />
    </>
  );
}
