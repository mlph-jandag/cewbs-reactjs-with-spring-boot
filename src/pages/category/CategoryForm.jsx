import React from 'react'

const CategoryForm = () => {
    return (
        <div className="card">
            <div className="card-header">Add Category</div>
            <div className="card-body">
                <label>Category Name</label>
                <input type="text" className="form-control" placeholder="Example. events" />
                <label className="mt-4">Slug</label>
                <input type="text" className="form-control" placeholder="/{slug}" />
                <button className="btn btn-yellow px-4 mt-4">Add</button>
            </div>
        </div>
    )
}

export default CategoryForm
