import { useContext, useState } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
const Player = ({ player }) => {
  const { deletePlayer } = useContext(PlayersContext);
  return (
    <>
      <h3>{player.name}</h3>
      <button onClick={() => deletePlayer(player.id)}>delete</button>
      {player?.accounts &&
        player.accounts.map((account) => (
          <p>{`accountid: ${account.accountID} username: ${account.name} on club: ${account.clubID} rakeback: ${account.revenue_share}`}</p>
        ))}
    </>
  );
};

export default Player;

// <ul>
// {player.accounts.map((acc) => (
//   <li>{acc}</li>
// ))}
// {/* <h3>Has {player.accounts.length} accounts registered with you</h3> */}
// {/* {player.accounts.map((account) => Object.entries(account))} */}
// </ul>
