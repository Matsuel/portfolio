import Title from "@/components/ui/Title";
import useMouseMove from "@/hooks/useMouseMove";
import useMouseLeave from "@/hooks/useMouveLeave";
import Sleep from "@/components/home/Sleep";
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
import useSection from "@/hooks/useSection";
import Loader from "@/components/Loader";
import useLoading from "@/hooks/useLoading";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  const { loading } = useLoading();
  const { handleMouseEnter, handleMouseLeave, isMouseLeave } = useMouseLeave();

  const { isMouseMove } = useMouseMove()

  useSection()

  return (
    <div className="w-full bg-background flex min-h-screen p-8 pb-20 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading ? <Loader /> : null}
      {!isMouseMove || isMouseLeave ? <Sleep /> : null}
      <div
        className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out ${!isMouseMove || isMouseLeave ? "opacity-10" : "opacity-100"}`}
      >
        <Title title={siteName} />
        <Cursor />
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
    </div>
  );
}
