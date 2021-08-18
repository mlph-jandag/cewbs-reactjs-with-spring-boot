import React from 'react'

const ActionButtons = ({
  onDeleteHandler = null,
  setIsEdit = {},
  data = {},
}) => {
  return (
    <>
      <span title="Click to edit" onClick={() => {
        setIsEdit({
            id: data.uid,
            edit: true
        })
      }}>
          <i className="fa fa-pencil text-info"></i>
      </span>
      <span title="Click to delete"
          onClick={onDeleteHandler}
      >
          <i className="fa fa-trash-o text-danger"></i>
      </span>
    </>
  )
}

export default ActionButtons
