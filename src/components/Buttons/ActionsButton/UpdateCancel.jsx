import React from 'react'

const UpdateCancel = ({ onCancelHandler, onUpdateHandler }) => {
    return (
      <div className="d-flex justify-content-around">
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={onUpdateHandler}
          >Update</button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={ onCancelHandler }
          >Cancel</button>
        </div>
    )
}

export default UpdateCancel
