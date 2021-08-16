import React, {useEffect} from 'react'
import { axiosAutoload } from '../../api/apiHandler';
import { useAuth } from '../../contexts/AuthContext';

const LoggedUser = () => {
  const {user} = useAuth();
  
  useEffect(() => {
    axiosAutoload('/users').then(res => {
      console.log(res);
    }).catch(err => {
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
