import React from 'react'

const CategoryButtons = (props) => {
    const cats = ['games', 'events', 'mind nation'];

    return (
        <div className="category-buttons">
            <a className="btn-yellow">All </a>
            {
                cats.map(cat => {
                    return (
                        <a className="btn-yellow toupper">
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