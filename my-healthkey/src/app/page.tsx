import { Style } from "util"
import { Header } from "./_components/header"
import {Hero} from "./_components/hero"
import { HeroCarousel } from "./_components/heroCarousel"

export default function Home(){
  return(
    <main style={{ backgroundColor: "#F8F9FA" }}>
      <Header />
      <Hero />
      <HeroCarousel />
      
    </main>
  )
}