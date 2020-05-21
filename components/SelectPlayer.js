import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';

const SelectPlayer = () => {
  const { players } = useContext(PlayersContext);
  return (
    <Form>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>
        <Form.Control as='select'>
          {players.map((player) => (
            <option>{player.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Retrive statement
      </Button>
    </Form>
  );
};

export default SelectPlayer;
