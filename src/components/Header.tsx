import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo1 from "@/assets/logo-1.svg";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { name: "Trang chủ", path: "/", type: "route" },
    { name: "Tuyển thành viên", path: "/form", type: "route" },
    { name: "Chat bot hỏi đáp", path: "/chatbot", type: "route" }
    // { name: "Giới thiệu", path: "about", type: "scroll" } // ví dụ scroll
  ];

  const linkClass = (active: boolean) =>
    `cursor-pointer hover:text-gdsc-primary-blue ${
      active ? "text-gdsc-primary-blue font-semibold" : "text-gray-600"
    }`;

  const renderNavItem = (item: typeof navItems[number], isMobile = false) => {
    const active = item.type === "route" && pathname === item.path;

    if (item.type === "route") {
      return (
        <Link
          key={item.name}
          to={item.path}
          className={linkClass(active)}
          onClick={() => isMobile && setIsOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <ScrollLink
        key={item.name}
        to={item.path}
        smooth={true}
        duration={600}
        offset={-80}
        className={linkClass(false)}
        onClick={() => isMobile && setIsOpen(false)}
      >
        {item.name}
      </ScrollLink>
    );
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow fixed top-0 left-0 right-0 z-[9999]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo1}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10 font-bold">
        {navItems.map((item) => renderNavItem(item))}
      </nav>

      {/* Actions (desktop) */}
      <div className="hidden md:block">
        <button
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary-blue text-white hover:bg-gdsc-primary-blue/80"
          onClick={() => navigate("/form")}
        >
          Đăng ký ngay
          <FaArrowRight />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-6 py-6 font-bold md:hidden">
          {navItems.map((item) => renderNavItem(item, true))}

          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary-blue text-white hover:bg-gdsc-primary-blue/80"
            onClick={() => {
              navigate("/form");
              setIsOpen(false);
            }}
          >
            Đăng ký ngay
            <FaArrowRight />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
