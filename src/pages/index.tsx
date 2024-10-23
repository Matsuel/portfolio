import BlurIn from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Utils from "@/components/Utils";
import useMouseMove from "@/hooks/useMouseMove";
import useMouseLeave from "@/hooks/useMouveLeave";
import Skills from "@/components/Skills";

export default function Home() {

  // const { handleMouseEnter, handleMouseLeave, isMouseLeave } = useMouseLeave();

  const { isMouseMove } = useMouseMove()

  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 bg-background relative ${!isMouseMove ? "opacity-10" : "opacity-100"} transition-opacity duration-700 ease-in-out`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Title title="Matheo Lang" />
      {/* <Cursor /> */}
      <Navbar />

      <BlurIn word="Matheo Lang" />


      <Skills />


      <Utils />

    </div>
  );
}
