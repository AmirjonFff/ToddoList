
import './style.css'

import log from './img/log.svg'


function Hearder() {
  return (
    <>
      <div className="header py-[80px] flex items-end h-[700px]">  
           <div className="container">
             <div className='block1 p-[40px] w-[536px] h-[336px] flex flex-col justify-between'>
               <h1 className='text-[36px] text-white font-[800]'>Жилой комплекс
                 комфорт класса</h1>
               <p className='text-[15px] font-[400] leading-[24px]'>Приобретите квартиру своей мечты в одном из
                 лучших районов Душанбе, по привлекательной цене.</p>
               <div className='flex justify-between'><button className='bg-[#073535] text-[13px] py-[12px] px-[54.5px] rounded-[12px] font-bold text-white'>Квартиры</button><img src={log} alt="" /></div>
             </div>
           </div>
       </div>
    </>
  )
}

export default Hearder