import { PoolsCard } from "../Pools/components/PoolsCard"
import { TokensCard } from "../Tokens/components/TokensCard"

export const Overview = () => {
    return(
    <div className="w-[100%] h-auto">
        {/**<div className="w-full py-5 px-3 flex lg:flex-row flex-col" >
            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
                <div>
                    <p>Trending Pools</p>
                </div>
            </div>
            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">Top Gainers</div>
            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">New Pools</div>
    </div>**/}
        <div className="w-auto mt-16 ">
          <p className="mb-3 py-2 px-3 ml-4 text-xl">Pools</p>
          <PoolsCard />
        </div>
        <div className="w-auto mt-16 ">
        <p className="mb-3 py-2 px-3 ml-4 text-xl">Tokens</p>
          <TokensCard />
        </div>
    </div>
)
}