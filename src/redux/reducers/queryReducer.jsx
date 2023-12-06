const initialState = ""

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return action.payload;
      
    default:
      return state;
  }
}
export default queryReducer;