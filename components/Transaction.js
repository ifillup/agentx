import { useContext, useState, useEffect } from 'react';
import { ClubsContext } from '../context/clubsContext/clubsState';
import { PlayersContext } from '../context/playersContext/playersState';

const Transaction = ({ player, transaction: t, sumTotal, formatNumber }) => {
  const { clubs } = useContext(ClubsContext);
  const { players } = useContext(PlayersContext);
  const { chipValue } = clubs.find((club) => club.clubID == t.club);
  const rakeback =
    player.accounts.filter(
      (acc) => acc.accountID == t.playerID && acc.clubID == t.club
    )[0].revenue_share / 100;
  console.log(rakeback);
  let total = +t.rake * rakeback + +t.profit;

  let totalCoverted = total * chipValue;

  useEffect(() => {
    sumTotal(totalCoverted);
    console.log('sending to total $$:', totalCoverted);
  }, [t]);
  return (
    <tr>
      <td>{t.club}</td>
      <td>{t.playerID}</td>
      <td>{t.playername}</td>
      <td>{t.profit}</td>
      <td>{t.rake}</td>
      <td>{formatNumber(+t.rake * rakeback)}</td>
      <td>{formatNumber(total)}</td>
      <td>{formatNumber(totalCoverted)}</td>
    </tr>
  );
};

export default Transaction;

{
  /* club: '',
    playername: '',
    playerID: '',
    profit: '',
    rake: '', */
}
