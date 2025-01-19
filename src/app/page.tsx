import React from 'react'
import CircleProgress from '@/components/Ui/CircleProgress';
import Hour from '@/components/Ui/Hour';
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Projets from '@/components/sections/Projets';
import Navbar from '@/components/Navbar';
import MenuIcon from '@/components/Navbar/MenuIcon';
import Parcours from '@/components/sections/Parcours';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto gap-20">
      <MenuIcon />
      <Navbar />
      <CircleProgress />
      <Hour />
      <Hero />
      {/* <Loader />
      <Projets />
      <Parcours />
      <Services />
      <Contact /> */}
    </div>
  );
}
