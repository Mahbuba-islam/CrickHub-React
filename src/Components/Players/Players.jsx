import { useEffect, useState } from "react";
import Player from '../Player/Player'
import SelectedPlayers from '../SelectedPlayer/SelectedPlayer'
import { toast } from "react-toastify";
import { getPlayerFromLS, saveItemInLS } from "../../utility/utility";

const Players = ({coin, setCoin}) => {

    const [players, setPlayers] = useState([])
   useEffect(()=> {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
   },[])


   const [selected , setSelected] = useState([])

   const handleChoosePlayer = (player) => {
     const remainingCoin = coin - player.price
   const allSelected =  [...selected, player]
   !selected.includes(player)? (setSelected(allSelected),
    saveItemInLS(allSelected),
  
player.price<coin ? (setCoin(remainingCoin),
toast.success(`✅ ${player.name} joined your team! You spent ${player.price} coins 💸`)
) : toast.error(`❌ not enough coins in your wallet`))

   
    :   toast.error('already chosen')
  }


  useEffect(()=> {
   const allSelected =  getPlayerFromLS()
   setSelected(allSelected)
  },[])

   const [showSelectedPlayers, setShowSelectedPlayers] = useState(false)

   const availableHandle = () => {
   setShowSelectedPlayers(false)
   
  }

   const selectedHandle = () => {
   setShowSelectedPlayers(true)
   
  }


    return (
     <div className="mt-10 px-4 sm:px-6 lg:px-8">
   
   
         {/* Header Section */}
   
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      {
      showSelectedPlayers?  <h1 className="font-bold text-xl sm:text-2xl p-2 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
      Players Selected {selected.length}/{players.length}
    </h1>: <h1 className="font-bold text-xl sm:text-2xl p-2 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
      Available Players
    </h1>
     }
   
    
    {/* Toggle Buttons */}
    <div className="flex border border-black rounded-lg text-sm overflow-hidden shadow-sm">
      <button onClick={availableHandle} className="p-2 font-bold bg-white hover:bg-gray-100 transition-colors duration-200">
        Available
      </button>
      <button onClick={selectedHandle} className="p-2 font-bold bg-white hover:bg-gray-100 transition-colors duration-200 border-l border-black">
        Selected
      </button>
    </div>
  </div>

<div>
  {
    showSelectedPlayers ? (<div className="grid grid-cols-1 gap-4 pb-52">
      {
        selected.map(selectedPlayer => <SelectedPlayers selectedPlayer={selectedPlayer}></SelectedPlayers>)
      }
      <div className="border border-black w-40 rounded-lg p-2">
        <button className="text-center font-bold p-2  bg-lime-300 w-full  rounded-lg  ">Add More Player</button>
        </div>
    </div>)
 :
    (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-52">
    {players.map(player => (
      <Player key={player.id} player={player} handleChoosePlayer={handleChoosePlayer}/>
    ))}
</div>)  
  }
  
      
  
</div>






</div>
    );
};

export default Players;