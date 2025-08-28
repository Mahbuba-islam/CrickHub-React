

import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Headers from './Components/Headers/Headers'
import Players from './Components/Players/Players'
import {toast, ToastContainer} from 'react-toastify'
import { getNumberFromLS, setNumberInLS } from "./utility/utility";
// import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


function App() {

  const [coin, setCoin] = useState(0)
  
     const handleClaimCredit = () => {
     const addCoin = Math.floor(Math.random()*(50000000-10000000))+1
     const newCoin = coin + addCoin
     setCoin(newCoin)
     setNumberInLS(addCoin)
     toast.success(`💰 ${addCoin.toLocaleString()} added to your wallet`)
    }

   
   


  useEffect(()=> {
    const getCoinFromLs = getNumberFromLS()
    setCoin(getCoinFromLs)
  },[])




  return (
    <>
    <div>
       <Headers handleClaimCredit={handleClaimCredit} coin={coin}></Headers>
         <Players coin={coin} setCoin={setCoin}></Players>
       
        
        
     
    
     <Footer></Footer>
     <ToastContainer/>
    </div>
    
    </>
  )
}

export default App
