import { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';

import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import AddRelationship from '../components/AddRelationship';
import * as playerdata from '../player.json'; //TODO

export default function Players() {
  // const [players, setPlayers] = useState([]);
  const { players } = useContext(PlayersContext);
  // useEffect(() => {
  //   setPlayers(getPlayers());
  // }, []);

  // const getPlayers = () => {
  //   // TODO - async request for players from db

  //   return players;
  // };
  return (
    <>
      <AddPlayer />
      <AddRelationship />
      {players.length > 0 &&
        players.map((player) => <Player player={player} />)}
    </>
  );
}
