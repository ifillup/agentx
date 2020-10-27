import { useContext, useState } from 'react';
import { Accordion, Card, Button, Table } from 'react-bootstrap';
import { PlayersContext } from '../context/playersContext/playersState';
const Player = ({ player, eventKey }) => {
  const { deletePlayer } = useContext(PlayersContext);
  return (
  
    <Card>
      
      <Accordion.Toggle eventKey={""+eventKey} as={Card.Header}> <div className="d-flex justify-content-between">{player.name} <span >V</span></div> </Accordion.Toggle>
      <Accordion.Collapse eventKey={""+eventKey}>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>account id</th>
              <th>username</th>
              <th>club</th>
              <th>rakeback</th>
            </tr>
          </thead>
          <tbody>
          {player?.accounts &&
          player.accounts.map((account) => (
            <tr>
              <td>{account.accountID}</td>
              <td>{account.name}</td>
              <td>{account.clubID}</td>
              <td>{account.revenue_share}</td>
              </tr>
          ))}
              </tbody>
        </Table>
        <button onClick={() => deletePlayer(player.id)}>Delete {player.name}</button>
      </Card.Body>
      </Accordion.Collapse>
    </Card>
    
    
  );
};

export default Player;

