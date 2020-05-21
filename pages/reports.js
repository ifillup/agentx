import SelectPlayer from '../components/SelectPlayer';
import Transaction from '../components/Transaction';
import { StatementContext } from '../context/statementContext/StatementState';
import { useContext } from 'react';

const Reports = () => {
  const { transactions } = useContext(StatementContext);
  console.log('transactions on report page', transactions);

  return (
    <>
      <SelectPlayer />
      <table class='table table-striped'>
        <thead>
          <tr>
            <th>Club</th>
            <th>Account</th>
            <th>WinLoss</th>
            <th>Rake</th>
            <th>Rakeback</th>
            <th>Total NET</th>
            <th>MYR</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Reports;
