import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer class="border-2 border-[#133B7A] rounded-t-[40px] w-full min-h-[200px] mt-40 flex flex-col items-center">
        <div class="flex flex-row justify-between w-[80%] mx-auto mt-5">
          <div class="flex flex-col gap-5">
            <Link className="text-[#133B7A] text-16 font-medium" to="">
              Форма для связи
            </Link>
            <Link className="text-[#133B7A] text-16 font-medium" to="">
              Услуги
            </Link>
            <Link className="text-[#133B7A] text-16 font-medium" to="">
              Кейсы
            </Link>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src="logo.svg" alt="logo" width={70} />
            <span className="text-20 text-[#133B7A] font-medium">
              Ebel Vladimir
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className=" text-[#133B7A] text-16 font-medium">
              Мы в соцсетях:
            </span>
            <div className="flex flex-row gap-3">
              <Link to="">
                <img src="vk.svg" alt="VK" />
              </Link>
              <Link to="">
                <img src="wa.svg" alt="WhatsApp" />
              </Link>
              <Link to="">
                <img src="tg.svg" alt="Telegram" />
              </Link>
            </div>
            <span className="text-[#133B7A] text-16 font-medium">
              +7 995 292 00 84
            </span>
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
