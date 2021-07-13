import React from 'react'

const CategoryButtons = (props) => {
    const cats = ['games', 'events', 'mind nation'];

    return (
        <div className="category-buttons">
            <a className="btn-yellow toupper">All </a>
            {
                cats.map((cat, index) => {
                    return (
                        <a className="btn-yellow toupper" key={index}>
                            { cat }
                        </a>
                    );
                })
            }
        </div>
    )
}

CategoryButtons.defaultProps = {
    hasAll: false,
    limit: 5
};

export default CategoryButtons;