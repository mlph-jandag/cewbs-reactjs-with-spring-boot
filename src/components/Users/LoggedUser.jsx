import axios from 'axios';
import React, {useEffect} from 'react';
import { authInfo } from '../../api/apiHandler';

const LoggedUser = () => {
  return (
    <table className="table-custom">
      <tbody>
        <tr>
          <td>Name</td>
          <td>{ authInfo.user.name }</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{ authInfo.user.email }</td>
        </tr>
        <tr>
          <td>Role</td>
          <td>{ authInfo.user.authorities.map(role => Object.values(role))}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LoggedUser
