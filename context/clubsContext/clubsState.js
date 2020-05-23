import { createContext, useReducer } from 'react';
import ClubsReducer from './clubsReducer';
import axios from 'axios';
import { UserContext } from '../userContext/userState';
import { useContext } from 'react';
// Initial state
const initialState = {
  clubs: [],
};

// Create context
export const ClubsContext = createContext(initialState);

// Provider component
export const ClubsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ClubsReducer, initialState);

  // Actions
  const { jwt, user } = useContext(UserContext);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  //get clubs from database and att to state
  const getClubs = async () => {
    try {
      console.log('getting clubs');
      const res = await axios.get(
        'https://agentx-strapi.herokuapp.com/clubs',
        config
      );
      console.log(res);
      dispatch({
        type: 'LOAD_CLUBS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //add club to both state and db
  async function addClub(club) {
    try {
      console.log('sending', { ...club, createdby: user.email });
      const res = await axios.post(
        'https://agentx-strapi.herokuapp.com/clubs',
        { ...club, createdby: user.email },
        config
      );
      console.log(res);
      dispatch({
        type: 'ADD_CLUB',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //delete club
  const deleteClub = async (id) => {
    try {
      console.log('sending', id);
      const res = await axios.delete(
        `https://agentx-strapi.herokuapp.com/clubs/${id}`,
        config
      );
      console.log(res);
      dispatch({
        type: 'DELETE_CLUB',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ClubsContext.Provider
      value={{
        clubs: state.clubs,
        addClub,
        getClubs,
        deleteClub,
      }}
    >
      {children}
    </ClubsContext.Provider>
  );
};
