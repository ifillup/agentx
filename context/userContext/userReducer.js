export default function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'SETUP_COMPLETE':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'ACCOUNT_DELETED':
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case 'AUTH_ERROR':
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
