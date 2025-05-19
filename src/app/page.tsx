import Hero from "@/components/Hero";
import Loader from "@/components/loader";
import NavbarButton from "@/components/navbar/Button";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <NavbarButton />
      {/* <Loader /> */}
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
}
