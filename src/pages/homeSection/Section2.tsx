import image from "@/assets/home/section2/img-section2.svg"
import com1 from "@/assets/home/section2/13.png"
import com2 from "@/assets/home/section2/14.png"
import { motion } from "framer-motion"

export function Section2() {
    return (
        <section className="relative flex items-center justify-center px-4 py-12 overflow-hidden">
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-start gap-8 mb-8">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-5xl  text-gdsc-primary-blue font-extrabold mb-6"
                        >
                            Together
                        </h2>


                        <motion.div
                            className="text-4xl font-semibold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ staggerChildren: 0.3 }}
                            variants={{
                                hidden: {},
                                visible: {}
                            }}
                        >
                            <motion.span
                                className="mr-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                We
                            </motion.span>
                            <motion.span
                                className="text-blue-500 mr-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Learn
                            </motion.span>,
                            <motion.span
                                className="text-red-500 mr-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Share
                            </motion.span>,
                            <br />
                            <motion.span
                                className="text-yellow-500 mr-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Connect
                            </motion.span>
                            and
                            <motion.span
                                className="text-green-500 ml-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                Grow
                            </motion.span>!
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            loading="lazy"
                            src={image}
                            alt="GDSC PTIT Team Photo"
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="border-2 border-gdsc-primary-blue p-6 rounded-4xl bg-blue-50 shadow-lg mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-24 px-8">
                        <div className="flex-8/12">
                            <h2 className="font-bold text-2xl mb-2 text-gdsc-primary-blue">Về Google Developer Groups</h2>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
                                Google Developer Student Clubs (GDSC viết tắt) là chương trình được Google cấp quyền tổ chức và hỗ trợ, dành cho sinh viên có niềm yêu thích CNTT nói chung và công nghệ Google nói riêng. Năm 2023, đã có hơn 1500 GDSC Lead tại hơn 100 quốc gia.
                            </p>
                        </div>
                        <div className="flex-10/12">
                            <h2 className="font-bold text-2xl mb-2 text-gdsc-primary-blue">Về GDG on Campus PTIT</h2>
                            <p className="text-gray-600  text-lg md:text-xl leading-relaxed text-justify">
                                Tháng 9/2022, GDSC-PTIT chính thức ra đời, là một chapter của GDSC tại Học viện Công nghệ Bưu chính Viễn thông. Đây là môi trường bổ ích để các thành viên có thể học tập và phát triển bản thân từ nguồn tài nguyên của Google, cùng nhau thực hiện sứ mệnh đem đến những giải pháp mang lại thay đổi tích cực cho địa phương và cộng đồng.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background floating images */}
            <motion.img
                src={com1}
                alt="Community 1"
                className="absolute bottom-0 left-0 md:left-30 w-72 h-72"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
                src={com2}
                alt="Community 2"
                className="absolute top-20 right-0 md:right-30 w-52 h-52"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    )
}
