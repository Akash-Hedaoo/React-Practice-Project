import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  
  

  return (
    <div className="w-full h-screen p-5 flex items-center justify-center bg-zinc-800 text-xl text-zinc-200">
      <div className="bg-zinc-600 p-5 flex-col items-center justify-center rounded-xl">
        <Create />
        <Read />
      </div>
    </div>
  );
};

export default App;



