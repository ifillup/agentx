import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
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
    <Layout>
      <AddPlayer />
      {players.map((player) => (
        <Player player={player} />
      ))}
    </Layout>
  );
}
