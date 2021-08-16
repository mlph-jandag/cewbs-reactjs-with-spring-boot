import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchPost, setCategory } from '../../slices/postSlice';

const HomeCategoryButtons = () => {
    const [cats, setCats] = useState(['all']);
    const dispatch = useDispatch();
    const categoryState = useSelector(state => state.post.category);

    const fetchCategories = async () => {
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const onClickCategoryHandler = (cat) => {
        dispatch(searchPost(''))
        dispatch(setCategory(cat));
      };

    return (
        <div className="category-buttons">
            {
                cats.map((cat, index) => {
                    return (
                        <Link to="/posts" onClick={() => onClickCategoryHandler(cat)} className="btn-yellow toupper" key={index}>
                            { cat }
                        </Link>
                    );
                })
            }
        </div>
    )
}


export default HomeCategoryButtons;