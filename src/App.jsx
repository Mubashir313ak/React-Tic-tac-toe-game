import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  //const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = "X";

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActPlayer) => (curActPlayer === "X" ? "O" : "X"));

    const currentPlayer = activePlayer;

    const updatedTurns = [
      ...gameTurns,
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
    ];

    setGameTurns(updatedTurns);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
