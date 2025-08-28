import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import cover from "@/assets/home/section1/cover.png";
import gdgocLogo from "@/assets/home/section1/16.png";

import flagRed from "@/common/elemets/flag-red.svg"
import flagBlue from "@/common/elemets/flag-blue.svg"
import flagGreen from "@/common/elemets/flag-green.svg"

export function Section1() {
    const navigate = useNavigate();
    type Color = "green" | "red" | "blue";

    const colorClasses: Record<Color, { text: string; border: string }> = {
        green: { text: "text-gdsc-primary-green", border: "border-3 border-gdsc-primary-green" },
        red: { text: "text-gdsc-primary-red", border: "border-3 border-gdsc-primary-red" },
        blue: { text: "text-gdsc-primary-blue", border: "border-3 border-gdsc-primary-blue" },
    };

    const letters = [
        { char: "G", color: "text-blue-500" },
        { char: "o", color: "text-red-500" },
        { char: "o", color: "text-yellow-500" },
        { char: "g", color: "text-blue-500" },
        { char: "l", color: "text-green-500" },
        { char: "e", color: "text-red-500" },
    ];

    const timelineData = [
        {
            img: flagGreen,
            date: "04/09 - 11/09",
            text: "Vòng Đơn",
            color: "green" as Color,
            rotation: 10
        },
        {
            img: flagRed,
            date: "13/09 - 14/09",
            text: "Phỏng vấn",
            color: "red" as Color,
            rotation: -10
        },
        {
            img: flagBlue,
            date: "20/09 - 05/11",
            text: "Thử việc",
            color: "blue" as Color,
            rotation: 10
        },
    ];

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex items-center justify-center h-auto md:min-h-screen mb-4 md:mb-12"
            >
                {/* Ảnh nền */}
                <img
                    src={cover}
                    alt="Cover"
                    loading="lazy"
                    className="absolute inset-0 object-cover w-full h-full"
                />

                {/* Overlay trắng gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/60 to-transparent"></div>

                {/* Nội dung */}
                <div className="relative z-10 flex flex-col items-center md:items-start p-8 bg-gradient-to-r from-white via-white/60 to-transparent w-full">

                    {/* Căn giữa các phần tử trong khối */}
                    <div className="flex flex-col items-center text-center">
                        <motion.img
                            src={gdgocLogo}
                            loading="lazy"
                            alt="GDG OC Logo"
                            className="max-w-[350px] md:max-w-[600px] w-full h-auto"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        <div className="flex items-center justify-center gap-2 mt-8">
                            <span className="text-gray-700 text-lg md:text-2xl font-bold">
                                Powered by
                            </span>
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
                            <span className="text-gray-700 text-lg md:text-2xl font-bold">
                                for Developers
                            </span>
                        </div>

                        {/* Button */}
                        <button
                            className="flex items-center font-bold gap-2 px-8 py-3 mt-6 text-gray-700 bg-white rounded-full border-2 cursor-pointer hover:border-gdsc-primary-blue hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                            onClick={() => navigate("/form")}
                        >
                            Đăng kí ngay <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Desktop Timeline - Horizontal (absolute positioning) */}
                <div className="hidden md:block absolute -bottom-16 left-0 right-0 z-20 w-full pb-6">
                    <div className="flex flex-row justify-center items-center gap-6">
                        {timelineData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex-1 flex flex-col items-center justify-center group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={item.img}
                                        alt={`Flag ${item.color}`}
                                        className="w-24 object-cover"
                                    />
                                    <div className="flex flex-col items-center justify-center">
                                        <p className={`${colorClasses[item.color].text} font-bold text-xl my-2`}>
                                            {item.date}
                                        </p>
                                        <motion.p
                                            className={`text-xl font-bold px-12 py-3 bg-white 
                                            ${colorClasses[item.color].text} ${colorClasses[item.color].border} 
                                            rounded-3xl shadow-md`}
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

            {/* Mobile Timeline - Separate section outside background */}
            <div className="md:hidden w-full py-8 ">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6 text-gdsc-primary-red text-center">Timeline</h1>
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
                        {timelineData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="w-full group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                {idx % 2 == 0 ? <div className="flex items-center gap-4 rounded-2xl p-4">
                                    <img
                                        src={item.img}
                                        alt={`Flag ${item.color}`}
                                        className="w-14 h-14 object-cover flex-shrink-0"
                                    />
                                    <div className="flex flex-col items-start justify-center flex-1">
                                        <p className={`${colorClasses[item.color].text} font-bold text-lg mb-1`}>
                                            {item.date}
                                        </p>
                                        <motion.p
                                            className={`text-base font-bold px-4 py-2 
                                            ${colorClasses[item.color].text} ${colorClasses[item.color].border} 
                                            rounded-xl w-full text-center`}
                                            whileHover={{ rotate: item.rotation / 3 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            {item.text}
                                        </motion.p>
                                    </div>
                                </div> : <div className="flex items-center gap-4 rounded-2xl p-4">
                                    <div className="flex flex-col items-start justify-center flex-1">
                                        <p className={`${colorClasses[item.color].text} font-bold text-lg mb-1`}>
                                            {item.date}
                                        </p>
                                        <motion.p
                                            className={`text-base font-bold px-4 py-2 
                                                ${colorClasses[item.color].text} ${colorClasses[item.color].border} 
                                                rounded-xl w-full text-center`}
                                            whileHover={{ rotate: item.rotation / 3 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            {item.text}
                                        </motion.p>
                                    </div>
                                    <img
                                        src={item.img}
                                        alt={`Flag ${item.color}`}
                                        className="w-14 h-14 object-cover flex-shrink-0"
                                    />
                                </div>}


                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}