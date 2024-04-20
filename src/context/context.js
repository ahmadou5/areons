'use client'
import { useContext, createContext, useState } from "react"

export const areonContext = createContext({});

export const AreonContextProvider = ({children}) => {
    const [isConnectModal, setIsConnectModal] = useState(false);
    const [symbol, setSymbol] = useState("BTC/USDT");
    const [areaVol, setAreaVol] = useState('')
    const [areaImg, setAreaImg] = useState('')
    const [trendingPools,setTrendingPools] = useState([]);
    const [newPools,setNewPools] = useState([]);
    const [tokens,setTokens] = useState([])
    const [areaPrice, setAreaPrice] = useState('')
    const [poolAddress, setPoolAddress] = useState('')
    const [areaTvl, setAreaTvl] = useState(0)
    const [priceUsdt, setPriceUsdt] = useState('')
    const [priceArea, setPriceArea] = useState('')
    const [fiveMChange,setFiveMChange] = useState('')
    const [hChange,setHChange] = useState('')
    const [sixHChange,setSixHChange] = useState('')
    const [dayChange,setDayChange] = useState('')
    const [volume,setVolume] = useState(0)
    const [liquidity,setLiquidity] = useState(0);
    const [fdv,setFdv] = useState(0)
    const [block,setBlock] = useState(0)
    const [gasPrice,setGasPrice] = useState(0)
    const [transactionsCount,setTransactionsCount] = useState(0)
    const [marketCap,setMarketCap] = useState(0)
    const [buys,setBuys] = useState(0)
    const [sells,setSells] = useState(0)
    const [dex,setDex] = useState('')
    const [balance, setBalance] = useState(0)
    const [wallet, setWallet] = useState('')
    const [pooler, setPooler] = useState([])
    const [isChart,setChart] = useState(false)
    const value = {
       isConnectModal,
       wallet,
       pooler, 
       isChart,
       symbol, 
       priceUsdt, 
       priceArea, 
       fiveMChange,
       hChange,
       sixHChange,
       dayChange,
       volume,
       liquidity,
       fdv,
       marketCap,
       buys,
       sells,
       dex,
       poolAddress, 
       areaTvl, 
       areaVol, 
       areaPrice,
       areaImg,
       trendingPools,
       newPools,
       tokens,
       transactionsCount,
       block,
       gasPrice,
       setGasPrice,
       setBlock,
       setTransactionsCount,
       setTokens,
       setNewPools,
       setTrendingPools,
       setAreaImg, 
       setAreaPrice,
       setAreaVol,
       setAreaTvl,
       setPoolAddress,
       setDex,
       setSells,
       setBuys,
       setMarketCap,
       setFdv,
       setLiquidity,
       setVolume,
       setDayChange,
       setSixHChange,
       setHChange,
       setFiveMChange,
       setPriceArea,
       setPriceUsdt,
       setSymbol,
       setChart,
       setPooler,
       setWallet,
       setIsConnectModal
    }
    return(
    <areonContext.Provider value={value}>
     {children}
    </areonContext.Provider>
    )
}

export const GlobalContext = () => useContext(areonContext)