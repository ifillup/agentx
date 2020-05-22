import { useState, useEffect, useContext } from 'react';

import { ClubsContext } from '../context/clubsContext/clubsState';
import Club from '../components/Club';
import AddClub from '../components/AddClub';
import * as clubdata from '../club.json'; //TODO

export default function Clubs() {
  // const [clubs, setClubs] = useState([]);
  const { clubs } = useContext(ClubsContext);
  // useEffect(() => {
  //   setClubs(getClubs());
  // }, []);

  // const getClubs = () => {
  //   // TODO - async request for Clubs from db

  //   return clubdata.clubs;
  // };
  return (
    <>
      <AddClub />
      {clubs.length > 0 && clubs.map((club) => <Club club={club} />)}
    </>
  );
}
