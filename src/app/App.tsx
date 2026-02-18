import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { RentalInfo } from "@/app/components/RentalInfo";
import { Pricing } from "@/app/components/Pricing";
import { Locations } from "@/app/components/Locations";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main className="relative">
        <div id="hero">
          <Hero />
        </div>
        <div id="servizi">
          <RentalInfo />
        </div>
        <div id="tariffe">
          <Pricing />
        </div>
        <div id="dove-siamo">
          <Locations />
        </div>
        <div id="contatti">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}