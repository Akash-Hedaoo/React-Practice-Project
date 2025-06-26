import React from 'react';

const FriendCard = ({ frienddata , ondelete }) => {
  const { id, name, image, stack, Description } = frienddata;

  return (
    <div className="w-72 h-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      
      {/* Image Section */}
      <div className="w-full h-[55%] relative group overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
      </div>

      {/* Info Section */}
      <div className="w-full h-[45%] p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-white mb-1">{name}</h1>
          <p className="text-sm text-cyan-300 font-mono">{stack}</p>
          <p className="text-sm text-zinc-200 mt-2">{Description}</p>
        </div>

        <button onClick={()=>ondelete(id)} className="mt-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm font-semibold py-2 rounded-xl shadow-md hover:from-red-700 hover:to-pink-700 transition-all duration-300">
          🚫 Remove Buddy
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
