import { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import AddRelationship from '../components/AddRelationship';
import * as playerdata from '../player.json'; //TODO
import UnsortedAccounts from '../components/UnsortedAccounts';

export default function Players() {
  // const [players, setPlayers] = useState([]);
  const { players, getPlayers } = useContext(PlayersContext);
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <AddPlayer />
            <AddRelationship />
          </Col>
          <Col>unknown accounts list</Col>
        </Row>
        <Row>
          <Col>
            {players.length > 0 &&
              players.map((player) => <Player player={player} />)}
          </Col>
        </Row>
      </Container>

      {/* <UnsortedAccounts /> */}
    </>
  );
}
