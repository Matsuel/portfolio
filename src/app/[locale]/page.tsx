import React from 'react'
import Hero from '@/components/Sections/Hero';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import NavbarMenu from '@/components/Navbar/NavbarMenu';
import LangSelector from '@/components/Lang';
import Socials from '@/components/Socials';
import ProgressScroll from '@/components/Ui/ProgressScroll';
import Services from '@/components/Sections/Services';
import Contact from '@/components/Sections/Contact';
import Projets from '@/components/Sections/Projets';

export default function Home() {

  return (
    <div className="w-full h-full bg-background flex flex-col">
      <LangSelector />
      <Socials />
      <NavbarMenu />
      <Navbar />
      <ProgressScroll />
      <Hero />
      <Services />
      {/* <Services />
      <Projets />
      <Contact />
      <Loader /> */}
    </div>
  );
}
