export default (state, action) => {
  switch (action.type) {
    case 'ADD_CLUB':
      return {
        ...state,
        clubs: [...state.clubs, action.payload],
      };
    default:
      return state;
  }
};
