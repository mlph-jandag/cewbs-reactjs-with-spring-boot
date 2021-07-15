import React, { useState } from 'react';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';

const CategoryForm = () => {
  const alertUi = useAlert();
  const [catName, setCatName] = useState('');
  const [slug, setSlug] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    firestore.collection('categories').add({
      category_name: catName.target.value,
      slug: slug.target.value
    }).then(result => {
      console.log('result', result);
      alertUi.success('Added category successfully!');
    }).catch(err => {
      console.log(err);
      alertUi.error('There was an error occured!');
    }).finally(
      setBtnDisabled(false)
    );
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
            onChange={setCatName}
          />
          <label className="mt-4">Slug</label>
          <input
            type="text"
            className="form-control"
            placeholder="/{slug}"
            onChange={setSlug}
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
