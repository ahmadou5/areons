'use client'
import { useContext, createContext, useState } from "react"

export const areonContext = createContext({});

export const AreonContextProvider = ({children}) => {
    const [isConnectModal, setIsConnectModal] = useState(false);
    const [symbol, setSymbol] = useState("BTC/USDT");
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