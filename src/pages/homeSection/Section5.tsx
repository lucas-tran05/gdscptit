import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import com1 from "@/assets/home/section2/1.png";
import com2 from "@/assets/home/section2/14.png";

export function Section5() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "tech", label: "TECH", description: "Ban Công nghệ chịu trách nhiệm phát triển và duy trì các hệ thống công nghệ thông tin của công ty, bao gồm website, ứng dụng di động, và các giải pháp số hóa khác." },
    { id: "hr-lg", label: "HR-LG", description: "Ban Nhân sự - Pháp lý đảm nhiệm công tác tuyển dụng, đào tạo, phát triển nhân sự và xử lý các vấn đề pháp lý của công ty." },
    { id: "design", label: "DESIGN", description: "Ban Thiết kế sáng tạo và thực hiện các ý tưởng thiết kế cho sản phẩm, dịch vụ, và các chiến dịch marketing của công ty." },
    { id: "pr", label: "PR", description: "Ban Quan hệ công chúng chịu trách nhiệm xây dựng và duy trì hình ảnh tích cực của công ty với khách hàng và đối tác." },
    { id: "media", label: "MEDIA", description: "Ban Truyền thông quản lý các kênh truyền thông, sản xuất nội dung và thực hiện các chiến lược marketing số." },
  ];

  const memberBenefits = [
    "Cảm thấy rất vui khi được trở thành một thành viên của GDG OC.",
    "Tự hào với những thành công của các bộ phận trong GDG OC PTIT.",
    "Được học hỏi nhiều điều mới, mở rộng mối quan hệ và phát triển bản thân.",
    "Cảm ơn GDG OC PTIT đã đồng hành cùng mình trong 2 năm đầu đại học.",
    "Sẽ tiếp tục gắn bó, đồng hành và cống hiến cho CLB khi cần.",
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
  <div className="relative max-w-7xl mx-auto p-6 bg-white">
    {/* Header */}
    <div className="relative text-center mb-8 z-60">
      <h1 className="text-3xl md:text-4xl font-bold text-gdsc-primary-red mb-6">
        Trở thành 1 thành viên của
        <br />
        GDG on Campus: PTIT ngay!
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 text-lg md:text-base ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Selected Category Description */}
        {selectedCategoryData && (
          <motion.div
            key={selectedCategoryData.id}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-4 bg-blue-50 rounded-lg"
          >
            <h3 className="font-semibold text-blue-700 mb-2 text-2xl">
              {selectedCategoryData.label}
            </h3>
            <p className="text-gray-700 text-lg">
              {selectedCategoryData.description}
            </p>
          </motion.div>
        )}
    </div>

    {/* Member Benefits Section */}
    <motion.div
      className="relative bg-blue-50 rounded-lg p-6 mb-8 z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 text-center mb-6">
        QUYỀN LỢI THÀNH VIÊN
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {memberBenefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {memberBenefits.slice(3).map((benefit, index) => (
            <div key={index + 3} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Registration Button */}
    <div className="relative text-center z-10">
      <motion.button
        className="bg-gdsc-primary-blue hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg cursor-pointer text-lg md:text-xl"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/form")}
      >
        ĐĂNG KÝ THAM GIA
      </motion.button>
    </div>

    {/* Floating Images behind */}
    <motion.img
      src={com1}
      alt="Community 1"
      className="absolute bottom-0 -left-25 w-56 md:w-72 z-0"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.img
      src={com2}
      alt="Community 2"
      className="absolute top-0 -right-10 md:right-0 w-40 md:w-52 z-50"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

}
