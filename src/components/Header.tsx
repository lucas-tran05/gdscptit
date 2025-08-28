import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo1 from "@/assets/logo-1.svg";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Trang chủ", path: "/", type: "route" },
    { name: "Về chúng tôi", path: "about", type: "scroll" },
    { name: "Tuyển thành viên", path: "/form", type: "route" },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow fixed top-0 left-0 right-0 z-9999">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo1} alt="Logo" className="h-10 cursor-pointer" onClick={() => (window.location.href = "/")} />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10 font-bold">
        {navItems.map((item) =>
          item.type === "route" ? (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-500 hover:text-gdsc-primary-blue"
            >
              {item.name}
            </Link>
          ) : (
            <ScrollLink
              key={item.name}
              to={item.path}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-gray-500 hover:text-gdsc-primary-blue"
            >
              {item.name}
            </ScrollLink>
          )
        )}
      </nav>

      {/* Actions (desktop) */}
      <div className="hidden md:block">
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary-blue text-white hover:bg-gdsc-primary-blue/80 cursor-pointer" onClick={() => navigate('/form')}>
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
          {navItems.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-gdsc-primary-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <ScrollLink
                key={item.name}
                to={item.path}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-gray-600 hover:text-gdsc-primary-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            )
          )}

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gdsc-primary-blue text-white hover:bg-gdsc-primary-blue/80" onClick={() => navigate('/form')}>
            Đăng ký ngay
            <FaArrowRight />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
