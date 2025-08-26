import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Section1 } from "./formSection/Section1"
import { Section2 } from "./formSection/Section2"
import { Section3 } from "./formSection/Section3"
export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  )
}
