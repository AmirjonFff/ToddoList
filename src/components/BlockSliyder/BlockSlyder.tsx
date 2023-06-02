
import vec1 from './img/vec.svg';

function BlockSlyder() {
    return (
        <>
            <div className="container">
                <div className='py-[100px] border-b-2 border-[#A58038]'>
                    <div className='max-w-[480px] text-white flex flex-col gap-6 items-start'>
                        <h3 className='text-[36px] font-bold'>О жилом комплексе</h3>
                        <p>
                            Уникальный инженерно-архитектурный проект, комбинирующий комфорт жилого комплекса, зеленое пространство парковых зон и современность торгово-развлекательного центра.
                            Комплекс строится с использованием новейших  технологий и будет построен из высококачественных энергосберегающих строительных материалов
                        </p>
                        <button className='btn flex gap-2 items-center text-[15px]'>Оставить заявку <img src={vec1} alt="" /></button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default BlockSlyder