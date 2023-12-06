import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAddCategoryAction } from '../../redux/actions';
const AddCategoryForm = () => {
  const [category,setCategory]=useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      alert('Category name is required!');
      return;
    }

    const newCategory = {
      id: Date.now(),
      label: category,
      value:category
    };
    dispatch(getAddCategoryAction(newCategory));
    // Navigate to category list page
    navigate('/category');
  };

  return (
    <div className="main-container">
      <div className="background-container" style={{ backgroundImage: 'url("6530.jpg")' }}>
      <header className="mb-4 text-center task-manager-header">
          <h1 className="font-weight-bold">Category Manager</h1>
        </header>
        <div className="container mt-4" style={{ background: '#F0E68C', padding: '20px', borderRadius: '8px' }}>
          <h1 className="mb-4">Add Category</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Category Name:</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Category</button>
          </form>
          <Link to="/category" className="btn btn-secondary mt-3">Back to Category List</Link>
        </div>
        <footer className="mt-4 text-center task-manager-footer">
          <p>&copy; 2023 @Yeshu varshney</p>
        </footer>
      </div>
    </div>
  );
};

export default AddCategoryForm;
