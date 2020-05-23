import { useContext, useState } from 'react';
import { ClubsContext } from '../context/clubsContext/clubsState';
const Club = ({ club }) => {
  const { deleteClub } = useContext(ClubsContext);
  return (
    <>
      {`club: ${club.name} ID: ${club.clubID} platform: ${club.platform} chip-value: ${club.chipValue}`}
      <button onClick={() => deleteClub(club.id)}>delete</button>
      <br />
    </>
  );
};

export default Club;
