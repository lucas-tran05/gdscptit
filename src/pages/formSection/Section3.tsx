import { useState } from "react";

interface FormData {
    fullName: string;
    stuId: string;
    gender: string;
    email: string;
    phone: string;
    facebook: string;
    birthDate: string;
    school: string;
    major: string;
    isStudent: string;
    admissionYear: string;
    questions: string[];
    clubQuestion: string;
}

export function Section3() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        stuId: "",
        gender: "",
        email: "",
        phone: "",
        facebook: "",
        birthDate: "",
        school: "",
        major: "",
        isStudent: "",
        admissionYear: "",
        questions: Array(10).fill(""),
        clubQuestion: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: target.checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...formData.questions];
        newQuestions[index] = value;
        setFormData({ ...formData, questions: newQuestions });
    };

    const handleSubmit = () => {
        console.log(formData);
        alert("Đăng ký thành công!");
    };

    const questions = [
        {
            question: "Khi làm việc, bạn thường:",
            options: [
                "Muốn đạt kết quả nhanh nhất",
                "Muốn truyền cảm hứng cho mọi người",
                "Muốn giữ sự ổn định, ít thay đổi",
                "Muốn mọi việc chính xác, đúng quy trình"
            ]
        },
        {
            question: "Trong giao tiếp, bạn:",
            options: [
                "Trực tiếp, thẳng thắn",
                "Nhiệt tình, vui vẻ",
                "Nhẹ nhàng, lắng nghe nhiều hơn",
                "Lịch sự, cẩn trọng trong lời nói"
            ]
        },
        {
            question: "Khi gặp vấn đề, bạn thường:",
            options: [
                "Tìm cách giải quyết ngay lập tức",
                "Hỏi ý kiến và bàn bạc cùng người khác",
                "Giữ bình tĩnh và kiên nhẫn",
                "Phân tích chi tiết trước khi quyết định"
            ]
        },
        {
            question: "Bạn muốn người khác nhìn nhận mình là:",
            options: [
                "Người mạnh mẽ, quyết đoán",
                "Người thân thiện, lôi cuốn",
                "Người đáng tin, ổn định",
                "Người chính xác, thông minh"
            ]
        },
        {
            question: "Trong nhóm, bạn thường:",
            options: [
                "Dẫn dắt, đưa ra quyết định",
                "Tạo không khí vui vẻ, gắn kết",
                "Hỗ trợ, lắng nghe mọi người",
                "Đưa ra số liệu, phân tích rõ ràng"
            ]
        },
        {
            question: "Bạn dễ cảm thấy khó chịu khi:",
            options: [
                "Người khác chậm chạp, thiếu quyết đoán",
                "Mọi thứ buồn tẻ, không có sự tương tác",
                "Có nhiều thay đổi đột ngột",
                "Công việc thiếu trật tự, sai sót"
            ]
        },
        {
            question: "Động lực lớn nhất trong công việc của bạn là:",
            options: [
                "Quyền lực, thành tích",
                "Mối quan hệ, sự công nhận",
                "Sự ổn định, an toàn",
                "Chất lượng, độ chính xác"
            ]
        },
        {
            question: "Khi gặp áp lực, bạn có xu hướng:",
            options: [
                "Càng quyết liệt hơn để giải quyết",
                "Tìm người chia sẻ và động viên",
                "Giữ bình tĩnh, tránh xung đột",
                "Kiểm tra lại chi tiết nhiều lần"
            ]
        },
        {
            question: "Điều bạn coi trọng nhất ở người khác là:",
            options: [
                "Sự quyết đoán, dứt khoát",
                "Sự cởi mở, thân thiện",
                "Sự chân thành, kiên nhẫn",
                "Sự chuẩn mực, logic"
            ]
        },
        {
            question: "Nếu mô tả bản thân bằng một từ, bạn sẽ chọn:",
            options: [
                "Lãnh đạo",
                "Truyền cảm hứng",
                "Hòa hợp",
                "Nguyên tắc"
            ]
        }
    ];

    return (
        <div className="py-8 px-4">
            <div className="max-w-6xl mx-auto border-2 border-gdsc-primary-blue p-8 rounded-2xl shadow-lg space-y-8">
                {/* Personal Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Họ và tên: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Mã sinh viên: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="stuId"
                            value={formData.stuId}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Giới tính: <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Nam</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Email cá nhân: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Số điện thoại: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Link Facebook: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Ngày sinh: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            placeholder="mm/dd/yyyy"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Trường đang học: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Chuyên ngành: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Bạn là sinh viên: <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="isStudent"
                            value={formData.isStudent}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Chọn</option>
                            <option value="yes">Có</option>
                            <option value="no">Không</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Bạn ứng tuyển: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="admissionYear"
                            value={formData.admissionYear}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Questions Section */}
                <div className="space-y-6">
                    {questions.map((q, idx) => (
                        <div key={idx} className="space-y-3">
                            <p className="text-sm font-medium text-gray-700">
                                {idx + 1}. {q.question}
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {q.options.map((option, optIdx) => (
                                    <label key={optIdx} className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={`question-${idx}`}
                                            value={String.fromCharCode(65 + optIdx)} // A, B, C, D
                                            checked={formData.questions[idx] === String.fromCharCode(65 + optIdx)}
                                            onChange={() => handleQuestionChange(idx, String.fromCharCode(65 + optIdx))}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-0.5 flex-shrink-0"
                                        />
                                        <span className="text-sm text-gray-700">
                                            {String.fromCharCode(65 + optIdx)}. {option}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Club Question Section */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Câu hỏi dành cho CLB:
                    </label>
                    <textarea
                        name="clubQuestion"
                        value={formData.clubQuestion}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Nhập câu trả lời của bạn..."
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Đăng ký ngay
                    </button>
                </div>
            </div>
        </div>
    );
}