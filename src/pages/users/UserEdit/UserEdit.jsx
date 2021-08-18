import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { uid } from "uid";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { USER_ROLES } from "../../../config/AppConfig";
import { getAxios, postAxios, putAxios } from "../../../api/apiHandler";
import { extractErrorMessages } from "../../../utils/responseUtils";
import { setUserDone } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const alertUi = useAlert();
  const [userForm, setUserForm] = useState({name: '', email: '', password: '', role: ''});
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAxios(`/users/${id}`)
    .then(res => {
      console.log(res.data);
      const { name, email , roles } = res.data;
      setUserForm({
        ...userForm,
        name: name,
        email: email,
        role: roles[0].name
      });
    })
    .catch(err => {
      console.log(err);
      alertUi.error('Error while loading data.');
    })
    .finally(
      setLoading(false)
    )
  }, [])


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setBtnDisabled(true);
      console.log(userForm);
      let resp = await putAxios('/users', {
        name: userForm.name,
        email: userForm.email,
        role: userForm.role,
        password: userForm.password
      }, id);
      console.log(resp);
      alertUi.success('Successfully saved changes');
      dispatch(setUserDone());
    } catch(err) {
      console.log(err.response);
      alertUi.error(extractErrorMessages(err.response));
    } finally {
      setBtnDisabled(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="row mt-4">
        <form onSubmit={onSubmitHandler} className="col-md-4 mb-5">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-user"></i>&nbsp;
              Update User
            </div>
            <div className="card-body">
              <label>Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                value={userForm.name}
                onChange={(e) => setUserForm({...userForm, name: e.target.value})}
              />
              <label>ROLE</label>
              <DropdownButton
                id="dropdown-basic-button"
                title={userForm.role}
                onSelect={(e) => setUserForm({...userForm, role: e})}
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
                onChange={(e) => setUserForm({...userForm, email: e.target.value})}
              />
              <label className="mt-3">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={userForm.password}
                onChange={(e) => setUserForm({...userForm, password: e.target.value})}
              />
              <button disabled={btnDisabled} className="btn btn-yellow px-4 mt-4">
                Save Changes
              </button>
            </div>
          </div>
        </form>
        <div className="col-md-8">
          <p>Let's update user info.</p>
          <p>Email: { userForm.email }</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum dolores voluptate earum exercitationem qui unde, at quod nemo facilis! Provident ad sapiente ducimus maiores debitis, recusandae officiis ut odit fuga!</p>
          <Link to="/users">Go back</Link>
        </div>
      </div>
    </DefaultLayout>

  );
};

export default UserEdit;
