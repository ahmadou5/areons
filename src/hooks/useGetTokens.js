import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetToken = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,
        setAreaVol,tokens,setTokens,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/tokens/info_recently_updated'
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
                const AreonS = response.data.data.filter((item) => item.relationships.network.data.id === 'bsc')
                console.log('Token',response.data.data)
                console.log('fil', AreonS)
                setTokens(AreonS)
               
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