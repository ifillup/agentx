import { useState, useEffect, useContext } from 'react';

import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import AddRelationship from '../components/AddRelationship';
import * as playerdata from '../player.json'; //TODO

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(getPlayers());
  }, []);

  const getPlayers = () => {
    // TODO - async request for players from db

    return playerdata.players;
  };
  return (
    <>
      <AddPlayer />
      <AddRelationship />
      {players.map((player) => (
        <Player player={player} />
      ))}
    </>
  );
}
