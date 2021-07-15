import React from 'react'

const ActionButtons = ({
  onDeleteHandler = null,
  setIsEdit = {},
  data = {},
}) => {
  return (
    <>
      <span onClick={() => {
        setIsEdit({
            id: data.uid,
            edit: true
        })
      }}>
          <i className="fa fa-pencil text-info"></i>
      </span>
      <span
          onClick={onDeleteHandler}
      >
          <i className="fa fa-trash-o text-danger"></i>
      </span>
    </>
  )
}

export default ActionButtons
