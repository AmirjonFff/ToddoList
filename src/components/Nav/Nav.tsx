import './style.css'

import log from './img/log.svg'

function Nav() {
  return (
    <>
         <div className="nav text-white bg-[#073535] py-6">
            <div className="container flex justify-between items-center font-bold">
              <ul className='flex items-center w-[750px] justify-between text-[15px]'>
                <li>
                  <img src={log} alt="" />
                </li>
                <li>Проекты</li>
                <li>Квартиры</li>
                <li>Галерея</li>
                <li>О компании</li>
                <li>Для бизнеса</li>
              </ul>
              <div className='flex gap-[48px] items-center text-[15px]'>
                <p>+992 901 09 00 00</p>
                <button className='btn text-[13px]'>Оставить заявку</button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Nav