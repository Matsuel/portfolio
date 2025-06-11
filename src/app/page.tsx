import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/loader";
import NavbarButton from "@/components/navbar/Button";
import Navbar from "@/components/navbar/Navbar";
import Parcours from "@/components/Parcours";
import Projets from "@/components/Projets";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <NavbarButton />
      {/* <Loader /> */}
      <Navbar />
      <Hero />
      <Parcours />
      <Projets />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

// https://21st.dev/shadcnblockscom/faq-5/default
// Arreter de décomposer les objets envoyer ...props
// Partir sur un design avec du transparent neomorphism et glassmorphism
