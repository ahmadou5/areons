import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetTvl = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,
        setAreaVol,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.llama.fi/v2/chains'
    useEffect(() => {
        {/**
            "gecko_id": "areon-network",
            "tvl": 26142.258104706554,
            "tokenSymbol": "AREA",
            "cmcId": "23262",
            "name": "Areon Network",
            "chainId": null
           */}
        const getPools = async () => {
            try {
                const response = await axios.get(EndPoint);
                const AreonS = response.data.find((chain) => chain.name === 'Areon Network');
                console.log('Tvl',AreonS.tvl)
                setAreaTvl(AreonS.tvl)
               
               // setPooler(response.data)
                console.log('tvl',response.data)
                

            } catch (error) {
                console.log(error)
            }
        } 
        getPools()
    },[])
   return pools 
}