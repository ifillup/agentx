import SelectPlayer from '../components/SelectPlayer';
import Transaction from '../components/Transaction';
import { StatementContext } from '../context/statementContext/statementState';
import { useContext, useState } from 'react';
import Transactions from '../components/Transactions';
import Report from '../components/Report';
const Reports = () => {
  const [report, setReport] = useState('');
  const { transactions } = useContext(StatementContext);

  const handleRequestReport = (report) => {
    setReport(report);
  };
  return (
    <>
      <SelectPlayer handleRequestReport={handleRequestReport} />
      {report !== '' && <Report report={report} />}
      <Transactions transactions={transactions} />
    </>
  );
};

export default Reports;
