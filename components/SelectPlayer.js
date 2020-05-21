import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import Report from '../components/Report';

const SelectPlayer = () => {
  const [report, setReport] = useState('');
  const { players } = useContext(PlayersContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formAddPlayer'>
          <Form.Label>Player name</Form.Label>
          <Form.Control as='select' onChange={(e) => setReport(e.target.value)}>
            <option selected label='Select player'></option>
            {players.map((player) => (
              <option>{player.player}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Retrive statement
        </Button>
      </Form>
      {report !== '' && <Report report={report} />}
    </>
  );
};

export default SelectPlayer;
