import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import alumni1 from "@/assets/home/section3/img-1-s3-min.png"

export function Section1() {
    const testimonials = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            role: "Cựu thành viên Tech",
            comment: "Tham gia GDG on Campus giúp tôi mở rộng network, học được nhiều kiến thức thực tế và tự tin hơn với kỹ năng lập trình.",
            image: alumni1,
        },
        {
            id: 2,
            name: "Trần Thị B",
            role: "Cựu thành viên NonTech - PR",
            comment: "Môi trường năng động, thân thiện, tôi học được cách teamwork, tổ chức sự kiện và giao tiếp hiệu quả.",
            image: alumni1,
        },
        {
            id: 3,
            name: "Lê Văn C",
            role: "Cựu thành viên NonTech - Design",
            comment: "Nhờ GDG on Campus, mình có cơ hội trải nghiệm nhiều dự án thực tế, nâng cao kỹ năng design và tư duy sáng tạo.",
            image: alumni1,
        },
    ]

    return (
        <section className="relative flex items-center justify-center px-4 py-12  mt-16">
            <div className="max-w-7xl mx-auto text-center w-full">
                <h1 className="text-4xl font-bold mb-6 text-gdsc-primary-blue">Chia sẻ từ thành viên CLB</h1>
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col md:flex-row items-center md:items-start p-8 transition mb-6 gap-4 max-w-4xl mx-auto bg-blue-50 rounded-4xl">
                                {/* Avatar */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-54 h-54 rounded-full md:mr-4 mb-4 md:mb-0 object-cover"
                                />

                                {/* Text */}
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold mb-1 text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    )
}
