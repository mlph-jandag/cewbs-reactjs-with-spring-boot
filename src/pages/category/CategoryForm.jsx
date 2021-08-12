import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { addFormData } from '../../api/firestoreService';
import { useDispatch } from "react-redux";
import { setUpdate } from "../../slices/categorySlice";
import { isFormValid } from '../../utils/validation';
import axios from "../../axios";

const CategoryForm = () => {
  const alertUi = useAlert();
  const dispatch = useDispatch();
  const [name, setCatName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let data = {
      name
    };
    if (isFormValid(data)) {
        console.log(data);
        setBtnDisabled(true);
        axios.post('/categories', {
           ...data
        }).then(() => {
           alertUi.success("Added successfully");
           dispatch(setUpdate(true))
        }).catch((e) => {
           alertUi.error("Category name already exists!");
        })
        setCatName("");
    } else {
      alertUi.error('Name cannot be empty!');
    }

    setBtnDisabled(false);
    setLoading(false);
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
            value={name}
            onChange={(e) => setCatName(e.target.value)}
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
