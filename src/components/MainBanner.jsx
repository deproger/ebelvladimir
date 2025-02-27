import AnchorLink from "react-anchor-link-smooth-scroll";
const MainBanner = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: "url(mainpattern.png)" }}
        className="relative rounded-[40px] bg-cover bg-no-repeat p-3 lg:min-h-[650px] min-h-[900px]"
      >
        <div className="flex flex-col items-start">
          <h1 className="lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] text-white font-bold md:ml-10">
            СОЗДАЕМ ЦИФРОВЫЕ
          </h1>
          <div className="flex flex-row flex-nowrap items-center">
            <h1 className="lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] text-white font-bold md:ml-10">
              ПРОДУКТЫ&nbsp;
            </h1>
            <img
              src="forbusiness.svg"
              alt="Для Вашего бизнеса"
              className="mt-2 md:h-full sm:h-[45px] h-[35px]"
            />
          </div>
        </div>

        <div className="sm:absolute sm:left-10 lg:bottom-20 lg:mt-0 sm:mt-10 mt-2 left-1 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] rounded-tl-0 max-w-[350px] bg-[#ffffff] p-4">
          <p className="text-[#133B7A] font-semibold text-[20px]">
            <span className="text-[#133B7A] uppercase font-bold">
              БОЛЕЕ 5 ЛЕТ
            </span>{" "}
            разрабатываем эффективные сайты для вашего бизнеса, которые приносят
            прибыль и обеспечивают высокие позиции в поисковых системах
          </p>
        </div>

        <div className="absolute right-0 bottom-0 flex flex-row bg-white rounded-b-[40px] rounded-tl-[40px] sm:rounded-b-[0px] gap-3 w-auto m-2 sm:m-0 sm:w-fit sm:gap-5 py-3 px-2 sm:px-5">
          <img
            src="statue.png"
            alt="Статуя"
            className="absolute top-0 right-0 -translate-y-[100%]"
          />
          <AnchorLink
            href="#connectWithUs"
            className="rounded-full hover:scale-105 transition bg-[#133B7A] text-white uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#133B7A] text-md sm:text-2xl"
          >
            Связаться с нами
          </AnchorLink>
          <AnchorLink
            href="#ourServices"
            className="rounded-full hover:scale-105 transition bg-white text-[#133B7A] uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#133B7A] text-md sm:text-2xl"
          >
            Наши услуги
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
