import React, { useState } from "react";
import data from "./data";
import Players from './Components/Players';
import Refresh from './Components/Refresh';

const App = () => {
  const [player, setPlayer] = useState(data);

  function removePlayer(id) {
    const newPlayer = player.filter(player => player.id !== id)
    console.log(id);
    setPlayer(newPlayer);
  }


  if (player.length === 0) {
    return <Refresh setPlayer={setPlayer}  data={data}/>
  }

  return (
    <Players players={player} removePlayer={removePlayer} />
  )
};

export default App;
