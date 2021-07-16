import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../../firebase.config';
import { setCategory } from '../../slices/postSlice';
import classes from './Category.module.css'

const CategoryButtons = () => {
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
        dispatch(setCategory(cat));
    };
    
    return (
        <div className="category-buttons">
            {
                cats.map((cat, index) => {
                    const categoryClass = ['btn-yellow toupper'];
                    if(cat === categoryState) 
                        categoryClass.push(classes.selected)
                    return (
                        <a href="#" onClick={() => onClickCategoryHandler(cat)} className={categoryClass.join(' ')} key={index}>
                            { cat }
                        </a>
                    );
                })
            }
        </div>
    )
}


export default CategoryButtons;