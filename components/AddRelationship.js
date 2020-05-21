import { Button, Form } from 'react-bootstrap';
import { PlayersContext } from '../context/playersContext/playersState';
import { useContext, useState } from 'react';
import { StatementContext } from '../context/statementContext/statementState';

const AddRelationship = () => {
  const [player, setPlayer] = useState('');
  const [account, setAccount] = useState('');
  const { players, addAccount } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('p', player, 'acc', account);
    addAccount(player, account);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>

        <Form.Control as='select' onChange={(e) => setPlayer(e.target.value)}>
          {players.map((player) => (
            <option value={player.name}>{player.name}</option>
          ))}
        </Form.Control>
        <Form.Control as='select' onChange={(e) => setAccount(e.target.value)}>
          {transactions.map((t) => (
            <option value={t.playerID}>
              club:{t.club} player:{t.playername} id:{t.playerID}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add Account
      </Button>
    </Form>
  );
};

export default AddRelationship;
