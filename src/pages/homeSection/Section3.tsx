import { motion } from "framer-motion"
import img1 from '@/assets/home/section3/img-1-s3-min.png'
import img2 from '@/assets/home/section3/img-2-s3-min.png'
import img3 from '@/assets/home/section3/img-3-s3-min.png'
import img4 from '@/assets/home/section3/img-4-s3-min.png'

export function Section3() {
  const contentItems = [
    {
      id: 1,
      title: "We Learn",
      description: "Ở GDG on Campus: PTIT, học tập là hành động. Thay vì chỉ lắng nghe, bạn sẽ được bắt tay vào làm, được thử nghiệm và sai sót trong một môi trường an toàn. Nắm vững công nghệ mới qua các dự án chuyên sâu, biến ý tưởng thành sản phẩm và học hỏi từ chính những thử thách thực tế là cách bạn sẽ tiến bộ tại đây.",
      color: "text-blue-500",
      img: img1,
    },
    {
      id: 2,
      title: "We Share",
      description: "GDG on Campus: PTIT tin rằng giá trị của kiến thức nằm ở sự lan tỏa. Một văn hóa cởi mở được xây dựng, nơi mọi góc nhìn đều được tôn trọng và bất kỳ ai cũng có thể là người chia sẻ. Qua việc chia sẻ, bạn không chỉ giúp cộng đồng cùng phát triển mà còn củng cố kiến thức và xây dựng sự tự tin.",
      color: "text-red-500",
      img: img2,
    },
    {
      id: 3,
      title: "We Grow",
      description: "GDG on Campus: PTIT mở ra cánh cửa đến với một mạng lưới kết nối rộng lớn và giá trị. Đây không chỉ là nơi bạn tìm thấy những người bạn cùng chung đam mê, mà còn là cơ hội gặp gỡ các chuyên gia, diễn giả và tiếp cận cộng đồng Google Developer toàn cầu. ",
      color: "text-green-500",
      img: img3,
    },
    {
      id: 4,
      title: "We Connect",
      description: "Learn, Share, và Connect chính là ba mảnh ghép tạo nên sự trưởng thành toàn diện tại GDG on Campus: PTIT. GDG on Campus: PTIT sẽ là bệ phóng để biến tiềm năng của bạn thành những thành tựu thực sự, ghi dấu ấn trong hành trình sinh viên của mình.",
      color: "text-yellow-500",
      img: img4,
    },
  ]

  return (
    <section className="relative flex items-center justify-center px-4 py-12">
      {/* Background decorative circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-20 h-20 bg-yellow-200 rounded-full opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-28 h-28 bg-green-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-20">
        {contentItems.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={item.id}
              className="flex flex-col lg:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {isEven ? (
                <>
                  <div className="flex-1 flex flex-col items-start order-2 lg:order-1">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                      {item.title.split(" ")[0]}{" "}
                      <span className={item.color}>{item.title.split(" ")[1]}</span>
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-2xl text-left">
                      {item.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex-1 order-1 lg:order-2 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-4xl object-cover aspect-square w-95 shadow-lg"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="flex-1 order-1 lg:order-1 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-4xl object-cover aspect-square w-95 shadow-lg"
                    />
                  </motion.div>
                  <div className="flex-1 flex flex-col items-start order-2 lg:order-2">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                      {item.title.split(" ")[0]}{" "}
                      <span className={item.color}>{item.title.split(" ")[1]}</span>
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-2xl text-left">
                      {item.description}
                    </p>
                  </div>
                </>
              )}

            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
