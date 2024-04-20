import { PoolsCard } from "../Pools/components/PoolsCard"
import { TokensCard } from "../Tokens/components/TokensCard"
import { Each } from "../Home/Each"
import { GlobalContext } from "@/context/context"
export const Overview = () => {
    const number = 234234;
    const language = "en";
    const { areaTvl, areaVol, areaPrice, trendingPools,setTrendingPools, isChart, setChart, setSymbol, setPoolAddress, setSells, setDex ,setBuys,  setPriceUsdt, setPriceArea, setFiveMChange, setHChange, setSixHChange, setDayChange, setVolume, setLiquidity, setFdv, setMarketCap, setNewPools, newPools,  areaImg } = GlobalContext();
    return(
    <div className="w-[100%] h-auto">
        <div className="lg:w-[97%] ml-auto mr-auto py-5 px-3 mb-10 flex flex-col">
        <div className="lg:w-[100%] w-[97%] lg:mb-3 mb-5 py-2 px-4 h-auto rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
          <div>
            <p>🔥 Trending Pools</p>
            <Each
              of={trendingPools}
              render={(item, i) => (
                <div className="w-[100%] text-center mb-2  rounded-md mt-0.5 text-md flex py-3 px-4 border border-blue-600/15 h-auto mb-auto">
                  <div onClick={() => {
            setSymbol(item.attributes.name)
            setBuys(item.attributes.transactions.h24.buys)
            setSells(item.attributes.transactions.h24.sells)
            setDex(item.relationships.dex.data.id)
            setFdv(item.attributes.fdv_usd)
            setLiquidity(item.attributes.reserve_in_usd)
            setMarketCap(item.attributes.market_cap_usd)
            setFiveMChange(item.attributes.price_change_percentage.m5)
            setHChange(item.attributes.price_change_percentage.h1)
            setSixHChange(item.attributes.price_change_percentage.h6)
            setDayChange(item.attributes.price_change_percentage.h24)
            setPriceArea(item.attributes.base_token_price_native_currency)
            setPriceUsdt(item.attributes.base_token_price_usd)
            setVolume(item.attributes.volume_usd.h24)
            setPoolAddress(item.attributes.address)
            setChart(true)
            //setSymbol(item.attributes.name)
        }} className=" ml-2  w-[30%] cursor-pointer text-center">{item.attributes.name}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{`$${Intl.NumberFormat(
                    language,
                    { notation: "compact" }
                  ).format(item.attributes.volume_usd.h24)}`}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.attributes.price_change_percentage.h24}%`}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${Intl.NumberFormat(
                    language,
                    { notation: "compact" }
                  ).format(item.attributes.reserve_in_usd)}`}</div>
                </div>
              )}
            />
          </div>
        </div>
        

        <div className="lg:w-[100%] mt-8 w-[97%] lg:mb-0 mb-5 py-2 px-4 h-auto rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
          <div>
            <p>🆕 New Pools</p>
            <Each
              of={newPools}
              render={(item, i) => (
                <div className="w-[100%] text-center mt-0.5 mb-2 rounded-md text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
                  <div onClick={() => {
            setSymbol(item.attributes.name)
            setBuys(item.attributes.transactions.h24.buys)
            setSells(item.attributes.transactions.h24.sells)
            setDex(item.relationships.dex.data.id)
            setFdv(item.attributes.fdv_usd)
            setLiquidity(item.attributes.reserve_in_usd)
            setMarketCap(item.attributes.market_cap_usd)
            setFiveMChange(item.attributes.price_change_percentage.m5)
            setHChange(item.attributes.price_change_percentage.h1)
            setSixHChange(item.attributes.price_change_percentage.h6)
            setDayChange(item.attributes.price_change_percentage.h24)
            setPriceArea(item.attributes.base_token_price_native_currency)
            setPriceUsdt(item.attributes.base_token_price_usd)
            setVolume(item.attributes.volume_usd.h24)
            setPoolAddress(item.attributes.address)
            setChart(true)
            //setSymbol(item.attributes.name)
        }} className=" ml-2  w-[30%] cursor-pointer text-center">{item.attributes.name}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{`$${Intl.NumberFormat(
                    language,
                    { notation: "compact" }
                  ).format(item.attributes.volume_usd.h24)}`}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.attributes.price_change_percentage.h24}%`}</div>
                  <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${Intl.NumberFormat(
                    language,
                    { notation: "compact" }
                  ).format(item.attributes.reserve_in_usd)}`}</div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
        <div className="w-auto mt-16 ">
          <p className="mb-3 py-2 px-3 ml-4 text-xl">Pools</p>
          <PoolsCard />
        </div>
        {/**<div className="w-auto mt-16 ">
         <p className="mb-3 py-2 px-3 ml-4 text-xl">Tokens</p>
          <TokensCard />
            </div> **/}
    </div>
)
}