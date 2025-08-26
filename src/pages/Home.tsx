import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Section1 } from "@/pages/homeSection/Section1"
import { Section2 } from "@/pages/homeSection/Section2"
import { Section3 } from "@/pages/homeSection/Section3"
import { Section4 } from "@/pages/homeSection/Section4"
export default function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  )
}
