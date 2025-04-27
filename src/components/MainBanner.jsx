import AnchorLink from "react-anchor-link-smooth-scroll";

const MainBanner = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: "url(mainpattern.png)", backgroundPosition: "30% 50%" }}
        className="relative rounded-[40px] bg-cover bg-no-repeat p-3 md:min-h-[650px] min-h-[75vh]"
      >
        <div className="flex flex-col items-start">
          <h2 className="sm:text-[30px] text-[25px] text-[#899DBC] font-bold mt-5 md:ml-10">более 5 лет</h2>
          <h1 className="lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] text-white font-bold md:ml-10">
            СОЗДАЕМ ЦИФРОВЫЕ
          </h1>
          <div className="flex sm:flex-row flex-col flex-wrap sm:items-center items-left">
            <h1 className="lg:text-[90px] md:text-[70px] sm:text-[50px] text-[40px] text-white font-bold md:ml-10">
              ПРОДУКТЫ&nbsp;
            </h1>
            <img
              src="forbusiness.svg"
              alt="Для Вашего бизнеса"
              className="mt-2 md:h-full sm:h-[45px] h-[35px] w-fit"
            />
          </div>
        </div>

        {/* <div className="sm:absolute sm:left-10 lg:bottom-20 lg:mt-0 sm:mt-10 mt-2 left-1 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] rounded-tl-0 max-w-[350px] bg-[#ffffff] p-4">
          <p className="text-[#415991] font-semibold text-[20px]">
            <span className="text-[#415991] uppercase font-bold">
              БОЛЕЕ 5 ЛЕТ
            </span>{" "}
            разрабатываем эффективные сайты для вашего бизнеса, которые приносят
            прибыль и обеспечивают высокие позиции в поисковых системах
          </p>
        </div> */}

          <img
            src="statue.png"
            alt="Статуя"
            className="absolute bottom-0 sm:right-10 right-[50%] sm:translate-x-0 translate-x-[50%] sm:w-full w-[90%] max-w-[500px]"
          />
        <div className="absolute w-100 left-0 bottom-0 flex flex-row bg-white rounded-b-[40px] sm:rounded-tr-[40px] rounded-tl-[40px] sm:rounded-b-[0px] gap-3 w-auto m-2 sm:m-0 sm:w-fit sm:gap-5 sm:pt-5 pr-5 sm:pl-0 pl-5 sm:py-0 py-3 hidden sm:block">
          
          <AnchorLink
            href="#connectWithUs"
            className="rounded-full hover:scale-105 transition bg-[#415991] text-white uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#415991] text-md sm:text-2xl"
          >
            Связаться с нами
          </AnchorLink>
          <AnchorLink
            href="#ourServices"
            className="rounded-full hover:scale-105 transition bg-white text-[#415991] uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#415991] text-md sm:text-2xl"
          >
            Наши услуги
          </AnchorLink>
        </div>
      </div>
      <div className="relative mt-5 w-100 justify-between left-0 bottom-0 flex flex-row bg-white rounded-b-[40px] sm:rounded-tr-[40px] rounded-tl-[40px] sm:rounded-b-[0px] gap-3 w-auto m-2 sm:m-0 sm:w-fit sm:gap-5 p-0 block sm:hidden">
          
          <AnchorLink
            href="#connectWithUs"
            className="rounded-full hover:scale-105 text-center transition bg-[#415991] text-white uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#415991] text-xl sm:text-2xl"
          >
            Связаться с нами
          </AnchorLink>
          <AnchorLink
            href="#ourServices"
            className="rounded-full hover:scale-105 text-center transition bg-white text-[#415991] uppercase font-semibold py-2 sm:py-4 px-3 sm:px-6 border-2 border-[#415991] text-xl sm:text-2xl"
          >
            Наши услуги
          </AnchorLink>
        </div>
    </section>
  );
};

export default MainBanner;
