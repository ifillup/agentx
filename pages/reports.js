import SelectPlayer from '../components/SelectPlayer';
import Transaction from '../components/Transaction';
import { StatementContext } from '../context/statementContext/statementState';
import { useContext } from 'react';
import Transactions from '../components/Transactions';

const Reports = () => {
  const { transactions } = useContext(StatementContext);

  return (
    <>
      <SelectPlayer />
      <Transactions transactions={transactions} />
    </>
  );
};

export default Reports;
