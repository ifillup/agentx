import { useContext, useState, useLayoutEffect } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import { StatementContext } from '../context/statementContext/statementState';
import Transaction from './Transaction';
import Total from './Total';

const Report = ({ player }) => {
  const { players } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);
  const [total, setTotal] = useState(0);
  const [playerTransactions, setPlayerTransactions] = useState(0);

  useLayoutEffect(() => {
    setTotal(0);
    
  }, [player]);

  const formatNumber = (num) => {
    return Math.round(num * 100) / 100;
  };

  const sumTotal = (value) => {
    console.log('adding', value, 'to', total);

    setTotal((prevTotal) => {
      console.log('prev', prevTotal, 'value', value);
      return prevTotal + value;
    });
  };
  let accounts = player.accounts.map((acc) => `${acc.accountID}${acc.clubID}`);

  return (
    <>
      {player && `generating report for playerid: ${player.name}`}
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Club</th>
            <th>Account</th>
            <th>Account Name</th>
            <th>WinLoss</th>
            <th>Rake Paid</th>
            <th>Rakeback</th>
            <th>Total Chips</th>
            <th>Total USD</th>
          </tr>
        </thead>
        <tbody>
          {player?.accounts &&
            transactions
              .filter((t) => accounts.includes(`${t.playerID}${t.club}`))
              .map((t) => (
                <Transaction
                  player={player}
                  transaction={t}
                  sumTotal={sumTotal}
                  formatNumber={formatNumber}
                />
              ))}
        </tbody>
      </table>
      
      {transactions.length >0 ? <Total total={total} formatNumber={formatNumber}  /> : 'Input your results to generate reports' }
    </>
  );
};

export default Report;
