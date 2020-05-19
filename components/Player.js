const Player = ({ player }) => {
  return (
    <>
      <h3>{player.name}</h3>
      <h3>Has {player.accounts.length} accounts registered with you</h3>
    </>
  );
};

export default Player;
