import { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';

import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import AddRelationship from '../components/AddRelationship';
import * as playerdata from '../player.json'; //TODO
import UnsortedAccounts from '../components/UnsortedAccounts';

export default function Players() {
  // const [players, setPlayers] = useState([]);
  const { players, getPlayers } = useContext(PlayersContext);
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <AddPlayer />
      <AddRelationship />
      {players.length > 0 &&
        players.map((player) => <Player player={player} />)}
      {/* <UnsortedAccounts /> */}
    </>
  );
}
