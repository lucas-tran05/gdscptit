import { Link } from "react-router-dom";
import logo1 from "@/assets/logo-1.svg";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    const navItems = [
        { name: "Trang chủ", path: "/" },
        { name: "Về chúng tôi", path: "/about" },
        { name: "Tuyển thành viên", path: "/form" },
        { name: "Liên hệ", path: "/contact" }
    ];
    return (
        <header className="flex items-center justify-around p-4 bg-white shadow">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src={logo1} alt="Logo" className="h-10" />
            </div>

            {/* Nav */}
            <nav className="space-x-10 font-bold">
                {navItems.map((item) => (
                    <Link key={item.name} to={item.path} className="text-gray-500 hover:text-gdsc-primary">
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Actions */}
            <div>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary text-white hover:bg-gdsc-primary/80">
                    Đăng ký ngay
                    <FaArrowRight />
                </button>
            </div>
        </header>
    );
};

export default Header;
