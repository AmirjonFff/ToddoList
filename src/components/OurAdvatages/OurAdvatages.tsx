import OurAdvatagesCard from "./OurAdvatagesCard/OurAdvatagesCard"
import OurAdvatagesData from "./OurAdvatagesData"

import './style.css'

function OurAdvatages() {
  let cnt: number = 0;
  return (
    <>
      <div className="container py-[100px] border-b-2 border-[#A58038]">
        <h1 className="txt mb-12">Наши преимущества</h1>
        <div className="data">
          {
            OurAdvatagesData.map(el => {
              cnt++;
              return (cnt < 3) ? <OurAdvatagesCard key={el.id} {...el} span="row-span-2" /> : <OurAdvatagesCard key={el.id} {...el} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default OurAdvatages