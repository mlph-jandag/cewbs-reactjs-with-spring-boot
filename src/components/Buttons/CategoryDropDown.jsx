import React from 'react'

const CategoryDropDown = () => {
    const categories = ["games", "events", "mindnation"];

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownCategoryButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                {
                    categories.map(cat => {
                        return (
                            <a className="dropdown-item" href="#">
                                {cat}
                            </a>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CategoryDropDown;