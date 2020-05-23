export default (state, action) => {
  switch (action.type) {
    case 'ADD_CLUB':
      return {
        ...state,
        clubs: [...state.clubs, action.payload],
      };
    case 'LOAD_CLUBS':
      return {
        ...state,
        clubs: [...action.payload],
      };
    case 'DELETE_CLUB':
      return {
        ...state,
        clubs: state.clubs.filter((club) => club.id !== action.payload.id),
      };
    default:
      return state;
  }
};
