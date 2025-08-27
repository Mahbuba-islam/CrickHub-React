import { useEffect, useState } from "react";
import { getNumberFromLS, setNumberInLS } from "../../utility/utility";
import { toast } from "react-toastify";
import Players from "../Players/Players";

const Headers = () => {
    const [coin, setCoin] = useState(0)


    const handleClaimCredit = () => {
     const addCoin = Math.floor(Math.random()*(5000000000-1000000000))+1
     const newCoin = coin + addCoin
     setCoin(newCoin)
     setNumberInLS(addCoin)
     toast.success(`💰 ${addCoin.toLocaleString()} added to your wallet`)
    }

  useEffect(()=> {
    const getCoinFromLs = getNumberFromLS()
    setCoin(getCoinFromLs)
  },[])


  const handleChoosePlayer = (playerPrice) => {
   const remainingCoin = coin - playerPrice
 playerPrice<coin ? (setCoin(remainingCoin),
 toast.success(`✅ player Added`)) : toast.error(`❌ not enough coins `)
   
  }


    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3">
            
            <div><img src="/src/assets/logo.png" alt="" /></div>
            <ul className="mt-2 flex md:flex-row flex-col space-x-4 items-center text-gray-500 font-bold">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedulles</li>
                <li className="btn bg-gray-300 border border-1 rounded p-2 text-black font-bold" ><span>{coin}</span> Coin 🪙</li>
             </ul>
            
        </div>
        <div className="bg-gradient-to-r from-[#7182cc] via-[#393838] to-[#cb8e87]  space-y-4 py-10 rounded mt-12 md:m">
            <img className="mx-auto w-44" src="/src/assets/banner-main.png" alt="" />
            <div className="space-y-3">
            <h1 className="md:text-xl text-xs font-bold text-white">Assemble Your Ultimate Dream 11 Cricket</h1>
            <p className="text-xs text-gray-300">Beyond Boundaries Limits</p>
            <button onClick={handleClaimCredit} className="btn bg-[#e2f829] p-2 rounded font-bold">Claim Free Credit</button>
            </div>

           <Players handleChoosePlayer={handleChoosePlayer}></Players>
        </div>
        </div>
        
    );
};

export default Headers;