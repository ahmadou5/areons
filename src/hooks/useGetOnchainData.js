import { useEffect, useState } from "react"
import { GlobalContext } from "@/context/context"
import axios from 'axios'
export const useGetOnchainData = () => {
    const { pooler, setPooler,  setAreaImg, setAreaPrice,transactionsCount, gasPrice,setGasPrice,setTransactionsCount,block,setBlock,
        setAreaVol,
        setAreaTvl, } = GlobalContext();
    const [pools, setPools] = useState([])
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS Anywhere proxy URL
    const targetUrl = 'https://mainnet-api.areonscan.com/external/general-stats'; // Target API endpoint
    const EndPoint = 'https://api.llama.fi/v2/chains'
    const TrxEndpoint = 'https://mainnet-api.areonscan.com/external/general-stats'

    const getTransaction = async () => {
        try {
            const response = await axios.get(TrxEndpoint);
            //const AreonS = response.data.find((chain) => chain.name === 'Areon Network');
            console.log('Trx',response.data.result)
            setTransactionsCount(response.data.result.totalTransactionCount)
            setBlock(response.data.result.lastBlockNumber)
            setGasPrice(response.data.result.gasPrice)
           // setAreaTvl(AreonS.tvl)
           
           // setPooler(response.data)
           // console.log('',response.data)
            

        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(() => {
        getTransaction()
        
    },[])
   return pools 
}