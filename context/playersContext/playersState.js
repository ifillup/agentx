import { createContext, useReducer } from 'react';
import PlayersReducer from './playersReducer';
import axios from 'axios';
import { UserContext } from '../userContext/userState';
import { useContext } from 'react';
// Initial state
const initialState = {
  players: [],
};

// Create context
export const PlayersContext = createContext(initialState);

// Provider component
export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayersReducer, initialState);

  //need user context
  const { jwt, user } = useContext(UserContext);
  // Actions
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  async function getPlayers() {
    try {
      console.log('getting players for database');
      const res = await axios.get(
        'http://agentx-strapi.herokuapp.com/players',
        config
      );
      console.log(res);
      dispatch({
        type: 'LOAD_PLAYERS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addPlayer(playerName) {
    try {
      console.log('sending', playerName);
      const res = await axios.post(
        'http://agentx-strapi.herokuapp.com/players',
        { name: playerName },
        config
      );
      console.log(res);
      dispatch({
        type: 'ADD_PLAYER',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  const deletePlayer = async (id) => {
    try {
      console.log('sending', id);
      const res = await axios.delete(
        `http://agentx-strapi.herokuapp.com/players/${id}`,
        config
      );
      console.log(res);
      dispatch({
        type: 'DELETE_PLAYER',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //takes a playername and account obj containing clubid, playerid, rb%
  async function addAccount(playerID, account) {
    try {
      console.log('add and tag account id', account, 'to player', playerID);
      const res = await axios.post(
        'http://agentx-strapi.herokuapp.com/accounts',
        { ...account, player: playerID },
        config
      );
      console.log(res);
      // dispatch({
      //   type: 'ADD_ACCOUNT',
      //   payload: res.data,
      // });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PlayersContext.Provider
      value={{
        players: state.players,
        addPlayer,
        addAccount,
        getPlayers,
        deletePlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
