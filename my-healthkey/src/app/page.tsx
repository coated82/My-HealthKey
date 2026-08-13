import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { HeroCarousel } from "./_components/heroCarousel";
import { OpcaoA } from "./_components/opcaoA";
import { OpcaoB } from "./_components/opcaoB";
import { OpcaoC } from "./_components/opcaoC";
import { ProdutosLista } from "./_components/produtosLista"; // ⬅️ ADICIONA
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#F8F9FA" }}>
      <Header />
      <Hero />
      <HeroCarousel />
      <ProdutosLista /> {/* ⬅️ ADICIONA AQUI */}
      <OpcaoA />
      <OpcaoB />
      <OpcaoC />
      <Footer />
    </main>
  );
}