import { useState, useEffect, useContext } from 'react';
import { PlayersContext } from '../context/playersContext/playersState';
import { StatementContext } from '../context/statementContext/statementState';
import { Accordion, Row, Col, Card, Button, Container  } from 'react-bootstrap';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import AddRelationship from '../components/AddRelationship';
import * as playerdata from '../player.json'; //TODO
import UnsortedAccounts from '../components/UnsortedAccounts';

export default function Players() {
  
  const { players, getPlayers } = useContext(PlayersContext);
  const { transactions } = useContext(StatementContext);
  //let accounts;
  //const unSortedTransactions = tranactions.filter(t => t.club )
  useEffect(() => {
    getPlayers();
    //accounts = players.map((player) => `${player.accounts.accountID}${player.accounts.clubID}`);
  }, []);
  
  //console.log(players, 'LOOK')
  return (
    <>
        <Row>
          <Col>
            <AddPlayer />
            <AddRelationship />
          </Col>
          <Col>
          <UnsortedAccounts />
          </Col>
        </Row>
        
          <div className="">
            <Accordion defaultActiveKey="0">
              {players.length > 0 &&
                players.map((player, i) => <Player key={i} eventKey={i} player={player} />)}
            </Accordion>
            </div>
            <style jsx>{`
        div {
          max-width: 70%;
        }
      `}</style>
      

      {/* <UnsortedAccounts /> */}
    </>
  );
}
