import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import { StatementContext } from '../context/statementContext/statementState';
import Transaction from './Transaction';

const SelectPlayer = ({}) => {
  const [report, setReport] = useState('');
  const { players } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleRequestReport(report);
  // };
  let accounts;
  if (report) {
    accounts = players
      .find((player) => player.id === report)
      .accounts.map((acc) => acc.accountID);
    console.log(accounts);
  }

  return (
    <>
      <Form>
        <Form.Group controlId='formAddPlayer'>
          <Form.Label>Player name</Form.Label>
          <Form.Control as='select' onChange={(e) => setReport(e.target.value)}>
            <option selected label='Select player'></option>
            {players.map((player) => (
              <option value={player.id}>{player.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        {/* <Button variant='primary' type='submit'>
          Retrive statement
        </Button> */}
      </Form>
      {/* {report &&
        transactions
          .filter(players.player.id === report)
          .map((t) => <Transaction transaction={transaction} />)} */}
      {/* {report && console.log(players.find((player) => player.id === report))} */}
      {report &&
        transactions
          .filter((t) => accounts.includes(+t.playerID))
          .map((t) => <Transaction transaction={t} />)}
    </>
  );
};

export default SelectPlayer;
