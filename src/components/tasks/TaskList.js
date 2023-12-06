import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeleteTaskAction } from '../../redux/actions';
import Select from "react-dropdown-select";

const TaskList = () => {
  
  const [searchText,setSearchText]=useState('')
  const tasksState = useSelector((state) => state.tasksReducer);
  const [tasks, setTasks] = useState(tasksState?.tasks);
  const [sortData, setSortData] = useState('');
  const [refresh,setRefresh]=useState(false)
  console.log("taskData",JSON.stringify(tasks))
  const dispatch = useDispatch();
  const optionData=[
{
label:"Name",
value:"1"
},
{
label:"Category",
value:"2"
},
{
label:"Last date modified",
value:"3"
}
]
  useEffect(() => {
    // Fetch tasks from local storage on component mount
  }, [tasks,refresh]);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasksState.length>0&&tasksState.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    // Save updated tasks to local storage
  };

 const handleDelete = (taskId) => {
    dispatch(getDeleteTaskAction(taskId));
  }

const search=(searchValue)=>{
 if(searchValue){
let filterdSearch=tasks&&tasks?.length>0&&tasks?.filter((task) => {
 return task?.text?.name.includes(searchValue)})
setTasks(filterdSearch);
 }
else{
setTasks(tasksState?.tasks)
}
}

const sort=(sortValue)=>{
if(sortValue=="Name"){
setTasks([...tasks].sort((a, b) =>
    a?.text?.name > b?.text?.name ? 1 : -1,
  ));
}
else if(sortValue=="Category"){
setTasks([...tasks].sort((a, b) =>
    a?.text?.category > b?.text?.category ? 1 : -1,
  ));
}
else{
setTasks([...tasks].sort((a, b) =>
new Date(a?.text?.lastDateEdited) < new Date(b?.text?.lastDateEdited) ? 1 : -1)
  );
}
 }

  return (
    
    <div  className="main-container">
      <div className="background-container" style={{ backgroundImage: 'url("6530.jpg")' }}>
        <header className="mb-4 text-center task-manager-header">
          <h1 className="font-weight-bold">Task Manager</h1>
        </header>
        <div className="container mt-4" style={{ background: '#C38D9E', padding: '20px', borderRadius: '8px',justifySelf:'center' }}>
         <input
                    type="search"
                    placeholder="Search by Name or description"
                    onChange={(e) => {setSearchText(e.target.value);search(e.target.value)}}
                    className="searchBar"
                  />
       <Select placeholder="Sort by" style={{backgroundColor:'white',marginTop:10,width:'45%'}} options={optionData} onChange={(values) => {setSortData(values[0].label);sort(values[0].label)}} />
     <h1 className="mb-4 text-center">Tasks List</h1>
          <ul className="list-group">
                  <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
        </tr>
                   </table>
            {searchText||sortData?tasks&&tasks?.length>0&&tasks?.map(task => (

              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{width:200}} className="me-3">
                  <input
                    type="checkbox"
                    checked={task?.text?.completed}
                    onChange={() => handleToggleComplete(task?.text?.id)}
                    className="me-3"
                  />
                  <span  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task?.text?.name}</span>
                </div>
                <div style={{width:430}} className="me-3">
               <span >{task?.text?.description}</span>
                </div>
                 <div style={{width:200}}>
               <span >{task?.text?.category[0]?.label}</span>
                </div>
                <div>
                  <button onClick={() => handleDelete(task?.text?.id)} className="btn btn-danger me-2">Delete</button>
                  <Link to={`/edit/${task.id}`} className="btn btn-primary">Edit</Link>
                </div>
              </li>
            )):tasksState&&tasksState?.tasks?.length>0&&tasksState?.tasks?.map(task => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{width:200}} className="me-3">
                  <input
                    type="checkbox"
                    checked={task?.text?.completed}
                    onChange={() => handleToggleComplete(task?.text?.id)}
                    className="me-3"
                  />
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task?.text?.name}</span>
                </div>
                <div style={{width:430}}>
               <span>{task?.text?.description}</span>
                </div>
                <div style={{width:200}}>
               <span>{task?.text?.category[0]?.label}</span>
                </div>
                <div>
                  <button onClick={() => handleDelete(task?.text?.id)} className="btn btn-danger me-2">Delete</button>
                  <Link to={`/edit/${task?.text?.id}`} className="btn btn-primary">Edit</Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-3">
            <Link to="/add" className="btn btn-success">Add Task</Link>
          </div>
           <div className="text-center mt-3">
            <Link to="/category" className="btn btn-success">Go to Category</Link>
          </div>
        </div>
        <footer className="mt-4 text-center task-manager-footer">
          <p>&copy; 2023 @Yeshu varshney</p>
        </footer>
      </div>
    </div>
  );
};

export default TaskList;
