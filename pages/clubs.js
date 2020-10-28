import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClubsContext } from '../context/clubsContext/clubsState';
import ClubList from '../components/ClubList';
import AddClub from '../components/AddClub';
import UnknownClubs from '../components/UnknownClubs';
import { StatementContext } from '../context/statementContext/statementState';

export default function Clubs() {
  const { transactions } = useContext(StatementContext);
  const { clubs } = useContext(ClubsContext);
  const clubIDs =clubs.map(c => c.clubID)
  const unsortedClubs = [...new Set(transactions.filter(t => !clubIDs.includes(+t.club)).map(t=>t.club))];
  return (
    <>      
        <Row>
          <Col>
            <AddClub />
          </Col>
          <Col>
        {/* <UnknownClubs /> */}
        <h3>Unknown Clubs</h3>
         {unsortedClubs.map(id => <h4>{id}</h4>)}
          </Col>
        </Row>
        <Row>
          <Col>
            <ClubList clubs={clubs} />
          </Col>
        </Row>
    </>
  );
}
