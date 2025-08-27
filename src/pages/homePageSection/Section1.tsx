import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import gdgocLogo from "@/common/elemets/gdgoc-gen4.svg"
import circleBlue from "@/common/elemets/circle-blue.svg"
import circleYellow from "@/common/elemets/circle-yellow.svg"
import fanGreen from "@/common/elemets/fan-green.svg"
import flagRed from "@/common/elemets/flag-red.svg"
import flagBlue from "@/common/elemets/flag-blue.svg"
import flagGreen from "@/common/elemets/flag-green.svg"

import imgRoot from "@/assets/home/section3/img-2-s3-min.png";

export function Section1() {
    const letters = [
        { char: "G", color: "text-blue-500" },
        { char: "o", color: "text-red-500" },
        { char: "o", color: "text-yellow-500" },
        { char: "g", color: "text-blue-500" },
        { char: "l", color: "text-green-500" },
        { char: "e", color: "text-red-500" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center px-4 py-18 md:py-24 mt-12"
        >
            {/* Background decorative circles */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-32 left-20 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-20 right-32 w-28 h-28 bg-green-200 rounded-full opacity-20"></div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-30"
                />
            </div>
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex flex-col lg:flex-row items-center justify-start gap-4 md:gap-24 mb-18">
                    <div className="flex-1">
                        <img src={gdgocLogo} alt="GDG OC Logo" className="mx-auto" />
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="text-gray-500 text-lg md:text-2xl font-bold">Powered by</span>
                            <div className="flex items-center">
                                {letters.map((l, i) => (
                                    <motion.span
                                        key={i}
                                        className={`${l.color} text-lg md:text-2xl font-bold inline-block`}
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                    >
                                        {l.char}
                                    </motion.span>
                                ))}
                            </div>
                            <span className="text-gray-500 text-lg md:text-2xl font-bold">for Developers</span>
                        </div>
                        <div className="flex items-center justify-center gap-4 w-full">
                            <button
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gdsc-primary-red text-white font-bold border-2 border-gdsc-primary-red 
      hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] cursor-pointer"
                                onClick={() => (window.location.href = '/form')}
                            >
                                Tìm hiểu thêm
                            </button>

                            <button
                                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-200 text-gdsc-primary-blue font-bold border-2 border-gdsc-primary-blue 
      hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] cursor-pointer"
                                onClick={() => (window.location.href = '/form')}
                            >
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center mt-12 p-4">
                        {/* Ảnh chính */}
                        <div className="relative border-4 border-gdsc-primary-green rounded-2xl overflow-hidden z-100">
                            <img
                                src={imgRoot}
                                alt="Hero Illustration"
                                className="w-full max-w-lg mx-auto object-cover"
                            />
                        </div>

                        {/* Fan xanh trên trái (quay thuận) */}
                        <motion.img
                            src={fanGreen}
                            alt="Fan Green"
                            className="absolute -top-10 -left-2 w-26 h-26 z-1000"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Gear vàng dưới trái (quay NGƯỢC) */}
                        <motion.img
                            src={circleYellow}
                            alt="Gear Yellow"
                            className="absolute -bottom-10 left-0 w-20 h-20"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Gear xanh dưới phải (quay thuận) */}
                        <motion.img
                            src={circleBlue}
                            alt="Gear Blue"
                            className="absolute -bottom-10 -right-10 w-40 h-40"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                    </div>
                </div>

                {/* Timeline */}
                <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-28">
                    {[
                        {
                            img: flagGreen,
                            date: "04/09 - 11/09",
                            text: "Vòng Đơn",
                            color: "green",
                            rotation: 10
                        },
                        {
                            img: flagRed,
                            date: "13/09 - 14/09",
                            text: "Phỏng vấn",
                            color: "red",
                            rotation: -10
                        },
                        {
                            img: flagBlue,
                            date: "20/09 - 05/11",
                            text: "Thử việc",
                            color: "blue",
                            rotation: 10
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex-1 flex md:flex-col items-center justify-center group cursor-pointer my-4 md:my-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Mobile: zig-zag layout theo index */}
                            <div
                                className={`flex w-full items-center justify-center gap-4 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    } md:flex-row`}
                            >
                                <img
                                    src={item.img}
                                    alt={`Flag ${item.color}`}
                                    className="w-24 object-cover"
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`text-gdsc-primary-${item.color} font-bold text-lg md:text-2xl my-2`}
                                    >
                                        {item.date}
                                    </p>
                                    <motion.p
                                        className={`text-lg md:text-2xl font-bold px-12 py-3 bg-${item.color}-200 border-2 border-gdsc-primary-${item.color} rounded-4xl`}
                                        whileHover={{ rotate: item.rotation }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        {item.text}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}
