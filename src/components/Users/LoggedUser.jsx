import axios from 'axios';
import React, {useEffect} from 'react'
import { axiosAutoload, authHeader, getAxios } from '../../api/apiHandler';
import { useAuth } from '../../contexts/AuthContext';
import { API_URL } from '../../config/AppConfig';

const LoggedUser = () => {
  const {user} = useAuth();
  
  useEffect(() => {
    getAxios('/users')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }, [])

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
