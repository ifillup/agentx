import { useContext, useState } from 'react';
import { ClubsContext } from '../context/clubsContext/clubsState';
const Club = ({ club }) => {
  const { deleteClub } = useContext(ClubsContext);
  return (
    <>
      <tr>
        <th>{club.platform}</th>
        <th>{club.name}</th>
        <th>{club.clubID}</th>
        <th>{club.chipValue}</th>
      </tr>

      {/* <button onClick={() => deleteClub(club.id)}>delete</button> */}
    </>
  );
};

export default Club;
