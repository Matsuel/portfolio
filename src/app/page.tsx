import React from 'react'
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Navbar from '@/components/Navbar';
import NavbarMenu from '@/components/Navbar/NavbarMenu';
import LangSelector from '@/components/Ui/LangSelector';
import Socials from '@/components/Ui/Socials';
import ProgressScroll from '@/components/Ui/ProgressScroll';
import Services from '@/components/sections/Services';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto">
      <LangSelector />
      <Socials />
      <NavbarMenu />
      <Navbar />
      <ProgressScroll />
      <Hero />
      <Services />
      <Loader />
    </div>
  );
}
