import { createContext, useContext, useReducer } from 'react';
import UserReducer from './userReducer';
import axios from 'axios';

// Initial state
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

// Create context
export const UserContext = createContext(initialState);

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Actions
  // Set Loading
  const setLoading = ()=>{
      dispatch({
      type: 'SET_LOADING',
      });
  }
  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  // Register User
  const register = async (email, password) => {
    try {
      let res = await axios.post(
        'https://agentx-strapi.herokuapp.com/auth/local/register',
        { username: email, email, password },
        config
      );

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      accountSetup(res.data);
      // localStorage.setItem('user', JSON.stringify(res.data));
      //  loadUser(); ///comment me
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  // Setup agent account (once)
  const accountSetup = async ({ jwt, user }) => {
    const res = await axios.post(
      'https://agentx-strapi.herokuapp.com/agents',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch({
      type: 'SETUP_COMPLETE',
      payload: res.data,
    });
  };

  // Login User
  const login = async (email, password) => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'https://agentx-strapi.herokuapp.com/auth/local',
        { identifier: email, password },
        config
      );

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      console.log(res);

      // loadUser();
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => {
    console.log('logging out user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        jwt: state.jwt,
        register,
        loadUser,
        login,
        logout,
        setLoading
        // clearErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);