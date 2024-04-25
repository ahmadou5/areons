import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetTokens = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,
        areaDayChange,setAreaDayChange,
        setAreaVol,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/networks/areon-network/tokens/0x298b6a733cd34e41ca87b264d968c8ca7b0b9931'
    const getPools = async () => {
        try {
            const response = await axios.get(EndPoint);
            console.log('res data token',response.data)
            setAreaPrice(response.data.data.attributes.price_usd)
            //setAreaDayChange(response.data.data.attributes.price_change_percentage.h24)
            setAreaVol(response.data.data.attributes.volume_usd.h24)
            setAreaImg(response.data.data.attributes.image_url)
           // setPooler(response.data)
            console.log('token',response.data)
            

        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(() => {
       const intervalId = setInterval(getPools(),10000) 
       //clear interval
       return () => clearInterval(intervalId);
    },[])
   return pools 
}