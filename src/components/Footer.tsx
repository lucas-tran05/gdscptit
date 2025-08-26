import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { GDSCIcon } from '@/common/icon';

const Footer = () => {
  const pageInfo = [
    { category: "Facebook", link: "https://facebook.com/gdscptit" },
    { category: "Instagram", link: "https://www.instagram.com/gdgoc.ptit/" },
    { category: "LinkedIn", link: "https://linkedin.com/company/gdscptit" },
  ];

  const contactInfo = {
    phone: "0869276128 (Ms.Thoa)",
    email: "contact@gdscptit.dev",
    domain: "gdscptit.dev"
  }

  return (
    <footer className="bg-gdsc-primary text-white p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left Section - Logo and Title */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <GDSCIcon width={40} height={40} color="#fff" />
              <div>
                <h3 className="text-2xl font-semibold">Google Developers Student Clubs</h3>
                <p className="text-blue-100 text-lg">
                  Posts and Telecommunications Institute of Technology
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-120 h-px bg-blue-300 mb-4"></div>

            {/* Social Icons and Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a href={pageInfo[0].link} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-6 h-6 hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
                <a href={pageInfo[1].link} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
                <a href={pageInfo[2].link} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
              </div>

              <div className="text-sm text-blue-100">
                Copyright Google Developer Student Club - PTIT.<br />
                All right reserved.
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center gap-3">
              <FaPhone className="w-4 h-4" />
              <span>Số điện thoại: {contactInfo.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="w-4 h-4" />
              <span>Email: {contactInfo.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="w-4 h-4" />
              <span>Domain: {contactInfo.domain}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;