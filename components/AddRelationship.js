import { Button, Form } from 'react-bootstrap';
import { PlayersContext } from '../context/playersContext/playersState';
import { useContext, useState } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import { ClubsContext } from '../context/clubsContext/clubsState';

const AddRelationship = () => {
  const [playerID, setPlayer] = useState('');
  const [account, setAccount] = useState([]);
  const [rakeback, setRakeback] = useState('');
  const { players, addAccount } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);
  const { clubs } = useContext(ClubsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('p', playerID, 'acc', account);
    console.log('to club', clubs.find((club) => club.clubID == account[1]).id);
    addAccount(playerID, {
      accountID: account[0],
      clubID: account[1],
      name: account[2],
      revenue_share: rakeback,
      club: clubs.find((club) => club.clubID == account[1]).id,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formAddRelationship'>
        <Form.Label>Player name</Form.Label>

        <Form.Control as='select' onChange={(e) => setPlayer(e.target.value)}>
          <option selected label='Select player'></option>
          {players.map((player) => (
            <option value={player.id}>{player.name}</option>
          ))}
        </Form.Control>
        <Form.Control
          as='select'
          onChange={(e) => setAccount(e.target.value.split(','))}
        >
          <option selected label='Select account'></option>
          {transactions.map((t) => (
            <option value={[t.playerID, t.club, t.playername]}>
              club:{t.club} player:{t.playername} id:{t.playerID}
            </option>
          ))}
        </Form.Control>
        <Form.Control
          type='number'
          placeholder='Rakeback'
          onChange={(e) => setRakeback(e.target.value)}
          name='rakeback'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add Account
      </Button>
    </Form>
  );
};

export default AddRelationship;
