import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Section1 } from "@/pages/homeSection/Section1"
import { Section2 } from "@/pages/homeSection/Section2"
import { Section3 } from "@/pages/homeSection/Section3"
// import { Section4 } from "@/pages/homeSection/Section4"
import { Section5 } from "@/pages/homeSection/Section5"
import { ScrollToTop } from "@/components/ScrollToTop";
import FloatChat from '@/components/FloatChat';

import { Section1 as Section1From } from "@/pages/formSection/Section1"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      {/* Hero section */}
      <Section1 />
      <section id="about">
        <Section2 />
      </section >
      <Section3 />
      <Section1From />
      {/* <Section4 /> */}
      <Section5 />
      <Footer />
      <ScrollToTop />
      <FloatChat />

    </div>
  )
}
