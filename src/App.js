import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/tasks/TaskList';
import AddTaskForm from './components/tasks/AddTaskForm';
import EditTaskForm from './components/tasks/EditTaskForm';
import AddCategoryForm from './components/category/AddCategoryForm';
import EditCategoryForm from './components/category/EditCategoryForm';
import CategoryList from './components/category/CategoryList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTaskForm />} />
        <Route path="/edit/:taskId" element={<EditTaskForm />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/addCategory" element={<AddCategoryForm />} />
        <Route path="/editCategory/:categoryId" element={<EditCategoryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
