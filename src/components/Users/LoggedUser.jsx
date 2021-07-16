import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const LoggedUser = () => {
  const user = useAuth();
  const data = user.currentUser.providerData[0];
  console.log(user);
  return (
    <table className="table-custom">
      <tbody>
        <tr>
          <td>Email</td>
          <td>{ data.email }</td>
        </tr>
        <tr>
          <td>Verified</td>
          <td>{ user.currentUser.emailVerified ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
          <td>Method Used</td>
          <td>{ data.providerId }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LoggedUser
