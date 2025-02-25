import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <>
      <footer className="border-2 border-[#133B7A] rounded-t-[40px] w-full min-h-[200px] mt-40 flex flex-col items-center">
        <div className="flex flex-row justify-between w-[80%] mx-auto mt-5">
          <div className="flex flex-col gap-5">
            <AnchorLink
              className="text-[#133B7A] text-16 font-medium transition-all hover:scale-110"
              href=""
            >
              Форма для связи
            </AnchorLink>
            <AnchorLink
              className="text-[#133B7A] text-16 font-medium transition-all hover:scale-110"
              href="#ourServices"
            >
              Услуги
            </AnchorLink>
            <AnchorLink
              className="text-[#133B7A] text-16 font-medium transition-all hover:scale-110"
              href="#cases"
            >
              Кейсы
            </AnchorLink>
          </div>
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col gap-5 items-center transition hover:scale-105"
          >
            <img src="logo.svg" alt="logo" width={70} />
            <span className="text-20 text-[#133B7A] font-medium">
              Ebel Vladimir
            </span>
          </Link>
          <div className="flex flex-col gap-5">
            <span className=" text-[#133B7A] text-16 font-medium">
              Мы в соцсетях:
            </span>
            <div className="flex flex-row gap-3">
              <Link
                className="transition hover:scale-115"
                target="_blank"
                to="https://vk.com/vladimirebel_dev"
              >
                <img src="vk.svg" alt="VK" />
              </Link>
              <Link
                className="transition hover:scale-115"
                target="_blank"
                to="https://wa.me/+79016074757"
              >
                <img src="wa.svg" alt="WhatsApp" />
              </Link>
              <Link
                className="transition hover:scale-115"
                target="_blank"
                to="https://t.me/VladimirEbel"
              >
                <img src="tg.svg" alt="Telegram" />
              </Link>
            </div>
            <Link
              to="tel:+79952920084"
              className="text-[#133B7A] text-16 font-medium"
            >
              +7 995 292 00 84
            </Link>
          </div>
        </div>
        <div className="w-[80%] my-5 h-[1px] bg-[#133B7A]"></div>
        <p className="font-medium text-16 text-[#133B7A] text-center">
          © Все права защищены <br />
          Копирование материалов, на которых указан знак копирайта, разрешается
          только с согласия правообладателя и в случаях, предусмотренных
          законодательством
        </p>
        <span className="font-medium text-16 text-[#133B7A70] text-center my-3">
          Designed by Evelina Ebel
        </span>
      </footer>
    </>
  );
};

export default Footer;
