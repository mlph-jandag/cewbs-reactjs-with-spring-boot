import React, { useState } from "react";
import { useAlert } from "react-alert";
import { uid } from "uid";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { USER_ROLES } from "../../../config/AppConfig";
import { postAxios } from "../../../api/apiHandler";
import { extractErrorMessages } from "../../../utils/responseUtils";
import { setUserDone, setUserEditData } from "../../../slices/userSlice";
import { useDispatch, useSelector} from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();
  const alertUi = useAlert();
  const userForm = useSelector(state => state.users.userEditData);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmitHandler = async (e) => {

    console.log(userForm);

    e.preventDefault();
    try {
      setBtnDisabled(true);
      console.log(userForm);
      let resp = await postAxios('/users', {
        name: userForm.name,
        email: userForm.email,
        role: userForm.role,
        password: userForm.password
      });
      console.log(resp);
      alertUi.success('Successfully added new user.');
      dispatch(setUserDone());
    } catch(err) {
      console.log(err.response);
      alertUi.error(extractErrorMessages(err.response));
    } finally {
      setBtnDisabled(false);
    }
  };

  const onChangeForm = (e) => {
    let field = e.target.name;
    dispatch(setUserEditData({
      ...userForm,
      [field]: e.target.value
    }));
  }

  const onSelectRole = (e) => {
    dispatch(setUserEditData({
      ...userForm, 
      role: e
    }));
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card">
        <div className="card-header">Add Users</div>
        <div className="card-body">
          <label>Name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={userForm.name}
            name="name"
            onChange={onChangeForm}
          />
          <label>ROLE</label>
          <DropdownButton
            id="dropdown-basic-button"
            title={userForm.role}
            onSelect={onSelectRole}
          >
            {
              USER_ROLES.map((text, index) => {
                return (
                  <Dropdown.Item
                    key={index}
                    eventKey={text}
                  >{ text }</Dropdown.Item>
                )
              })
            }
          </DropdownButton>
          <label className="mt-3">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={userForm.email}
            onChange={onChangeForm}
            name="email"
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={userForm.password}
            onChange={onChangeForm}
            name="password"
          />
          <button disabled={btnDisabled} className="btn btn-yellow px-4 mt-4">
            Create New
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
