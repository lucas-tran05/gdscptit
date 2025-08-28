import { motion } from "framer-motion"
import img1 from '@/assets/home/section3/img-1-s3-min.png'
import img2 from '@/assets/home/section3/img-2-s3-min.png'
import img3 from '@/assets/home/section3/img-3-s3-min.png'
import img4 from '@/assets/home/section3/img-4-s3-min.png'

import circleBlue from '@/common/elemets/circle-blue.svg'
import circleRed from '@/common/elemets/circle-red.svg'
import circleYellow from '@/common/elemets/circle-yellow.svg'
import circleGreen from '@/common/elemets/circle-green.svg'

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
        <motion.img
          src={circleBlue}
          alt="blue circle"
          className="absolute top-16 left-8 w-40 h-40 opacity-70"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={circleRed}
          alt="red circle"
          className="absolute top-82 right-12 w-24 h-24 opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <motion.img
          src={circleGreen}
          alt="green circle"
          className="absolute top-176 left-38 w-20 h-20 opacity-70"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={circleYellow}
          alt="yellow circle"
          className="absolute bottom-92 left-28 w-16 h-16 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={circleGreen}
          alt="green circle"
          className="absolute bottom-16 right-40 w-32 h-32 opacity-65"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-justify">
                      {item.description}
                    </p>
                  </div>
                  <motion.div
                    className="flex-1 order-1 lg:order-2 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      loading="lazy"
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
                      loading="lazy"
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
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-justify">
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
