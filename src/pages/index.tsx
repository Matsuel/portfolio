import BlurIn from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Utils from "@/components/Utils";
import useMouseMove from "@/hooks/useMouseMove";
import useMouseLeave from "@/hooks/useMouveLeave";
import Skills from "@/components/Skills";
import Sleep from "@/components/Sleep";

export default function Home() {

  const { handleMouseEnter, handleMouseLeave, isMouseLeave } = useMouseLeave();

  const { isMouseMove } = useMouseMove()

  return (
    <div className="w-full bg-background flex min-h-screen p-8 pb-20 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {!isMouseMove || isMouseLeave ? <Sleep /> : null}
      <div
        className={`w-full flex flex-col items-center justify-start p-8 gap-16 ${!isMouseMove || isMouseLeave ? "opacity-10" : "opacity-100"} transition-opacity duration-700 ease-in-out`}
      >
        <Title title="Matheo Lang" />
        {/* <Cursor /> */}
        <Navbar />

        <BlurIn word="Matheo Lang" />


        <Skills />


        <Utils />

      </div>
    </div>
  );
}
