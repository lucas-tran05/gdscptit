import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FaArrowRight } from "react-icons/fa"
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
      <section id="about">
        <Section2 />
      </section >
      <Section3 />
      <Section4 />
      <div className="flex items-center justify-center p-8 w-full ">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary text-white hover:bg-gdsc-primary/80 cursor-pointer">
          Đăng ký ngay
          <FaArrowRight />
        </button>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}
