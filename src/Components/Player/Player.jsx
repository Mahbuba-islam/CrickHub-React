

const Player = ({player,handleChoosePlayer}) => {
    const {name, image, country, role, price, action, battingStyle} = player
    return (
        <div className="w-full max-w-sm mx-auto sm:max-w-none">
  <div className="border border-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
    
    {/* Player Image */}
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-md mb-4"
    />

    {/* Name */}
    <h1 className="font-bold text-xl text-gray-800 mb-2">{name}</h1>

    {/* Country & Role */}
    <div className="flex items-center justify-between mb-2">
      <p className="text-gray-500 text-sm">{country}</p>
      <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
        {role}
      </span>
    </div>

    <hr className="my-3" />

    {/* Action */}
    <div className="flex justify-between items-center font-semibold text-sm mb-2">
      <p className="text-gray-600">Action:</p>
      <p className="text-gray-800">{action}</p>
    </div>

    {/* Batting Style */}
    <div className="flex justify-between items-center font-semibold text-sm mb-2">
      <p className="text-gray-600">Batting Style:</p>
      <p className="text-gray-800">{battingStyle}</p>
    </div>

    {/* Price & Button */}
    <div className="flex justify-between items-center mt-4">
      <p className="font-bold text-green-600">Price: ${price}</p>
      <button onClick={()=> handleChoosePlayer(player)} className="px-4 py-2 border border-gray-400 text-black font-semibold rounded-lg hover:bg-[#e2f829]  transition-colors duration-200">
        Choose Player
      </button>
    </div>
  </div>
</div>
    );
};

export default Player;