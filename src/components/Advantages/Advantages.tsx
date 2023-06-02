
import Data from "./Data"
import CardAdvantage from "./CardAdvantage/CardAdvantage"



function Advantages() {

    return (
        <>
            <div className="container">
                <div className='flex justify-between py-[100px] border-b-2 border-[#A58038] '>
                    {
                        Data.map(el => {
                            return <CardAdvantage key={el.id} {...el} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Advantages