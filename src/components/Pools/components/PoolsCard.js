'use client'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useGetPools } from "@/hooks/useGetPools";
import { Each } from "@/components/Home/Each";
import { GlobalContext } from "@/context/context";
import axios from 'axios'
import { useState, useEffect } from "react";

export const PoolsCard = () => {
    const { isChart, setChart, setSymbol, setPoolAddress, setSells, setDex ,setBuys,  setPriceUsdt, setPriceArea, setFiveMChange, setHChange, setSixHChange, setDayChange, setVolume, setLiquidity, setFdv, setMarketCap} = GlobalContext()
    const [pools,setPools] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(20)
    const [total,setTotal] = useState(0)
    const number = 234234;
    const language = "en"
    const EndPoint = `https://api.geckoterminal.com/api/v2/networks/areon-network/pools`
    
    useEffect(() => {
        
        const getPools = async () => {
            try {
                
                const response = await axios.get(EndPoint,{maxContentLength: 10});
                setPools(response.data.data)
                setSymbol(response.data.data.item.attributes.name)
                console.log(response.data.data)
            } catch (error) {
                console.log(error)
            }
        } 
        getPools()
    },[])
    console.log(pools,'poolsss' )
    return(
    <div className="w-[97%]  bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 items-center rounded-3xl ml-auto mr-auto h-auto">
        <div className="w-[100%] flex text-md text-center py-3 px-4 h-10 mb-auto rounded-t-3xl bg-white/5">
            <div className=" w-[5%] ml-2 text-center ">#</div>
            <div className=" ml-1 w-[30%]  text-center ">Pool</div>
            <div className=" ml-2 w-[30%]  text-center">24hr Price Change</div>
            <div className=" ml-2 w-[30%]  text-center">TVL</div>
            <div className=" ml-2 w-[30%]  text-center">1hr Volume</div>
            <div className=" ml-2 w-[30%]  text-center">24H Volume</div>
        </div>
        <div className="w-full h-[86%]">
        <Each of={pools} render={(item,index) => (
        <div  className="w-[100%] text-center  text-md flex py-3 px-4 border border-blue-600/15 h-12 mb-auto">
            <div className=" ml-2  w-[5%]  text-center">{index + 1}</div>
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
        }} className=" ml-2 lg:ml-3 w-[30%] cursor-pointer text-center">{item.attributes.name}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`${item.attributes.price_change_percentage.h24}%`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.attributes.reserve_in_usd)}`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.attributes.volume_usd.h1)}`}</div>
            <div className=" ml-2 lg:ml-3 w-[30%] text-center">{`$${Intl.NumberFormat(language, {notation: "compact"}).format(item.attributes.volume_usd.h24)}`}</div>
        </div>
        )} />
        </div>
        <div className="w-full py-2 flex px-4 rounded-b-3xl bg-white/5  mt-auto h-2 ">
            
        </div>
    </div>
)
}