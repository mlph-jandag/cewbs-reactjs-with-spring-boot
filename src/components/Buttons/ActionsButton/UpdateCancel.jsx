import React from 'react'

const UpdateCancel = ({ onCancel, onUpdate }) => {
    return (
        <>
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={onUpdate}
          >Update</button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={ onCancel }
          >Cancel</button>
        </>
    )
}

export default UpdateCancel
