import Register from '../components/Register';
import { PlayersContext } from '../context/playersContext/playersState';
import { useContext, useState, useEffect } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import { UserContext } from '../context/userContext/userState';
import { ClubsContext } from '../context/clubsContext/clubsState';
import { Instructions } from '../components/Instructions';
export default function Home() {
  const [savedUser, setSavedUser] = useState('');
  const { user, isAuthenticated } = useContext(UserContext);
  const { getPlayers } = useContext(PlayersContext);
  const { getClubs } = useContext(ClubsContext);
  useEffect(() => {
    getPlayers();
    getClubs();
  }, []);

  return (
    <div className='container'>
      <br /> <br/>
      <h3>Welcome: {user.email} </h3>
      <Instructions />
    </div>
  );
}
