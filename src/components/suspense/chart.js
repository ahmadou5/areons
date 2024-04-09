import { GlobalContext } from "@/context/context"
import TradingVew from "../Home/TradingVew"
export const Chart = () => {
    const { isChart ,setChart} = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm ">
       <div className="w-[98%] h-auto ml-auto mr-auto  bg-white/15 mt-4 py-2 px-2 rounded-2xl  flex">
        <div className="w-[27%] h-[650px] border border-blue-700/15 bg-[#171717] rounded-2xl py-3 px-2 ml-auto mr-auto">
          <div className="bg-white/15 rounded-2xl bg-full h-full">
               <div className="h-[200px] border border-blue-600/55 rounded-2xl py-2 px-3 w-full">
                  <div className="py-2 px-2 font-mono font-bold text-xl">
                     <div className="w-9 h-9 mb-1 rounded-full bg-white/15">
                       <img src="./assets/erc20.png " className="w-[100%] ml-auto mr-auto mt-auto mb-auto rounded-full h-[100%]" />
                     </div>
                      <p>ABC/WAREA</p>
                  </div>
                  <div  className="py-0.5 px-2 font-bold text-md">
                     <p className="font-light text-[16px]">{`${'Token'} Price (Token)`}</p>
                     <p className="text-[23px]">$0.05554443</p>
                  </div>
                  <div  className="py-2 px-2 font-light flex text-sm">
                     <p className="mr-2 ml-0">{`0.000655 WAREA`}</p>
                     <div className="w-4 h-4 mb-3 ml-2mr-2 rounded-full bg-white/15">
                       <img src="./assets/area.jpeg " className="w-[100%] ml-auto mr-auto mt-auto mb-auto rounded-full h-[100%]" />
                     </div>
                  </div>
               </div>

               <div className="h-[80px] py-2.5 flex mt-3 mb-3 rounded-2xl text-sm  px-3 w-full">
                  <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                     <p>5M</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                     <p>1H</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                     <p>6H</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                     <p>1D</p>
                     <p>{`${56}%`}</p>
                  </div>
               </div>
               <div className="h-[130px] flex flex-wrap rounded-2xl py-1 px-3 w-full">
                  <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                     <p className="text-[14px]">24H Volume</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                     <p className="text-[14px]">Liquidity</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                     <p className="font-thin text-[14px]">FDV</p>
                     <p>{`${56}%`}</p>
                  </div>
                  <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                     <p className=" font-extralight text-[14px]">Market Cap</p>
                     <p>{`${56}%`}</p>
                  </div>
               </div>
               <div className="h-[85px] flex flex-wrap rounded-2xl py-1 px-3 w-full">
                  <div className="w-[45%] py-3.5 rounded-2xl  border border-blue-700/25 h-auto ml-auto mr-auto text-center">
                     <p className=" font-extralight text-[14px]">24H Buy Order</p>
                     <p>{`${56}`}</p>
                  </div>
                  <div className="w-[45%] py-3.5 rounded-2xl border border-blue-700/25 h-auto ml-auto mr-auto text-center">
                     <p className=" font-extralight text-[14px]">24H Sells Order</p>
                     <p>{`${56}`}</p>
                  </div>
               </div>
               <div className="w-full py-4 px-2 flex items-center">
                  <button onClick={() => setChart(false)} className="ml-auto h-9 w-[140px] bg-[#171717] rounded-xl py-1 px-2 mr-auto ">Close Chart</button>
               </div>
          </div>
        </div>
        <div className="w-[70%] bg-[#171717] rounded-xl py-3 px-2 ml-auto mr-auto">
         <div className="w-[99%] ml-auto mr-auto h-[99%]">
            <TradingVew />
         </div>
        </div>
       </div>
    </div>
)
}