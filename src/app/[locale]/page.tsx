import React from 'react'
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import NavbarMenu from '@/components/Navbar/NavbarMenu';
import LangSelector from '@/components/Lang';
import Socials from '@/components/Socials';
import ProgressScroll from '@/components/Ui/ProgressScroll';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projets from '@/components/sections/Projets';
import Contact from '@/components/sections/Contact';

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
      <Projets />
      <Contact />
      <Loader />
    </div>
  );
}
