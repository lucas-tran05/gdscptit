import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
            className="relative flex items-center justify-center px-4 py-32 mt-12"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-4xl font-medium text-gray-900 mb-4 leading-tight">
                    Google Developer Group
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl text-gdsc-primary font-medium mb-4">
                    Posts and Telecommunications Institute of Technology
                </h2>

                {/* Powered by Google */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <span className="text-gray-700 text-2xl">Powered by</span>
                    <div className="flex items-center">
                        {letters.map((l, i) => (
                            <motion.span
                                key={i}
                                className={`${l.color} text-2xl font-medium inline-block`}
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
                    <span className="text-gray-700 text-2xl">for Developers</span>
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-gray-800 hover:border-gray-600 hover:shadow-lg transition-all duration-300 font-medium text-lg group cursor-pointer"
                >
                    <span>ĐĂNG KÝ THAM GIA</span>
                    <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

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
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-30"
                    ></motion.div>
                </div>
            </div>
        </motion.section>
    );
}
