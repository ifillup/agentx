import SelectPlayer from '../components/SelectPlayer';
import Transaction from '../components/Transaction';
import { PlayersContext } from '../context/playersContext/playersState';
import { StatementContext } from '../context/statementContext/statementState';
import { useContext, useState } from 'react';
import Transactions from '../components/Transactions';
import Report from '../components/Report';
const Reports = () => {
  const [report, setReport] = useState('');
  const { transactions } = useContext(StatementContext);
  const { players } = useContext(PlayersContext);

  const handleRequestReport = (report) => {
    setReport(report);
  };
  return (
    <>
      <SelectPlayer handleRequestReport={handleRequestReport} />
      {report && (
        <Report player={players.find((player) => player.id === report)} />
      )}
    </>
  );
};

export default Reports;
