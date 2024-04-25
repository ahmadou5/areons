import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetPools = () => {
    const { pooler, setPooler , areaDayChange,setAreaDayChange, } = GlobalContext();
    const [pools, setPools] = useState([])
    const EndPoint = 'https://api.geckoterminal.com/api/v2/networks/areon-network/pools/0x74fabf70187fd8c80b4174a2564b23085ab2e9d5'
    useEffect(() => {
        const getPools = async () => {
            try {
                const response = await axios.get(EndPoint);
                setPools(response.data)
                setAreaDayChange(response.data.data.attributes.price_change_percentage.h24)
               // setPooler(response.data)
                //console.log(response.data)
                console.log('data Apool',response.data.data.attributes.price_change_percentage.h24)
            } catch (error) {
                console.log(error)
            }
        } 
        getPools()
    },[])
   return pools 
}