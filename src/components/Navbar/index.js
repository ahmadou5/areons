'use client'
import { IoMenu,IoLogoGithub,  } from "react-icons/io5";
import { ethers, parseUnits, formatEthers } from 'ethers'
import { motion } from 'framer-motion';
import { GlobalContext } from "@/context/context";
import { useState } from "react";
import { formatAddress } from "@/config/format";
import { useGetOnchainData } from "@/hooks/useGetOnchainData";
import { useGetTokens } from "@/hooks/useGetArea";
// import { useGetTokens } from "@/hooks/useGetArea";
//import { Alert } from "@/suspense/Alert";
export const Navbar2 = () => {
    const trx = useGetOnchainData()
    const area = useGetTokens()
    const [isActive, setisActive] = useState()
    const { setIsConnectModal, address:userAddress, areaPrice,transactionsCount,setTransactionsCount,gasPrice, block } = GlobalContext()
    const Menu = [
      {
        name: 'given'
      }
    ]
    return(
        
    <>
    <nav className="w-full px-2 z-0 mt-3 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-[98%]  backdrop-blur-lg bg-clip-padding bg-[#171717]  border border-blue-600/25 bg-opacity-60 md:w-880 p-4 rounded-lg flex items-center">
          <div className="flex py-0.5 px-2">
            <img src="./assets/areonLogo.png" className=" h-8 mt-0.5 font-medium"/>
            <p className="ml-0.5 text-3xl text-white/55 font-extralight">-info</p>
          </div>
          <div className="lg:flex hidden py-1 px-2 border border-blue-500/15 w-[75%] rounded-md ml-auto mr-2 bg-white/25">
            <div className="flex ml-2 mr-auto">
            <img src="./assets/1trx.png" className=" mt-1.5 h-8 w-auto  rounded-full font-medium"/>
            <p className="ml-0.5 text-xl py-2 text-white/55 font-extralight">{`Transactions: ${transactionsCount}`}</p>
            </div>
            <div className="flex ml-2 mr-auto">
            <img src="./assets/cube.png" className=" mt-1.5 h-8 w-auto bg-[#171717]/0 rounded-full font-medium"/>
            <p className="ml-0.5 text-xl py-2 text-white/55 font-extralight">{`Latest Block: ${block}`}</p>
            </div>
            <div className="flex ml-2 mr-auto">
            <img src="./assets/mai.png" className=" mt-2.5 h-6 w-6 rounded-full font-medium bg-[#171717]/0"/>
            <p className="ml-0.5 text-xl py-2 text-white/55 font-extralight">{`Gas: ${gasPrice}`}</p>
            </div>
            <div className="flex mr-2 ml-auto">
            <img src="./assets/qqw.png" className=" mt-1.5 h-8 w-auto  bg-[#171717]/0 rounded-full  font-medium"/>
            <p className="ml-0.5 text-xl text-white/55 py-2 font-extralight">{`Price: ${areaPrice?.slice(0,7)}`}</p>
            </div>
          </div>
         
          <div className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </div>
          
          
        </div>
      </nav>
    </>
    )
}