import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetTokens = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,
        setAreaVol,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/networks/bsc/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    useEffect(() => {
        const getPools = async () => {
            try {
                const response = await axios.get(EndPoint);
                setAreaPrice(response.data.data.attributes.price_usd)
                setAreaTvl(response.data.data.attributes.total_reserve_in_usd)
                setAreaVol(response.data.data.attributes.volume_usd.h24)
                setAreaImg(response.data.data.attributes.image_url)
               // setPooler(response.data)
                console.log('token',response.data)
                

            } catch (error) {
                console.log(error)
            }
        } 
        getPools()
    },[])
   return pools 
}