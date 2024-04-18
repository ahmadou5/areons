"use client";
import axios from 'axios'
import { useState, useEffect } from "react";
import { GlobalContext } from "@/context/context";
import { Overview } from "../Overview";
import { Pools } from "../Pools";
import { Tokens } from "../Tokens";
import { Chart } from "../suspense/chart";
import { useGetTokens } from "@/hooks/useGetArea";
import { Each } from "./Each";
import { useGetTvl } from "@/hooks/useGetTvl";
export const HomeView = () => {
  const { areaTvl, areaVol, areaPrice, trendingPools,setTrendingPools, isChart, setChart, setSymbol, setPoolAddress, setSells, setDex ,setBuys,  setPriceUsdt, setPriceArea, setFiveMChange, setHChange, setSixHChange, setDayChange, setVolume, setLiquidity, setFdv, setMarketCap, setNewPools, newPools,  areaImg } = GlobalContext();
  const Token = useGetTokens();
  const Tvl = useGetTvl();
  const tokenEndpoint =
    "https://api.geckoterminal.com/api/v2/networks/eth/tokens/";
  const [isToken, setIsToken] = useState(false);
  const [isPool, setIsPool] = useState(false);
  const [isOver, setIsOver] = useState(true);
  const number = 234234;
  const language = "en";
  
  


  // Example usage
  useEffect(() => {
    const baseUrl = "https://api.geckoterminal.com/api/v2/networks/bsc/trending_pools?page=1";
    const NewUrl = "https://api.geckoterminal.com/api/v2/networks/bsc/new_pools?page=1";
    const getPools = async () => {
        try {
            const response = await axios.get(baseUrl);
            console.log('res data',response.data.data)
            setTrendingPools(response.data.data)
            

        } catch (error) {
            console.log(error)
        }
    } 
    getPools()
    const getNewPools = async () => {
        try {
            const response = await axios.get(NewUrl);
            console.log('res data',response.data.data)
            setNewPools(response.data.data)
            

        } catch (error) {
            console.log(error)
        }
    } 
    getNewPools()
    
  }, [])
  
  

  console.log(
    Intl.NumberFormat(language, { notation: "compact" }).format(number),
    "USDT"
  );
  return (
    <div className="mt-32 w-full">
      <div className="w-[96%] ml-auto mr-auto mt-16 py-2 px-5 rounded-xl ">
        <div>
          <p className="text-start text-5xl">
            Explore CryptoCurrency data on Areon Chain
          </p>
          <p className="text-start mt-2 text-xl">{`The cryptocurrency market cap on Areon Chain today is $${Intl.NumberFormat(
            language,
            { notation: "compact" }
          ).format(areaTvl)}, a 0% change in the last 24 hours`}</p>
        </div>
      </div>
      <div className="w-full  py-4 mb-10 mt-10 px-3 flex lg:flex-row flex-col ">
        <div className="lg:w-[45%] w-[95%] mb-5 py-4 px-3 lg:h-[200px] h-[200px] rounded-xl border bg-[#171717] hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
          <div className="py-4 flex px-8 ">
            <img src='./assets/qqw.png' className="w-14 rounded-full h-14 bg-blend-lighten mr-2 ml-2" />
            <p className="mt-2  mb-0 text-3xl">Areon Tvl</p>
          </div>
          <div className="py-1.5 px-9">
            <p className="text-6xl">{`$${Intl.NumberFormat(language, {
              notation: "compact",
            }).format(areaTvl)}`}</p>
          </div>
        </div>
        <div className="lg:w-[45%] w-[95%] py-3 px-2 lg:h-[200px] h-[200px] rounded-xl border bg-[#171717]  hover:border-blue-300 border-blue-600/45 ml-auto mr-auto ">
          <div className="py-4 px-8 flex ">
            <img src="./assets/tren.png" className="w-16 h-12 mr-2 ml-2" />
            <p className="text-3xl mt-2 mb-0">Volume 24hrs</p>
          </div>
          <div className="py-0.5 flex px-9">
            <p className="text-6xl">{`$${Intl.NumberFormat(language, {
              notation: "compact",
            }).format(areaVol)}`}</p>
          </div>
        </div>
      </div>

      
      {/** the Line like */}
      <div className=" w-[94%]  ml-auto mr-auto bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 p-4 rounded-lg flex items-center">
        <div className="ml-auto mr-auto">{`Volume 24H:  $${Intl.NumberFormat(
          language,
          { notation: "compact" }
        ).format(areaVol)}`}</div>
        <div className="ml-auto mr-auto">{`Tvl:  $${Intl.NumberFormat(
          language,
          { notation: "compact" }
        ).format(areaTvl)}`}</div>
        <div className="ml-auto mr-auto">{`Price:  $${areaPrice.slice(
          0,
          7
        )}`}</div>
      </div>
      <div className="mt-20 lg:ml-5 mb-20 ml-auto mr-auto lg:w-[400px] w-[95%] py-3 px-2 flex h-12 bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60  p-4 rounded-lg items-center ">
        <div
          onClick={() => {
            setIsOver(true);
            setIsPool(false);
            setIsToken(false);
          }}
          className={`ml-auto ${
            isOver && "bg-blue-600"
          } text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}
        >
          Overview
        </div>
        <div
          onClick={() => {
            setIsOver(false);
            setIsPool(true);
            setIsToken(false);
          }}
          className={`ml-auto ${
            isPool && "bg-blue-600"
          } text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}
        >
          Pools
        </div>
        <div
          onClick={() => {
            setIsOver(false);
            setIsPool(false);
            setIsToken(true);
          }}
          className={`ml-auto ${
            isToken && "bg-blue-600"
          } text-center rounded-lg h-[97%] w-[30%] cursor-pointer mr-auto`}
        >
          Tokens
        </div>
      </div>
      <div className="w-[]">
        {isToken && <Tokens />}
        {isOver && <Overview />}
        {isPool && <Pools />}
      </div>
      {isChart && <Chart />}
    </div>
  );
};
