const Player = ({ player }) => {
  return (
    <>
      <h3>{player.player}</h3>
      <ul>
        {player.accounts.map((acc) => (
          <li>{acc}</li>
        ))}
        {/* <h3>Has {player.accounts.length} accounts registered with you</h3> */}
        {/* {player.accounts.map((account) => Object.entries(account))} */}
      </ul>
    </>
  );
};

export default Player;
