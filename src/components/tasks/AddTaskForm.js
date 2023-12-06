import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAddTaskAction } from '../../redux/actions';
import Select from "react-dropdown-select";
const AddTaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [category, setCategory] = useState('');
  const categoryState = useSelector((state) => state.categoryReducer?.category);
  const [priority, setPriority] = useState('low');
  const optionData=[]
  categoryState.map((item,index)=>{
   optionData.push({id:item?.text?.id,label:item?.text?.label,value:item?.text?.value})
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) {
      alert('Task name is required!');
      return;
    }
    if (!taskDescription) {
      alert('Task description is required!');
      return;
    }
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      category:category,
      priority,
      completed: false,
      lastDateEdited:new Date()
    };
    dispatch(getAddTaskAction(newTask));
    // Navigate to task list page
    navigate('/');
  };

  return (
    <div className="main-container">
      <div className="background-container" style={{ backgroundImage: 'url("6530.jpg")' }}>
      <header className="mb-4 text-center task-manager-header">
          <h1 className="font-weight-bold">Task Manager</h1>
        </header>
        <div className="container mt-4" style={{ background: '#F0E68C', padding: '20px', borderRadius: '8px' }}>
          <h1 className="mb-4">Add Task</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Task Name:</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Task Description:</label>
              <textarea
                className="form-control"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category:</label>
             <Select style={{backgroundColor:'white'}} options={optionData} onChange={(values) => setCategory(values)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
          </form>
          <Link to="/" className="btn btn-secondary mt-3">Back to Task List</Link>
        </div>
        <footer className="mt-4 text-center task-manager-footer">
          <p>&copy; 2023 @Yeshu varshney</p>
        </footer>
      </div>
    </div>
  );
};

export default AddTaskForm;
