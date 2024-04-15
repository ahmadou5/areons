'use client'
import { useState } from "react"
import { GlobalContext } from "@/context/context"
import { Overview } from "../Overview"
import { Pools } from "../Pools"
import { Tokens } from "../Tokens"
import { Chart } from "../suspense/chart"
import { useGetTokens } from "@/hooks/useGetArea"
import { Each } from "./Each"
export const HomeView = () => {
    const {isChart, areaTvl, 
        areaVol, 
        areaPrice,
    areaImg
} = GlobalContext()
    const Token = useGetTokens()
    const tokenEndpoint = 'https://api.geckoterminal.com/api/v2/networks/eth/tokens/'
    const [isToken, setIsToken] = useState(false)
    const [isPool, setIsPool] = useState(false)
    const [isOver, setIsOver] = useState(true)
    const number = 234234;
    const language = "en"
    const trending = [
        {
            name: 'BTC/AREA',
            change: '+3456',
            Price: 73400,
            volume: 2333466636734,
        },
        {
            name: 'ETH/AREA',
            change: '+65',
            Price: 2340,
            volume: 3433346663674,
        },
        {
            name: 'OPAY/AREA',
            change: '+36',
            Price: 2340,
            volume: 566346663674,
        },
        {
            name: 'OHM/AREA',
            change: '+345236',
            Price: 4000,
            volume: 3466636748,
        }
    ]
    Intl.NumberFormat(language, {notation: "compact"}).format(number) //output - "234K"
    return(
    <div className="mt-32 w-full">
        <div className="w-[94%] ml-auto mr-auto mt-16 py-2 px-5 rounded-xl bg-[#171717]/15">
            <div>
               <p className="text-start text-3xl">Explore CryptoCurrency data on Areon Chain</p>
               <p className="text-start text-md">{`The global cryptocurrency market cap on Areon Chain today is $${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}, a 3.3% change in the last 24 hours`}</p>
            </div>
        </div>
        <div className="w-full py-4 mb-10 mt-10 px-3 flex lg:flex-row flex-col ">
            <div className="lg:w-[45%] w-[95%] mb-5 py-4 px-3 lg:h-[200px] h-[200px] rounded-xl border bg-[#171717] hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
                <div className="py-4 flex px-8 ">
                    <img src={areaImg} className="w-12 h-12 mr-2 ml-2" />
                    <p className="mt-2  mb-0 text-3xl">Areon Tvl</p>
                </div>
                <div className="py-1.5 px-9">
                    <p className="text-6xl">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(areaTvl)}`}</p>
                </div>
            </div>
            <div className="lg:w-[45%] w-[95%] py-3 px-2 lg:h-[200px] h-[200px] rounded-xl border bg-[#171717]  hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
            <div className="py-4 px-8 flex ">
                    <img src='./assets/tren.png' className="w-16 h-12 mr-2 ml-2" />
                    <p className="text-3xl mt-2 mb-0">Volume 24hrs</p>
                </div>
                <div className="py-0.5 flex px-9">
                    <p className="text-6xl">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}`}</p>
                </div>
            </div>
        </div>

        <div className="lg:w-[97%] ml-auto mr-auto py-5 px-3 mb-10 flex lg:flex-row flex-col" >
            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
                <div>
                    <p>🔥 Trending Pools</p>
                    <Each of={trending} render={(item,i) => (
                        <div  className="w-[100%] text-center mt-0.5  text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
                                 <div className=" ml-2  w-[30%]  text-center">{item.name}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.volume)}`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.change}%`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}`}</div>      
                        </div>
                    )} />
                  
                </div>
            </div>
            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
                <div>
                    <p>🚀 Top Gainers</p>
                    <Each of={trending} render={(item,i) => (
                        <div  className="w-[100%] text-center mt-0.5  text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
                                 <div className=" ml-2  w-[30%]  text-center">{item.name}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.volume)}`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.change}%`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}`}</div>      
                        </div>
                    )} />
                  
                </div>
            </div>

            <div className="lg:w-[32%] w-[97%] lg:mb-0 mb-5 py-2 px-4 h-[250px] rounded-xl border bg-[#171717] border-blue-600/45 ml-auto mr-auto ">
                <div>
                    <p>🆕 New Pools</p>
                    <Each of={trending} render={(item,i) => (
                        <div  className="w-[100%] text-center mt-0.5  text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
                                 <div className=" ml-2  w-[30%]  text-center">{item.name}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.volume)}`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.change}%`}</div>
                                 <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}`}</div>      
                        </div>
                    )} />
                  
                </div>
            </div>
        </div>
        
        {/** the Line like */}
        <div className=" w-[94%]  ml-auto mr-auto bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 p-4 rounded-lg flex items-center">
             <div className="ml-auto mr-auto">{`Volume 24H:  $${Intl.NumberFormat(language, {notation: "compact"}).format(areaVol)}`}</div>
             <div className="ml-auto mr-auto">{`Tvl:  $${Intl.NumberFormat(language, {notation: "compact"}).format(areaTvl)}`}</div>
             <div className="ml-auto mr-auto">{`Price:  $${areaPrice.slice(0,7)}`}</div>
        </div>
        <div className="mt-20 lg:ml-5 mb-20 ml-auto mr-auto lg:w-[400px] w-[95%] py-3 px-2 flex h-12 bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60  p-4 rounded-lg items-center ">
            <div onClick={() => {
                setIsOver(true)
                setIsPool(false)
                setIsToken(false)
            }}  className={`ml-auto ${isOver && 'bg-blue-600'} text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}>Overview</div>
            <div onClick={() => {
                setIsOver(false)
                setIsPool(true)
                setIsToken(false)
            }} className={`ml-auto ${isPool && 'bg-blue-600'} text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}>Pools</div>
            <div onClick={() => {
                setIsOver(false)
                setIsPool(false)
                setIsToken(true)
            }} className={`ml-auto ${isToken && 'bg-blue-600'} text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}>Tokens</div>
        </div>
        <div className="w-[]">
        {
            isToken && <Tokens />
        }
        {
            isOver && <Overview/>
        }
        {
            isPool && <Pools/>
        }
        </div>
        {isChart && <Chart/>}
    </div>
    )
}