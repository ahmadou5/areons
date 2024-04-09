'use client'
import { useState } from "react"
import { GlobalContext } from "@/context/context"
import { Overview } from "../Overview"
import { Pools } from "../Pools"
import { Tokens } from "../Tokens"
import { Chart } from "../suspense/chart"
export const HomeView = () => {
    const {isChart} = GlobalContext()
    const tokenEndpoint = 'https://api.geckoterminal.com/api/v2/networks/eth/tokens/'
    const [isToken, setIsToken] = useState(false)
    const [isPool, setIsPool] = useState(false)
    const [isOver, setIsOver] = useState(true)
    return(
    <div className="mt-20 w-full">
        <div className="w-full py-4 mb-10 px-3 flex lg:flex-row flex-col ">
            <div className="lg:w-[45%] w-[95%] mb-5 py-3 px-2 lg:h-[300px] h-[200px] rounded-xl border bg-[#171717] hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
                <div className="py-0.5 px-4 ">
                    <p className="text-xl">Areon Tvl</p>
                </div>
                <div className="py-0.5 px-5">
                    <p className="text-4xl">$2.34b</p>
                </div>
            </div>
            <div className="lg:w-[45%] w-[95%] py-3 px-2 lg:h-[300px] h-[200px] rounded-xl border bg-[#171717]  hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
            <div className="py-0.5 px-4 ">
                    <p className="text-xl">Volume 24hrs</p>
                </div>
                <div className="py-0.5 px-5">
                    <p className="text-4xl">$2.34b</p>
                </div>
            </div>
        </div>
        {/** the Line like */}
        <div className=" w-[94%]  ml-auto mr-auto bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 p-4 rounded-lg flex items-center">
             <div className="ml-auto mr-auto">Volume 24H:  $2.56b</div>
             <div className="ml-auto mr-auto">TVL:  $6.63b</div>
             <div className="ml-auto mr-auto">Fees 24H: $12.63K</div>
        </div>
        <div className="mt-20 lg:ml-11 mb-20 lg:w-[400px] w-[95%] py-3 px-2 flex h-12 bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60  p-4 rounded-lg items-center ">
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