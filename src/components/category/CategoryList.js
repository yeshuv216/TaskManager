import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeleteCategoryAction } from '../../redux/actions';

const CategoryList = () => {
  const categoryState = useSelector((state) => state.categoryReducer);
  const [category, setcategory] = useState(categoryState?.category);

  console.log("categoryData",JSON.stringify(category))
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch category from local storage on component mount
  }, []);


 const handleDelete = (categoryId) => {
    dispatch(getDeleteCategoryAction(categoryId));
  }

  return (
    
    <div className="main-container">
      <div className="background-container" style={{ backgroundImage: 'url("6530.jpg")' }}>
        <header className="mb-4 text-center task-manager-header">
          <h1 className="font-weight-bold">Category</h1>
        </header>
        <div className="container mt-4" style={{ background: '#C38D9E', padding: '20px', borderRadius: '8px',justifySelf:'center' }}>
          <ul className="list-group">
 {categoryState&&categoryState?.category?.length>0&&categoryState?.category?.map(category => (
              <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="me-3">
                  <span style={{ textDecoration: category.completed ? 'line-through' : 'none' }}>{category?.text?.label}</span>
                 </div> 
                 <div>
                  <button onClick={() => handleDelete(category?.text?.id)} className="btn btn-danger me-2">Delete</button>
                  <Link to={`/editCategory/${category?.text?.id}`} className="btn btn-primary">Edit</Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-3">
            <Link to="/addCategory" className="btn btn-success">Add Category</Link>
          </div>
        </div>
        <footer className="mt-4 text-center task-manager-footer">
          <p>&copy; 2023 @Yeshu varshney</p>
        </footer>
      </div>
    </div>
  );
};

export default CategoryList;
