import React, { useContext } from 'react'
import Title from "@/components/ui/Title";
import Education from "@/components/Education";
import { siteName } from "@/constantes/texts";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Theme from "@/components/home/Theme";
import Links from "@/components/ui/Links";
import Percentage from "@/components/ui/Percentage";
import Sidebar from "@/components/home/Sidebar";
import Hero from "@/components/sections/Hero";
import MinimalistBar from "@/components/home/MinimalistBar";
import MouseContext from '@/contexts/Mouse';

const Content = () => {
  const { isMouseLeave, isMouseMove } = useContext(MouseContext);

  return (
    <div
        className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out ${!isMouseMove || isMouseLeave ? "opacity-10" : "opacity-100"}`}
      >
        <Title title={siteName} />
        <Sidebar />
        <MinimalistBar />
        <Links />
        <Hero />
        <Education />
        <Projects />
        <Contact />
        <Theme />
        <Percentage />
      </div>
  )
}

export default Content