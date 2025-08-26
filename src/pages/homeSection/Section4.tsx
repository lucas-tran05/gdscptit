// npm install swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import eventImg from "@/assets/home/section4/bwai.png"

export function Section4() {
  const events = [
    {
      id: 1,
      date: "17 thg 5, 2025",
      category: "Workshop / Study Group",
      title: "Build with AI: Gemini 2.0",
      image: eventImg,
    },
    {
      id: 2,
      date: "20 thg 5, 2025",
      category: "Seminar",
      title: "AI Security Trends",
      image: eventImg,
    },
    {
      id: 3,
      date: "25 thg 5, 2025",
      category: "Workshop",
      title: "Intro to Blockchain Security",
      image: eventImg,
    },
    {
      id: 4,
      date: "28 thg 5, 2025",
      category: "Study Group",
      title: "Web Exploitation Basics",
      image: eventImg,
    },
    {
      id: 5,
      date: "1 thg 6, 2025",
      category: "Hackathon",
      title: "Secure Coding Marathon",
      image: eventImg,
    },
  ]

  return (
    <section className="relative flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto text-center w-full">
        <h1 className="text-4xl font-bold mb-10">Các sự kiện</h1>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex flex-col items-center p-4 transition mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-40 h-40 object-cover rounded-full mb-4 circle"
                />
                <p className="text-gray-500 text-sm">{event.date}</p>
                <p className="font-semibold">{event.category}</p>
                <p className="text-gray-800">{event.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
