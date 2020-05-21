import { Button, Form } from 'react-bootstrap';
import { PlayersContext } from '../context/playersContext/playersState';
import { useContext } from 'react';
import { StatementContext } from '../context/statementContext/statementState';

const AddRelationship = () => {
  const { players } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);

  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>

        <Form.Control as='select'>
          {players.map((player) => (
            <option>{player.name}</option>
          ))}
        </Form.Control>
        <Form.Control as='select'>
          {transactions.map((t) => (
            <option>
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
