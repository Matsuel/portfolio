import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar, { ContactButton } from "@/components/Navbar";
import Parcours from "@/components/Parcours";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <Background />
      <Navbar />
      <ContactButton />
      <Loader />
      <Hero />
      <Services />
      <Parcours />
      <Footer />
    </div>
  );
}

// TODO: https://21st.dev/shadcnblockscom/faq-5/default (mentions légales)
// TODO: https://vercel.com/legal/support-terms Mentions légales
// TODO: Ajout Contact
// TODO: Ajout titre et description dans le sectionLayout
// TODO: Ajout Projets
// TODO: Navbar
// TODO: Footer