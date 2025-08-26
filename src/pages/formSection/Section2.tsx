import { FaArrowRight, FaCloud, FaBullhorn, FaPaintBrush, FaUserFriends, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
    { title: "Tech", desc: "Được đào tạo các kiến thức về cloud, mạng, hệ điều hành Linux...", icon: <FaCloud className="text-white w-6 h-6" />, color: "bg-blue-500" },
    { title: "NonTech - PR", desc: "Phát triển kỹ năng PR, marketing, truyền thông...", icon: <FaBullhorn className="text-white w-6 h-6" />, color: "bg-red-500" },
    { title: "NonTech - Design", desc: "Được đào tạo các kiến thức về thiết kế, UX/UI...", icon: <FaPaintBrush className="text-white w-6 h-6" />, color: "bg-yellow-400" },
    { title: "NonTech - HR - LG", desc: "Kỹ năng quản lý, HR, leadership...", icon: <FaUserFriends className="text-white w-6 h-6" />, color: "bg-green-500" },
    { title: "NonTech - Media", desc: "Kỹ năng media, content, truyền thông...", icon: <FaCamera className="text-white w-6 h-6" />, color: "bg-purple-500" },
];

const benefits = [
    "Gia tăng thương hiệu cá nhân.",
    "Được truy cập vào nguồn tài nguyên Google for Developers.",
    "Nhận quà tặng từ Google và Google for Developers.",
    "Mở rộng mối quan hệ.",
    "Phát triển đều về kỹ năng chuyên môn và kỹ năng mềm.",
    "Tiếp cận các cơ hội học tập, làm việc, các cuộc thi, sự kiện liên quan.",
    "Môi trường làm việc chuyên nghiệp, năng động, hòa đồng.",
    "Nhận certificate."
];

export function Section2() {
    return (
        <section className="relative flex items-center justify-center px-4 py-12">
            {/* Background decorative circles */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-20" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute bottom-32 left-20 w-20 h-20 bg-yellow-200 rounded-full opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute bottom-20 right-32 w-28 h-28 bg-green-200 rounded-full opacity-20" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            </div>

            <div className="max-w-6xl mx-auto text-center">
                {/* first row */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-8">
                    {cards.slice(0, 3).map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl cursor-pointer relative text-left flex-1"
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${card.color}`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                            <p className="text-gray-600 text-sm">{card.desc}</p>
                            <div className="mt-4 flex items-center text-blue-500 font-medium">
                                <span>Xem thêm</span>
                                <FaArrowRight className="ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* second row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* left col: 2 cards xếp dọc */}
                    <div className="flex flex-col gap-8 lg:col-span-1">
                        {cards.slice(3, 5).map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl cursor-pointer relative text-left"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${card.color}`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                                <p className="text-gray-600 text-sm">{card.desc}</p>
                                <div className="mt-4 flex items-center text-blue-500 font-medium">
                                    <span>Xem thêm</span>
                                    <FaArrowRight className="ml-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* right col: benefit chiếm 2/3 width */}
                    <div className="lg:col-span-2">
                        <motion.div
                            className="bg-white h-full rounded-2xl p-6 shadow hover:shadow-xl cursor-pointer relative text-left"
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="text-left leading-relaxed">
                                <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-full mb-4">
                                    <FaArrowRight className="text-white w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Lợi ích khi tham gia GDG on Campus: PTIT</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    {benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
