import React from 'react'
import Theme from "@/components/Theme";
import CircleProgress from '@/components/Ui/CircleProgress';
import Hour from '@/components/Ui/Hour';
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Projets from '@/components/sections/Projets';
import Navbar from '@/components/Navbar';
import MenuIcon from '@/components/Navbar/MenuIcon';
import Parcours from '@/components/sections/Parcours';
import Services from '@/components/sections/Services';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto p-8 pb-20 gap-20">
      <MenuIcon />
      <Navbar />
      {/* <Loader /> */}
      <Theme />
      <CircleProgress />
      <Hour />
      <Hero />
      <Projets />
      <Parcours />
      <Services />
    </div>
  );
}
