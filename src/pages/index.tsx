import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import useMouseMove from "@/hooks/useMouseMove";
import useMouseLeave from "@/hooks/useMouveLeave";
import Sleep from "@/components/Sleep";
import Education from "@/components/Education";
import BlurIn from "@/components/BlurIn";
import TextRevealByWord from "@/components/TextReveal";
import { aboutParagraph, siteName } from "@/constantes/texts";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Theme from "@/components/Theme";
import Links from "@/components/Links";
import Percentage from "@/components/Percentage";

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
        className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out ${!isMouseMove || isMouseLeave ? "opacity-10" : "opacity-100"}`}
      >
        <Title title={siteName} />

        <Navbar />
        <Links />
        <BlurIn word={siteName} />
        <TextRevealByWord
          text={aboutParagraph}
        />
        <Education />
        <Projects />
        <Contact />
        <Theme />
        <Percentage />
      </div>
    </div>
  );
}
