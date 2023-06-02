
import './style.css'

interface IFunc {
  img: any,
  imgLogo: any,
  title: string,
  span?: string
}

function OurAdvatagesCard({ imgLogo, title, img, span }: IFunc) {
  return (
    <div className={`relative ${span} flex flex-col justify-between items-start gap-[38px] rounded-[24px] overflow-hidden`}>
      <div className='flex relative z-30 flex-col p-7 h-[100%] justify-between items-start gap-[38px]'>
        <img src={imgLogo} className="imgLogo relative z-10 p-3" alt="" />
        <p className="text-[19px] text-white font-bold leading-[32px] relative z-10">{title}</p>
      </div>
      <img src={img} className="absolute w-full h-[100%] top-0 left-0 object-cover" alt="" />
      <div className='tyom absolute w-full h-[100%] z-20'>
      </div>
    </div>
  )
}

export default OurAdvatagesCard