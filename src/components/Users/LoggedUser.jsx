import axios from 'axios';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LoggedUser = () => {
  const { currentUser } = useAuth();
  return (
    <table className="table-custom">
      <tbody>
        <tr>
          <td>Name</td>
          <td>{ currentUser.name }</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{ currentUser.email }</td>
        </tr>
        <tr>
          <td>Role</td>
          <td>{ currentUser.authorities.map(role => Object.values(role))}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LoggedUser
