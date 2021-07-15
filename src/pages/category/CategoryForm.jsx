import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { addFormData } from '../../api/firestoreService';
import { isFormValid } from '../../utils/validation';

const CategoryForm = () => {
  const alertUi = useAlert();
  const [catName, setCatName] = useState('');
  const [slug, setSlug] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let data = {
      category_name: catName,
      slug: slug
    };
    if (isFormValid(data)) {
      try {
        setBtnDisabled(true);
        await addFormData({
          formData: data,
          table: 'categories' 
        });
        alertUi.success('Added successfully');
      } catch(e) {
        console.log(e);
      } finally {
        setBtnDisabled(false);
      }
    } else {
      alertUi.error('Please check inputs!');
    }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card">
        <div className="card-header">Add Category</div>
        <div className="card-body">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Example. events"
            onChange={(e) => setCatName(e.target.value)}
          />
          <label className="mt-4">Slug</label>
          <input
            type="text"
            className="form-control"
            placeholder="/{slug}"
            onChange={(e) => setSlug(e.target.value)}
          />
          <button
            disabled={btnDisabled}
            className="btn btn-yellow px-4 mt-4"
          >Add New</button>
        </div>
      </div>
    </form>
  )
}

export default CategoryForm
