import { Link } from "react-router-dom"
const MainInfoBlock = () => {
    return <>
    <div className="flex sm:flex-row gap-10 flex-col">
        <div className="sm:w-[50vw] w-full">
            <span className="uppercase text-[#415991] font-semibold text-[30px] md:text-[25px]">разрабатываем эффективные сайты для вашего бизнеса, приносящие прибыль и обеспечивающие высокие позиции в поисковых системах</span>
        </div>
        <div className="flex flex-row gap-5 h-fit flex-wrap w-full">
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">React</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">VUE JS</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">NEXT JS</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">PHP</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">Laravel</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">Python</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">PostgreSQL</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">Tailwind CSS</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">Strapi</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">HTML</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">CSS</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">BOOTSTRAP</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">JavaScript</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">amoCRM</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">MONGO DB</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">Docker</div>
            <div className="w-fit h-fit text-white font-semibold text-[20px] px-5 py-1 rounded-full bg-[#133B7A99]">mySQL</div>
            <Link to=""><img src="arrow.png" className="h-full" alt="" /></Link>
        </div>
    </div>
    </>
}

export default MainInfoBlock