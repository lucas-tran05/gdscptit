import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import alumni1 from "@/assets/home/section3/img-1-s3-min.png"
import pointer from "@/assets/form/Section1/6.png"

export function Section1() {
    const testimonials = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            role: "Thành viên Tech",
            comment: "Tham gia GDG on Campus giúp tôi mở rộng network, học được nhiều kiến thức thực tế và tự tin hơn với kỹ năng lập trình.",
            image: alumni1,
        },
        {
            id: 2,
            name: "Trần Thị B",
            role: "Thành viên NonTech - PR",
            comment: "Môi trường năng động, thân thiện, tôi học được cách teamwork, tổ chức sự kiện và giao tiếp hiệu quả.",
            image: alumni1,
        },
        {
            id: 3,
            name: "Lê Văn C",
            role: "Thành viên NonTech - Design",
            comment: "Nhờ GDG on Campus, mình có cơ hội trải nghiệm nhiều dự án thực tế, nâng cao kỹ năng design và tư duy sáng tạo.",
            image: alumni1,
        },
    ]

    return (
        <section className="relative flex items-center justify-center px-4 py-12  mt-16">
            <div className="w-full mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 text-gdsc-primary-blue">Chia sẻ từ thành viên CLB</h1>
                <img src={pointer} loading="lazy" alt="Pointer" className="absolute z-50 top-20 md:top-10 -right-14 lg:right-52  w-36 h-36" />
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    className="relative overflow-visible"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col md:flex-row items-center md:items-start p-12 transition mb-6 gap-12 max-w-6xl mx-auto border-3 border-gdsc-primary-blue rounded-4xl">
                                {/* Text */}
                                <div className="text-center md:text-left h-full flex flex-col justify-between">
                                    <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                    <h3 className="text-xl font-bold mb-1 text-gray-800">{testimonial.name}</h3>
                                </div>
                                {/* Avatar */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-74 h-74 rounded-full md:mr-4 mb-4 md:mb-0 object-cover"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    )
}
