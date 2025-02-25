import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white w-full  sticky top-0 left-0 z-100">
      <nav className="max-w-[1200px] mx-auto flex flex-row justify-between py-5 items-center bg-white">
        <Link
          onClick={() => scrollTo(0, 0)}
          className="flex flex-row gap-5 items-center cursor-pointer transition hover:scale-110"
        >
          <img src="logo.svg" width={60} alt="Logo" />
          <span className="text-[24px] text-[#133B7A]">Ebel Vladimir</span>
        </Link>
        <div className="hidden sm:flex flex-row gap-5 items-center">
          <AnchorLink
            href="#ourServices"
            className="text-[#133B7A] text-[24px] transition-all hover:font-bold"
          >
            Услуги
          </AnchorLink>
          <AnchorLink
            href="#cases"
            className="text-[#133B7A] text-[24px] transition-all hover:font-bold"
          >
            Кейсы
          </AnchorLink>
          <AnchorLink
            href="#connectWithUs"
            className="text-[#133B7A] text-[24px] transition-all hover:font-bold"
          >
            Контакты
          </AnchorLink>
        </div>
        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? "rotate-45" : ""
            }`}
          >
            <div
              className={`flex flex-col justify-center items-center transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            >
              <div
                className={`w-8 h-1 bg-[#133B7A] mb-1 transition-all duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-[#133B7A] mb-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-[#133B7A] mb-1 transition-all duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute top-24 right-0 flex flex-col gap-10 bg-white shadow-lg rounded-b-lg sm:hidden z-100 w-full transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 p-5"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          <AnchorLink
            href="#ourServices"
            onClick={toggleMenu}
            className="block text-[#133B7A] text-[20px]"
          >
            Услуги
          </AnchorLink>
          <AnchorLink
            href="#cases"
            onClick={toggleMenu}
            className="block text-[#133B7A] text-[20px]"
          >
            Кейсы
          </AnchorLink>
          <AnchorLink
            href="#connectWithUs"
            onClick={toggleMenu}
            className="block text-[#133B7A] text-[20px]"
          >
            Контакты
          </AnchorLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
