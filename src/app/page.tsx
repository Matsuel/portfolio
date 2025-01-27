import React from 'react'
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Navbar from '@/components/Navbar';
import MenuIcon from '@/components/Navbar/MenuIcon';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto gap-20">
      <MenuIcon />
      <Navbar />
      <Hero />
      {/* <Loader /> */}
    </div>
  );
}
