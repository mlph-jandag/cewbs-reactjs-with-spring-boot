import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase.config';
import { searchPost, setCategory } from '../../slices/postSlice';

const HomeCategoryButtons = () => {
    const [cats, setCats] = useState(['all']);
    const dispatch = useDispatch();
    const categoryState = useSelector(state => state.post.category);

    const fetchCategories = async () => {
        try {
            const response = firestore.collection('categories');
            const data = await response.get();
            data.docs.forEach(item => {
               const catValue = item.data().category_name;
                setCats(oldCats => [...oldCats, catValue])
            });
        } catch(e) {
            console.log(e);
        }
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