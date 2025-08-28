import { FaTrashAlt } from "react-icons/fa";

const SelectedPlayer = ({selectedPlayer}) => {
const {name, image, battingStyle} = selectedPlayer
    return (
        <div className="flex justify-between items-center border border-gray-400 rounded-lg p-4">
            <div className="flex items-center space-x-4">
                <img className="w-20 h-15 rounded-lg" src={image} alt="" />
            <div>
            <h1 className="font-bold text-lg">{name}</h1>
            <p>{battingStyle}</p>
            </div>
           </div>
           <button className="text-red-700"><FaTrashAlt /></button>
        </div>
    );
};

export default SelectedPlayer;