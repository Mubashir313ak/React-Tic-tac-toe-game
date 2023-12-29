import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleediting = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editplayer = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editplayer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editplayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleediting}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
