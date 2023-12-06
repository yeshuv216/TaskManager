import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEditCategoryAction } from '../../redux/actions';
import { useSelector } from 'react-redux';
const EditTaskForm = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const categoryState = useSelector((state) => state.categoryReducer);
  const selectedCategory = categoryState?.category.find(category => category?.text?.id === parseInt(categoryId, 10));
  
  useEffect(() => {
    setCategory(selectedCategory?.text?.label);
  }, [categoryId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCategory = {
      id:categoryId,
      label: category,
      value: category
    };
   let updatedData= categoryState?.category.map(t => (t?.text?.id == categoryId
   ? updatedCategory : t))
   console.log(updatedData)
    getEditCategoryAction(updatedData)
    // Navigate to category list page
    navigate('/category');
  };

  return (
    <div className="main-container">
      <div className="background-container" style={{ backgroundImage: 'url("6530.jpg")' }}>
      <header className="mb-4 text-center task-manager-header">
          <h1 className="font-weight-bold">Category Manager</h1>
        </header>
        <div className="container mt-4" style={{ background: '#87CEEB', padding: '20px', borderRadius: '8px' }}>
          <h1 className="mb-4 text-center">Edit Category</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Task Name:</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
           
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary mx-2">Save Changes</button>
              <Link to="/category" className="btn btn-secondary mx-2">Back to Category List</Link>
            </div>
          </form>
        </div>
        <footer className="mt-4 text-center task-manager-footer">
          <p>&copy; 2023 @Yeshu varshney</p>
        </footer>
      </div>
    </div>
  );
};

export default EditTaskForm;
