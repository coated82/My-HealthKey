import { Style } from "util"
import { Header } from "./_components/header"
import {Hero} from "./_components/hero"
import { HeroCarousel } from "./_components/heroCarousel"
import { OpcaoA } from "./_components/opcaoA"
import { OpcaoB } from "./_components/opcaoB"
import { OpcaoC } from "./_components/opcaoC"

export default function Home(){
  return(
    <main style={{ backgroundColor: "#F8F9FA" }}>
      <Header />
      <Hero />
      <HeroCarousel />
      <OpcaoA />
      <OpcaoB />
      <OpcaoC />
      
    </main>
  )
}