export const getAddTaskAction = (data) => {
  return { type: "ADD_TASK", payload: data }
}

export const getDeleteTaskAction = (id) => {
  return {type: "DELETE_TASK", payload: {id}}
}

export const getEditTaskAction = (id) => {
  return {type: "EDIT_TASK", payload: {id}}
}

export const getSetQueryAction = (query) => {
  return {type: "SET_QUERY", payload: query}
}

export const getAddCategoryAction = (data) => {
  return { type: "ADD_CATEGORY", payload: data }
}

export const getDeleteCategoryAction = (id) => {
  return {type: "DELETE_CATEGORY", payload: {id}}
}

export const getEditCategoryAction = (data) => {
  return {type: "EDIT_CATEGORY", payload: {data}}
}


