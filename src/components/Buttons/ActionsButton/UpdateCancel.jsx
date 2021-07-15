import React from 'react'

const UpdateCancel = ({ onCancel, onUpdateHandler }) => {
    return (
      <div className="d-flex justify-content-around">
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={onUpdateHandler}
          >Update</button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={ onCancel }
          >Cancel</button>
        </div>
    )
}

export default UpdateCancel
