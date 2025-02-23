const Services = () => {
  return (
    <>
      <section id="ourServices">
        <h2 className="uppercase text-[#133B7A] text-[32px] md:text-[40px] font-bold">
          Наши услуги
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap justify-between gap-5">
          <div className="flex sm:flex-nowrap flex-wrap w-full gap-5">
            <div className="flex flex-col min-w-[266px] w-full sm:w-[calc(50%-10px)] h-[200px] border-2 border-[#C61F38] rounded-[40px] items-start p-5 justify-between">
              <span className="uppercase text-[#133B7A] text-[18px] md:text-[20px] font-bold">
                Разработка телеграм ботов/приложений
              </span>
              <img
                src="develop_tg.svg"
                className="max-h-[74px]"
                alt="telegram"
              />
            </div>

            <div className="flex flex-col min-w-[266px] w-full sm:w-[calc(50%-10px)] h-[200px] border-2 border-[#C61F38] rounded-[40px] items-start p-5 justify-between">
              <span className="uppercase text-[#133B7A] text-[18px] md:text-[20px] font-bold">
                Разработка корпоративных сайтов/лендингов
              </span>
              <img src="develop_web.svg" className="max-h-[74px]" alt="web" />
            </div>
          </div>

          <div className="flex sm:flex-nowrap flex-wrap w-full gap-5">
            <div className="flex flex-col min-w-[266px] w-full sm:w-[calc(50%-10px)] h-[200px] border-2 border-[#C61F38] rounded-[40px] items-start p-5 justify-between">
              <span className="uppercase text-[#133B7A] text-[18px] md:text-[20px] font-bold">
                Разработка интернет магазинов
              </span>
              <img
                src="develop_store.svg"
                className="max-h-[74px]"
                alt="store"
              />
            </div>

            <div className="flex flex-col min-w-[266px] w-full sm:w-[calc(50%-10px)] h-[200px] border-2 border-[#C61F38] rounded-[40px] items-start p-5 justify-between">
              <span className="uppercase text-[#133B7A] text-[18px] md:text-[20px] font-bold">
                Разработка приложений под Android/iOS
              </span>
              <img
                src="develop_mobile.svg"
                className="max-h-[74px]"
                alt="mobile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
