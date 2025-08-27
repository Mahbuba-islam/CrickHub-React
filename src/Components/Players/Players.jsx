import { useEffect, useState } from "react";
import Player from '../Player/Player'


const Players = ({handleChoosePlayer}) => {
 
    const [players, setPlayers] = useState([])
   useEffect(()=> {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
   },[])

    return (
     <div className="mt-10 px-4 sm:px-6 lg:px-8">
  {/* Header Section */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
    <h1 className="font-bold text-xl sm:text-2xl p-2 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
      Available Players
    </h1>
    
    {/* Toggle Buttons */}
    <div className="flex border border-black rounded-lg text-sm overflow-hidden shadow-sm">
      <button className="p-2 font-bold bg-white hover:bg-gray-100 transition-colors duration-200">
        Available
      </button>
      <button className="p-2 font-bold bg-white hover:bg-gray-100 transition-colors duration-200 border-l border-black">
        Selected
      </button>
    </div>
  </div>

  {/* Players Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-52">
    {players.map(player => (
      <Player key={player.id} player={player} handleChoosePlayer={handleChoosePlayer}/>
    ))}
  </div>
</div>
    );
};

export default Players;