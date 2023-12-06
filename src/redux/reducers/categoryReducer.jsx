const initialState = {
  category: []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state, category: [...state.category, {
          id: Math.floor(Math.random() * 1000), text: action.payload
        }]
      };

    case "DELETE_CATEGORY":
      return {
        ...state, category: state.category.filter(t => t?.text?.id !== action.payload.id)
      };

    case "EDIT_CATEGORY":
      return {
        ...state,
          category: [...state.category, {
           text: state?.category.map((t) => (
t?.text?.id == action.payload.id
         ? action.payload : t))
        }]
      };

    default:
      return state;
  }
}

export default categoryReducer;