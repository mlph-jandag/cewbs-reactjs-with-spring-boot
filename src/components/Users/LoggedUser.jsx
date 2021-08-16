import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const LoggedUser = () => {
  const {user} = useAuth();
  console.log(user);
  return (
    <table className="table-custom">
      <tbody>
        <tr>
          <td>Email</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LoggedUser
