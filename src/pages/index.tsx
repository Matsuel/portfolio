import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Utils from "@/components/Utils";

export default function Home() {

  return (
    <div className={`flex flex-col items-center justify-start min-h-screen h-[150vh] p-8 pb-20 gap-16 bg-background relative`}>

      <Title title="Matheo Lang" />
      <Cursor />
      <Navbar />


      <Utils />
     
    </div>
  );
}
