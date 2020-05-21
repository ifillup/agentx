import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState('');

  const { addPlayer } = useContext(PlayersContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerName);
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formAddPlayer'>
        <Form.Label>Player name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Player name'
          onChange={handleChange}
        />
        <Form.Text className='text-muted'>
          A player is a grouping of accounts for accounting purposes
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add Player
      </Button>
    </Form>
  );
};

export default AddPlayer;
