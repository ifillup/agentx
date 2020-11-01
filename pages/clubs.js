import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
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
  const [unknownClubId, setUnknownClubId] = useState();
  return (
    <>      
        <Row>
          <Col>
            <AddClub clubId={unknownClubId}/>
          </Col>
          <Col>
        
        <p>Unknown Clubs - Please enter club details to complete your reporting.</p>
        <ListGroup as="ul">
           {unsortedClubs.map(id => (<ListGroup.Item key={id} active={id===unknownClubId}  as="li" onClick={e => setUnknownClubId(id)}>Club ID: {id}</ListGroup.Item>))}
        </ListGroup>
        
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
