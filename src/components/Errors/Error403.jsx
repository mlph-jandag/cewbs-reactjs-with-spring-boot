import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'

const Error403 = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Access denied.</h1>
        <p>You don't enough permission to access this page.</p>
      </div>
    </DefaultLayout>
  )
}

export default Error403
