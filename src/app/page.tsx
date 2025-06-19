import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/loader";
import Navbar from "@/components/Navbar";
import Parcours from "@/components/Parcours";
import Projets from "@/components/Projets";
import ReturnButton from "@/components/ReturnButton";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <ReturnButton />
      <Background />
      <Navbar />
      {/* <Loader /> */}
      <Hero />
      <Parcours />
      {/* <Projets /> */}
      <Services />
      <Footer />
    </div>
  );
}

// https://21st.dev/shadcnblockscom/faq-5/default
// Arreter de décomposer les objets envoyer ...props
// Partir sur un design avec du transparent neomorphism et glassmorphism
// Trouver un glassmorphism plus clair et garder celui là pour le hover