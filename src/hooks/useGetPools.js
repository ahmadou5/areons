import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetPools = () => {
    const { pooler, setPooler } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/networks/areon-network/pools'
    useEffect(() => {
        const getPools = async () => {
            try {
                const response = await axios.get(EndPoint);
                setPools(response.data)
               // setPooler(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        } 
        getPools()
    },[])
   return pools 
}