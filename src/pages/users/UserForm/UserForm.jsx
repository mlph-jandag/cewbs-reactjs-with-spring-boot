import React, { useState } from "react";
import { useAlert } from "react-alert";
import { uid } from "uid";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { USER_ROLES } from "../../../config/AppConfig";
import { postAxios } from "../../../api/apiHandler";
import { extractErrorMessages } from "../../../utils/responseUtils";

const UserForm = () => {
  const alertUi = useAlert();
  const [name, setName] = useState("sam");
  const [email, setEmail] = useState("sam@test.com");
  const [password, setPassword] = useState("test");
  const [role, setRole] = useState("ADMIN");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setBtnDisabled(true);
      let resp = await postAxios('/users', {
        name: name,
        email: email,
        role: role,
        password: password
      });
      console.log(resp);
      alertUi.success('Successfully added new user.');
    } catch(err) {
      console.log(err.response);
      alertUi.error(extractErrorMessages(err.response));
    } finally {
      setBtnDisabled(false);
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DropdownButton
            id="dropdown-basic-button"
            title={role ? role : 'Select Role'}
            onSelect={(e) => setRole(e)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
