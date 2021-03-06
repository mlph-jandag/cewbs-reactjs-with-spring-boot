import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase.config';
import classes from './Category.module.css'

const CategoryButtons = () => {
    const [cats, setCats] = useState([]);
    const categoryState = useSelector(state => state.post.category);

    const fetchCategories = async () => {
        try {
            const response = firestore.collection('categories');
            const data = await response.get();
            data.docs.forEach(item => {
               const cat = item.data();
                setCats(oldCats => [...oldCats, cat])
            });
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="category-buttons">
            {
                cats.map((cat, index) => {
                    const categoryClass = ['btn-yellow toupper'];
                    if(cat === categoryState) 
                        categoryClass.push(classes.selected)
                    return (
                        <Link
                            className="btn-yellow toupper"
                            key={index}
                            to={`/posts/category${cat.slug}`}
                        >
                            { cat.category_name }
                        </Link>
                    );
                })
            }
        </div>
    )
}


export default CategoryButtons;