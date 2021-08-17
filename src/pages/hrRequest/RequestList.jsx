import React, { useEffect, useState} from 'react'

const RequestList = () => {

  useEffect(() => {

  }, []);

  return (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Requestor</th>
              <th>Department</th>
              <th>Classification</th>
              <th>Status</th>
            </tr>
          </thead>

        </table>
  )
}

export default RequestList
