const Player = ({ player }) => {
  return (
    <>
      <h3>{player.name}</h3>
      {/* <h3>Has {player.accounts.length} accounts registered with you</h3> */}
      {/* {player.accounts.map((account) => Object.entries(account))} */}
    </>
  );
};

export default Player;
