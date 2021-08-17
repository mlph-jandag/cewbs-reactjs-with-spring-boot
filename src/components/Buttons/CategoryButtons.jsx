import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import classes from './Category.module.css'

const CategoryButtons = () => {
    const [cats, setCats] = useState([{name: "All"}]);
    const categoryState = useSelector(state => state.post.category);

    const fetchCategories = async () => {
        axios.get('/categories').then((response) => {
            let catData= response.data.content.map(cat => {
                return cat
            })
            setCats(oldData => [...cats, ...catData])
        }).catch(err => {

        })
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
                            to={`/posts/category/${cat.name}`}
                        >
                            { cat.name }
                        </Link>
                    );
                })
            }
        </div>
    )
}


export default CategoryButtons;