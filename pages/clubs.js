import { useState, useEffect } from 'react';

import Club from '../components/Club';
import AddClub from '../components/AddClub';
import * as clubdata from '../club.json'; //TODO

export default function Clubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    setClubs(getClubs());
  }, []);

  const getClubs = () => {
    // TODO - async request for Clubs from db

    return clubdata.clubs;
  };
  return (
    <>
      <AddClub />
      {clubs.map((club) => (
        <Club club={club} />
      ))}
    </>
  );
}
