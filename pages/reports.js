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
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} />
      ))}
    </>
  );
};

export default Reports;
