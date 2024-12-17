
import Content from "@/components/Content";
import Loader from "@/components/Loader";
import Clock from "@/components/home/Clock";
import useKeyPress from "@/hooks/useKeyPress";

import useLoading from "@/hooks/useLoading";
import useMouseMove from "@/hooks/useMouseMove";
import useMouseLeave from "@/hooks/useMouveLeave";
import useSection from "@/hooks/useSection";


export default function Home() {

  const { containerRef } = useMouseLeave();
  useLoading();
  useMouseMove()
  useSection()
  useKeyPress()

  return (
    <div
      className="w-full bg-background flex min-h-screen p-8 pb-20 relative"
      ref={containerRef}
    >
      <Loader />
      <Clock />
      <Content />
    </div>
  );
}
