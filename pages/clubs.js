import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClubsContext } from '../context/clubsContext/clubsState';
import Club from '../components/Club';
import ClubList from '../components/ClubList';
import AddClub from '../components/AddClub';

export default function Clubs() {
  // const [clubs, setClubs] = useState([]);
  const { clubs, getClubs } = useContext(ClubsContext);

  useEffect(() => {
    getClubs();
  }, []);

  // const getClubs = () => {
  //   // TODO - async request for Clubs from db

  //   return clubdata.clubs;
  // };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <AddClub />
          </Col>
          <Col>unknown clubs list</Col>
        </Row>
        <Row>
          <Col>
            <ClubList clubs={clubs} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
