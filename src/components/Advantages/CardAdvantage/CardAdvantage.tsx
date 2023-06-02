import './style.css'

interface IFunc {
  img: any,
  title: string,
  text: string
}

function  CardAdvantage({img, title, text}: IFunc) { 
  return (
    <>
      <div className="block2 flex flex-col p-8 w-[288px] h-[170px] items-start gap-2 ">
        <img src={img} alt="" />
        <p className="text-[17px] text-white font-bold mt-5">{title}</p>
        <p className="text-[13px] font-[300] text-white">
          {text}
        </p>
      </div>
    </>
  )
}

export default CardAdvantage
