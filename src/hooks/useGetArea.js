import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetTokens = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,
        areaVolume, setAreaVolume,
        areaDayChange,setAreaDayChange,
        setAreaVol,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/networks/areon-network/tokens/0x1d1bc800e71576a59f9ef88bb679fa13c2e10abf'
    const getPools = async () => {
        try {
            const response = await axios.get(EndPoint);
            console.log('res data token',response.data)
            setAreaPrice(response.data.data.attributes.price_usd)
            setAreaVolume(response.data.data.attributes.volume_usd.h24)
            //setAreaDayChange(response.data.data.attributes.price_change_percentage.h24)
           
            console.log('token',response.data)
            

        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(() => {
       
       //clear interval
       getPools()
    },[])
   return pools 
}