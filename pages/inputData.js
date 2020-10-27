import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import CopyPasteInput from '../components/CopyPasteInput';
import Transactions from '../components/Transactions';
import { StatementContext } from '../context/statementContext/statementState';

const InputData = () => {
  const { transactions } = useContext(StatementContext);
  return (
    <Row>
    <Col >
      <CopyPasteInput />
      </Col>
      <Col >
      {transactions.length >0 ? (<table class='table table-sm '>
      <thead>
        <tr>
          <th>Club</th>
          <th>Account</th>
          <th>WinLoss</th>
          <th>Rake</th>
          <th>Rakeback</th>
        </tr>
        </thead>
      {transactions.map(t => (
        <tr>
          <td>{t.club}</td>
          <td>{t.playerID}</td>
          <td>{t.playername}</td>
          <td>{t.profit}</td>
          <td>{t.rake}</td>
        </tr>
      ))}
      </table>) : 'No data found'}
      
      </Col>
    </Row>
  );
};

export default InputData;
