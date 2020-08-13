import React, { useState } from 'react';
import CreateCharacter from "./Components/CreateCharacter/CreateCharacter";
import DMPlan from "./Components/DMPlan/DMPlan";
import CharacterSheet from "./Components/CharacterSheet/CharacterSheet";
import './App.css';

const App = () => {
  const [DM, setDM] = useState(false);
  const [player, setPlayer] = useState(false);
  const [character, setCharacter] = useState({});
  const [ready2play, setReady2Play] = useState(false);

  const updateCharacter = (newChar) => {
    setCharacter(newChar);
  }
  const updateReady2Play = (boolean) => {
    setReady2Play(boolean)
  }

  if (ready2play) {
    return (
      <div id="App">
        <CharacterSheet character={character} />
      </div>
    )
  }

  if (DM) {
    return (
      <div id="App">
        <div id="Button_container">
          <button onClick={() => { setPlayer(false); setDM(true); }}>DM</button>
          <button onClick={() => { setDM(false); setPlayer(true); }}>Player</button>
        </div>
        <DMPlan />
      </div>
    )
  }

  if (player) {
    return (
      <div id="App">
        <CreateCharacter updateCharacter={updateCharacter} updateReady2Play={updateReady2Play} />
      </div>
    )
  }

  return (
    <div id="App">
      <div id="Button_container">
        <button onClick={() => { setPlayer(false); setDM(true); }}>DM</button>
        <button onClick={() => { setDM(false); setPlayer(true); }}>Player</button>
      </div>
    </div>
  );
}

export default App;
