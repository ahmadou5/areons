import { GlobalContext } from "@/context/context";
import TradingVew from "../Home/TradingVew";
export const Chart = () => {
  const {
    isChart,
    setChart,
    symbol,
    priceUsdt,
    priceArea,
    fiveMChange,
    hChange,
    sixHChange,
    dayChange,
    volume,
    liquidity,
    fdv,
    marketCap,
    buys,
    sells,
    dex,
  } = GlobalContext();
  return (
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm ">
      <div className="w-[98%] h-auto ml-auto mr-auto  bg-white/15 mt-4 py-2 px-2 rounded-2xl  flex">
        <div className="w-[27%] h-[650px] border border-blue-700/15 bg-[#171717] rounded-2xl py-3 px-2 ml-auto mr-auto">
          <div className="bg-white/15 rounded-2xl bg-full h-full">
            <div className="h-[200px] border border-blue-600/55 rounded-2xl py-2 px-3 w-full">
              <div className="py-2 px-2 font-mono font-bold text-xl">
                <div className="w-9 h-9 mb-1 rounded-full bg-white/15">
                  <img
                    src="./assets/erc20.png "
                    className="w-[100%] ml-auto mr-auto mt-auto mb-auto rounded-full h-[100%]"
                  />
                </div>
                <p>{symbol}</p>
              </div>
              <div className="py-0.5 px-2 font-bold text-md">
                <p className="font-light text-[16px]">{`${"USDT Token"} Price`}</p>
                <p className="text-[25px]">{`$${priceUsdt.slice(0,20)}`}</p>
              </div>
              <div className="py-2 px-2 font-light flex text-sm">
                <p className="mr-2 ml-0">{`${priceArea.slice(0,20)}  WAREA`}</p>
                <div className="w-4 h-4 mb-3 ml-2mr-2 rounded-full bg-white/15">
                  <img
                    src="./assets/area.jpeg "
                    className="w-[100%] ml-auto mr-auto mt-auto mb-auto rounded-full h-[100%]"
                  />
                </div>
              </div>
            </div>

            <div className="h-[80px] py-2.5 flex mt-3 mb-3 rounded-2xl text-sm  px-3 w-full">
              <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                <p>5M</p>
                <p>{`${fiveMChange}%`}</p>
              </div>
              <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                <p>1H</p>
                <p>{`${hChange}%`}</p>
              </div>
              <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                <p>6H</p>
                <p>{`${sixHChange}%`}</p>
              </div>
              <div className="w-[23%] py-1 px-4 text-center ml-auto mr-auto h-[90%] rounded-2xl border border-blue-800/45">
                <p>1D</p>
                <p>{`${dayChange}%`}</p>
              </div>
            </div>
            <div className="h-[140px] flex flex-wrap rounded-2xl py-1 px-3 w-full">
              <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                <p className="text-[14px]">24H Volume</p>
                <p>{`$${volume.slice(0,10)}`}</p>
              </div>
              <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                <p className="text-[14px]">Liquidity</p>
                <p>{`$${liquidity.slice(0,10)}`}</p>
              </div>
              <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                <p className="font-thin text-[14px]">FDV</p>
                <p>{`$${fdv.slice(0,12)}`}</p>
              </div>
              <div className="w-[48%] py-1 px-4 text-center ml-auto bg-white/5 mr-auto h-14 rounded-2xl ">
                <p className=" font-extralight text-[14px]">Market Cap</p>
                <p>{`$${marketCap !== null? marketCap.slice(0,10) : marketCap}`}</p>
              </div>
            </div>
            <div className="h-[85px] mb-4 flex flex-wrap rounded-2xl py-1 px-3 w-full">
              <div className="w-[45%] py-3.5 rounded-2xl  border border-green-500 h-auto ml-auto mr-auto text-center">
                <p className=" font-extralight text-[14px]">24H Buy Order</p>
                <p>{`${buys}`}</p>
              </div>
              <div className="w-[45%] py-3.5 rounded-2xl border border-red-500 h-auto ml-auto mr-auto text-center">
                <p className=" font-extralight text-[14px]">24H Sells Order</p>
                <p>{`${sells}`}</p>
              </div>
            </div>
            <div className="w-full py-2 px-2 flex items-center">
              <button
                onClick={() => setChart(false)}
                className="ml-auto h-9 w-[140px] bg-[#171717] rounded-xl py-1 px-2 mr-auto "
              >
                Close Chart
              </button>
            </div>
          </div>
        </div>
        <div className="w-[70%] bg-[#171717] rounded-xl py-3 px-2 ml-auto mr-auto">
          <div className="w-[99%] ml-auto mr-auto h-[100%]">
            <TradingVew />
          </div>
        </div>
      </div>
    </div>
  );
};
