'use client'
import { IoMenu,IoLogoGithub,  } from "react-icons/io5";
import { motion } from 'framer-motion';
import { GlobalContext } from "@/context/context";
import { useState } from "react";
import { formatAddress } from "@/config/format";
//import { Alert } from "@/suspense/Alert";
export const Navbar2 = () => {
    const [isActive, setisActive] = useState()
    const { setIsConnectModal, address:userAddress } = GlobalContext()
    const Menu = [
      {
        name: 'given'
      }
    ]
    return(
        
    <>
    <nav className="w-full px-2 z-0 mt-3 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-[100%]  backdrop-blur-lg bg-clip-padding bg-[#171717] border border-blue-600/25 bg-opacity-60 md:w-880 p-4 rounded-lg flex items-center">
          <div className="flex py-0.5 px-2">
            <img src="./assets/areonLogo.png" className=" h-8 mt-0.5 font-medium"/>
            <p className="ml-0.5 text-3xl text-white/55 font-extralight">Terminal</p>
          </div>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            {/** To do Search <div className="bg-[#171717] hidden border ml-auto mr-20  border-blue-600/85 bg-opacity-60 h-[90%] w-[60%] md:w-880 p-4 rounded-lg lg:flex items-center"></div> */}
                
            {
              
            }
          </div>
          <div className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </div>
          
          
        </div>
      </nav>
    </>
    )
}