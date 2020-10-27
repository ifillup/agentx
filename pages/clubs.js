import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClubsContext } from '../context/clubsContext/clubsState';
import ClubList from '../components/ClubList';
import AddClub from '../components/AddClub';
import UnknownClubs from '../components/UnknownClubs';

export default function Clubs() {
  
  const { clubs } = useContext(ClubsContext);

  return (
    <>
      
        <Row>
          <Col>
            <AddClub />
          </Col>
          <Col>
          <UnknownClubs />
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
