import { useState } from "react";

const Form = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    phonenumber: "",
    comment: "",
  });
  const token = "8058615685:AAGwfX-ouydCxboMl6Yen8sfTAgy-2a4fg8";
  const chat_id = "-4784411059";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here you can handle the form data, e.g., send it to an API
    console.log("Form submitted:", formData);

    // Construct the message to be sent to Telegram
    const message = `Новая заявка:\nИмя: ${formData.name}\nНомер телефона: ${formData.phonenumber}\nУдобное время: ${formData.time} \nКомментарий: ${formData.comment}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodedMessage}`;

    try {
      // Send the message to the Telegram bot
      const response = await fetch(url);

      if (response.ok) {
        alert("Заявка успешно отправлена!");
      } else {
        alert("Ошибка при отправке заявки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      alert("Ошибка при отправке заявки. Попробуйте снова.");
    }

    // Reset the form after submission (optional)
    setFormData({
      name: "",
      time: "",
      phonenumber: "",
      comment: "",
    });
  };

  return (
    <section id="connectWithUs">
      <div
        style={{ backgroundImage: "url(form.png)" }}
        className="relative rounded-[40px] bg-cover p-5 md:p-10 mt-40"
      >
        <div className="flex flex-col">
          <h2 className="uppercase text-[32px] md:text-[40px] text-white font-bold">
            ВСЕ ЕЩЕ В СОМНЕНИЯХ?
          </h2>
          <span className="uppercase text-[20px] text-white font-medium mt-5">
            ТОГДА ЗАПОЛНИТЕ ФОРМУ:
          </span>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
            <div className="flex xl:flex-row flex-col gap-5 ">
              <input
                type="text"
                name="name"
                placeholder="ВАШЕ ИМЯ"
                value={formData.name}
                onChange={handleChange}
                className=" rounded-full bg-white text-[#133B7A] transition hover:scale-105 uppercase font-semibold py-4 px-6 border-2 border-[#133B7A] text-lg "
                required
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`rounded-full bg-white text-[#133B7A] transition hover:scale-105 uppercase font-semibold py-4 px-6 border-2 border-[#133B7A] text-lg  appearance-none ${
                  formData.time === "" ? "text-[#899DBC]" : "text-[#133B7A]"
                }`}
                required
              >
                <option value="" disabled>
                  Удобное время
                </option>
                <option value="09:00-11:00">09:00-11:00</option>
                <option value="10:00-12:00">10:00-12:00</option>
                <option value="11:00-13:00">11:00-13:00</option>
                <option value="12:00-14:00">12:00-14:00</option>
                <option value="13:00-15:00">13:00-15:00</option>
                <option value="14:00-16:00">14:00-16:00</option>
                <option value="15:00-17:00">15:00-17:00</option>
                <option value="16:00-18:00">16:00-18:00</option>
                <option value="17:00-19:00">17:00-19:00</option>
                <option value="18:00-20:00">18:00-20:00</option>
              </select>
              <input
                type="text"
                name="phonenumber"
                placeholder="НОМЕР ТЕЛЕФОНА"
                value={formData.phonenumber}
                onChange={handleChange}
                className=" rounded-full bg-white text-[#133B7A] transition hover:scale-105 uppercase font-semibold py-4 px-6 border-2 border-[#133B7A] text-lg "
                required
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5">
              <input
                type="text"
                name="comment"
                placeholder="КОММЕНТАРИЙ / ПОЖЕЛАНИЕ"
                value={formData.comment}
                onChange={handleChange}
                className="sm:w-100 w-full rounded-full bg-white text-[#133B7A] transition hover:scale-105 uppercase font-semibold py-4 px-6 border-2 border-[#133B7A] text-lg "
              />
              <button className="rounded-full transition hover:scale-105 bg-[#133B7A] text-white uppercase font-semibold py-4 px-6 border-2 border-[#133B7A] text-lg ">
                отправить
              </button>
            </div>
          </form>
          <h2 className="uppercase text-[28px] md:text-[35px] text-white font-bold mt-10 md:max-w-[60%]">
            МЫ СВЯЖЕМСЯ С ВАМИ И ПОДБЕРЕМ ЛУЧШЕЕ РЕШЕНИЕ ДЛЯ ВАШЕГО БИЗНЕСА!
          </h2>
        </div>
        <img
          src="statueform.png"
          alt="статуя"
          className="absolute bottom-0 right-4 translate-y-[1px] xl:block hidden"
        />
      </div>
    </section>
  );
};

export default Form;
