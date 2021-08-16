import React, { useState } from "react";
import { useAlert } from "react-alert";
import { uid } from "uid";

const UserForm = ({ id, services }) => {
  const alertUi = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    setBtnDisabled(false)
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card">
        <div className="card-header">Add Users</div>
        <div className="card-body">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-4">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <label className="mt-4">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          <button disabled={btnDisabled} className="btn btn-yellow px-4 mt-4">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
