import React from 'react'
import Theme from "@/components/Theme";
import CircleProgress from '@/components/CircleProgress';
import Hour from '@/components/Hour';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import Projets from '@/components/sections/Projets';
import Navbar from '@/components/Navbar';

export default function Home() {

  return (
    <div className="w-full bg-background flex flex-col h-auto p-8 pb-20 gap-20">
      <Navbar />
      <Loader />
      <Theme />
      <CircleProgress />
      <Hour />
      <Hero />
      <Projets />
    </div>
  );
}
