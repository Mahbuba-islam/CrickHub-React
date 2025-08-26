import { useState } from "react";

const Headers = () => {
    const [coin, setCoin] = useState(0)
    const handleClaimCredit = () => {
     const addCoin = 100000
     const newCoin = coin + addCoin
     setCoin(newCoin)
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
           
        </div>
        </div>
        
    );
};

export default Headers;