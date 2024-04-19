'use client'
import { IoMenu,IoLogoGithub,  } from "react-icons/io5";
import { motion } from 'framer-motion';
import { GlobalContext } from "@/context/context";
import { useState } from "react";
import { formatAddress } from "@/config/format";
//import { Alert } from "@/suspense/Alert";
export const Navbar2 = () => {
    const [isActive, setisActive] = useState()
    const { setIsConnectModal, address:userAddress, areaPrice } = GlobalContext()
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
            {/**<img src="./assets/areonLogo.png" className=" h-8 mt-0.5 font-medium"/>**/}
            <p className="ml-0.5 text-3xl text-white/55 font-extralight">Zodiac info</p>
          </div>
         
          <div className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </div>
          
          
        </div>
      </nav>
    </>
    )
}