const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state, tasks: [...state.tasks, {
          id: Math.floor(Math.random() * 1000), text: action.payload, isCompleted: false
        }]
      };

    case "DELETE_TASK":
      return {
        ...state, tasks: state.tasks.filter(task => task?.text?.id !== action.payload.id)
      };

    case "EDIT_TASK":
     return {
        ...state, tasks: [...state.tasks, {
          id: action.payload.id, text: state.tasks.map(t => (t?.text?.id === action.payload.id ? action.payload : t)), isCompleted: false
        }]
      };

    default:
      return state;
  }
}

export default tasksReducer;