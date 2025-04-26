import { Link } from "react-router-dom"
const LeadsGen = () => {
    return <>
        <Link to="" className="fixed left-1 top-1 text-[#415991] text-[20px] bg-white rounded-full py-3 px-5 z-10">Назад</Link>
        <h1 className="uppercase w-[70%] font-bold text-[#899DBC] text-[45px]"><span className="text-[#415991]">Лидогенерация в Telegram:</span> Найдите свою целевую аудиторию с помощью наших скриптов</h1>
        <img src="leadsstatue.png" alt="leadsstatue" className="absolute top-0 right-0" />  
        
        <div className="flex flex-col gap-7 p-7 border-[#E05E6E] rounded-[40px] border-2 max-w-[700px] w-full mt-10">
            <h2 className="text-[#E05E6E] font-bold text-[30px]">Что такое лидогенерация?</h2>
            <p className="uppercase font-bold text-[#899DBC] text-[20px]">
                <span className="text-[#415991]">Лидогенерация</span> — это процесс привлечения и конвертации потенциальных клиентов (лидов) для вашего бизнеса. <br />
                В современном мире, где конкуренция растет с каждым днем, эффективные методы поиска и взаимодействия с целевой аудиторией становятся ключевыми для успеха.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-[80%] mt-30">
            <img src="telegram.svg" alt="telegram" className="min-h-[174px]" />
            <div className="flex flex-col justify-between">
                <h2 className="font-bold text-[30px] text-[#415991] uppercase">Почему Telegram?</h2>
                <p className="font-bold text-[20px] text-[#899DBC]">Telegram — это один из самых быстрорастущих мессенджеров, который предоставляет уникальные возможности для бизнеса. С более чем 500 миллионами активных пользователей, Telegram становится идеальной платформой для поиска и взаимодействия с вашей целевой аудиторией.</p>
            </div>
        </div>

        <div className="flex flex-col gap-10 w-[80%] mt-30">
            <h2 className="font-bold text-[30px] text-[#E05E6E] uppercase">Как мы помогаем вам?</h2>
            <p className="font-bold text-[20px] text-[#899DBC]">Мы предлагаем инновационные скрипты, которые помогут вам найти целевую аудиторию в Telegram по ключевым словам. Наша система использует продвинутые алгоритмы для анализа и поиска групп, каналов и пользователей, которые соответствуют вашим критериям.</p>
        </div>

        <div className="flex flex-col gap-10 mx-aito max-w-[1400px] mt-30">
            <h2 className="font-bold text-[30px] text-[#415991] uppercase mx-auto">Как это работает?</h2>

            <div className="flex flex-row flex-wrap gap-20 justify-center">
                <div className="rounded-[40px] border-3 border-[#FFC8A7] flex flex-row gap-5 max-w-[445px] w-[80vw] py-5 pr-5">
                    <div className="rounded-full border-3 border-[#FFC8A7] text-[#FFC8A7] font-bold bg-white py-3 px-5 -translate-x-[50%] my-auto h-fit">1</div>
                    <p className="font-bold text-[20px] text-[#899DBC]">Определите вашу целевую аудиторию: Укажите ключевые слова и параметры, которые помогут нам понять, кого вы ищете.</p>
                </div>
                <div className="rounded-[40px] border-3 border-[#899DBC] flex flex-row gap-5 max-w-[445px] w-[80vw] py-5 pr-5">
                    <div className="rounded-full border-3 border-[#899DBC] text-[#899DBC] font-bold bg-white py-3 px-5 -translate-x-[50%] my-auto h-fit">2</div>
                    <p className="font-bold text-[20px] text-[#899DBC]">Запустите наш скрипт: Мы используем наши инструменты для поиска и анализа данных в Telegram.</p>
                </div>
                <div className="rounded-[40px] border-3 border-[#E05E6E] flex flex-row gap-5 max-w-[445px] w-[80vw] py-5 pr-5">
                    <div className="rounded-full border-3 border-[#E05E6E] text-[#E05E6E] font-bold bg-white py-3 px-5 -translate-x-[50%] my-auto h-fit">3</div>
                    <p className="font-bold text-[20px] text-[#899DBC]">Получите результаты: Вы получите список потенциальных клиентов, с которыми можно начать взаимодействие.</p>
                </div>
            </div>
        </div>
    </>
}
export default LeadsGen