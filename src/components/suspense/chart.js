import { GlobalContext } from "@/context/context"
import TradingVew from "../Home/TradingVew"
export const Chart = () => {
    const { isChart ,setChart} = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm ">
       <p onClick={() => setChart(false)}>X</p>
       <div className="w-[98%] h-auto ml-auto mr-auto  bg-white/15 mt-4 py-2 px-2 rounded-2xl  flex">
        <div className="w-[27%] h-[620px] bg-black/45 rounded-2xl py-3 px-2 ml-auto mr-auto">
          Token details
        </div>
        <div className="w-[70%] bg-gray-950/35 rounded-xl py-3 px-2 ml-auto mr-auto">
         <div className="w-[98%] ml-auto mr-auto h-[100px]">
            <TradingVew />
         </div>
        </div>
       </div>
    </div>
)
}