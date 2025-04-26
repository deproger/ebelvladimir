import { useEffect, useState } from "react";
import { getServices } from "../sanity";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const services = await getServices();
      setServices(services);
      console.log(services);
    };
    fetchServices();
  }, []);

  const getUniqueServices = (services) => {
    const uniqueServices = [];
    const seenTitles = new Set();

    services.forEach((service) => {
      if (!seenTitles.has(service.title)) {
        seenTitles.add(service.title);
        uniqueServices.push(service);
      }
    });

    return uniqueServices;
  };

  const uniqueServices = getUniqueServices(services);

  // Функция для разбивки массива на группы по 4 элемента
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedServices = chunkArray(uniqueServices, 4);
  console.log(groupedServices);

  return (
    <>
      <section id="ourServices">
        <h2 className="uppercase text-[#415991] text-[40px] font-bold mb-[50px]">
          Наши услуги
        </h2>
        <div className="flex flex-col gap-5">
          {groupedServices.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex xl:flex-nowrap flex-wrap justify-between gap-5"
            >
              {group.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col min-w-[266px] w-full sm:w-[calc(25%-10px)] h-[200px] border-2 border-[#C61F38] rounded-[40px] items-start p-5 justify-between transition cursor-pointer hover:scale-110"
                >
                  <span className="uppercase text-[#415991] text-[18px] md:text-[20px] font-bold">
                    {service.title}
                  </span>
                  <img
                    src={service.image}
                    className="max-h-[74px]"
                    alt="service"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
