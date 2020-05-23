import { createContext, useReducer } from 'react';
import UserReducer from './userReducer';
import axios from 'axios';

// Initial state
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};

// Create context
export const UserContext = createContext(initialState);

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
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
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'http://agentx-strapi.herokuapp.com/auth/local/register',
        { username: email, email, password },
        config
      );
      console.log(res);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      // localStorage.setItem('user', JSON.stringify(res.data));
      //  loadUser(); ///comment me
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = async (email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'http://agentx-strapi.herokuapp.com/auth/local',
        { identifier: email, password },
        config
      );

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.data));
      // loadUser();
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: 'LOGOUT' });

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
        // clearErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
