import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Parcours from "@/components/Parcours";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <Background />
      <Navbar />
      <Loader />
      <Hero />
      <Parcours />
      <Services />
      <Footer />
    </div>
  );
}

// https://21st.dev/shadcnblockscom/faq-5/default