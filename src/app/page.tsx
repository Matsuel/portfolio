import React from 'react'
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Navbar from '@/components/Navbar';
import MenuIcon from '@/components/Navbar/MenuIcon';
import HomeButton from '@/components/HomeButton';
import Projets from '@/components/sections/Projets';
import Parcours from '@/components/sections/Parcours';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto">
      <HomeButton />
      <MenuIcon />
      <Navbar />
      <Hero />
      <Projets />
      <Parcours />
      {/* <Loader /> */}
    </div>
  );
}
