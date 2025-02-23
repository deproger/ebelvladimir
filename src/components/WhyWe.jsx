const WhyWe = () => {
  return (
    <>
      <h2 className="uppercase text-[#133B7A] text-[40px] font-bold">
        ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-10 w-full justify-between lg:flex-nowrap flex-wrap">
          <div className="p-5 border-4 border-[#C61F38] rounded-[40px] xl:max-w-[435px] w-full">
            <p className="text-[#133B7A] text-[20px] font-bold">
              <span className="text-[#C61F38]">Качество и надежность</span>:
              Наша команда состоит из опытных специалистов, которые гарантируют
              высокое качество работы и стабильность ваших веб-решений.
            </p>
          </div>

          <div className="max-w-[220px] rounded-[40px] xl:block hidden">
            <img src="whywe-1.svg" className="w-full h-full" />
          </div>

          <div className="p-5 border-4 border-[#C61F38] rounded-[40px] xl:max-w-[435px] w-full">
            <p className="text-[#133B7A] text-[20px] font-bold">
              <span className="text-[#C61F38]">Прозрачность и честность</span>:
              Мы придерживаемся принципов открытости в работе. Все этапы
              разработки обсуждаются с клиентом, а стоимость услуг всегда
              заранее согласована.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 w-full justify-between lg:flex-nowrap flex-wrap">
          <div className="w-[110px] rounded-[40px] xl:block hidden">
            <img src="whywe-2.svg" className="w-full h-full" />
          </div>

          <div className="p-5 border-4 border-[#C61F38] rounded-[40px] xl:max-w-[800px] w-full">
            <p className="text-[#133B7A] text-[20px] font-bold">
              <span className="text-[#C61F38]">Современные технологии</span>: Мы
              используем последние технологии и инструменты разработки, чтобы
              обеспечить Вам высокопроизводительный сайт, который будет
              привлекать пользователей. Кроме того, мы готовы помочь Вам
              разобраться со старыми технологиями, чтобы обеспечить плавный
              переход и интеграцию новых решений в вашу существующую
              инфраструктуру.
            </p>
          </div>

          <div className="w-[110px] rounded-[40px] xl:block hidden">
            <img src="whywe-3.svg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWe;
