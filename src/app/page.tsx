import Hero from "@/components/Hero";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-start">
      <Loader />
      <Hero />
    </div>
  );
}
