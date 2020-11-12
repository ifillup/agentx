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
      const res = await axios.get(
        `https://agentx-strapi.herokuapp.com/players`,
        config
      );
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
      const res = await axios.post(
        'https://agentx-strapi.herokuapp.com/players',
        { name: playerName },
        config
      );
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
      const res = await axios.delete(
        `https://agentx-strapi.herokuapp.com/players/${id}`,
        config
      );
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
      const res = await axios.post(
        'https://agentx-strapi.herokuapp.com/accounts',
        { ...account, player: playerID },
        config
      );
      dispatch({
        type: 'ADD_ACCOUNT',
        payload: res.data,
      });
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
export const usePlayersConext = () => useContext(PlayersContext);