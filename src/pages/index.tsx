import BlurIn from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Utils from "@/components/Utils";
import useMouseLeave from "@/hooks/useMouveLeave";

export default function Home() {

  const {handleMouseEnter, handleMouseLeave, isMouseLeave} = useMouseLeave();

  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen h-[150vh] p-8 pb-20 gap-16 bg-background relative ${isMouseLeave ? "opacity-20" : "opacity-100"} transition-opacity duration-700 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title title="Matheo Lang" />
      {/* <Cursor /> */}
      <Navbar />

      <BlurIn word="Matheo Lang" />


      <Utils />

    </div>
  );
}
