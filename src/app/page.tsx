import React from 'react'
import Hero from '@/components/sections/Hero';
import Loader from '@/components/Ui/Loader';
import Navbar from '@/components/Navbar';
import NavbarMenu from '@/components/Navbar/NavbarMenu';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto">
      <NavbarMenu />
      <Navbar />
      <Hero />
      <Loader />
    </div>
  );
}
