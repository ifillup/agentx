import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import { StatementContext } from '../context/statementContext/statementState';
import Transaction from './Transaction';

const SelectPlayer = ({ handleRequestReport }) => {
  const [report, setReport] = useState('');
  const { players } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleRequestReport(report);
  // };
  // acounts is an array of accountidclubid keys for matching with transactions
  // let accounts;
  // if (report) {
  //   accounts = players
  //     .find((player) => player.id === report)
  //     .accounts.map((acc) => `${acc.accountID}${acc.clubID}`);
  //   console.log(accounts);
  // }
  // if (report) {
  //   accounts = report.accounts?.map((acc) => `${acc.accountID}${acc.clubID}`);

  //   console.log(accounts);
  // }

  return (
    <>
      <Form>
        <Form.Group controlId='formAddPlayer'>
          <Form.Label>Player name</Form.Label>
          <Form.Control
            as='select'
            onChange={(e) => handleRequestReport(e.target.value)}
          >
            <option defaultValue label='Select player'></option>
            {players.map((player) => (
              <option key={player.name} value={player.id}>{player.name}</option>
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
      {/* {report && `generating report for playerid: ${report}`}
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Club</th>
            <th>Account</th>
            <th>Account Name</th>
            <th>WinLoss</th>
            <th>Rake Paid</th>
            <th>Rakeback</th>
            <th>Total NET</th>
            <th>MYR</th>
          </tr>
        </thead>
        <tbody>
          {report &&
            accounts &&
            accounts.length > 0 &&
            transactions
              .filter((t) => accounts.includes(`${t.playerID}${t.club}`))
              .map((t) => (
                <Transaction
                  player={report}
                  transaction={t}
                  sumTotal={sumTotal}
                />
              ))}
        </tbody>
      </table>
      <h1>{total}</h1> */}
    </>
  );
};

export default SelectPlayer;

//for every transaction we see if it belongs to selected player
//if it does we print it, then retrive the appropriate rakeback
//the retrive the appropirate club for chip conversion
//then print it
