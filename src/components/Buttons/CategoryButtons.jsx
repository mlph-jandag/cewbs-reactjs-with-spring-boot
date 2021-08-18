import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import { searchPost } from '../../slices/postSlice';
import classes from './Category.module.css'

const CategoryButtons = () => {
    const [cats, setCats] = useState([{name: "All"}]);
    const categoryState = useSelector(state => state.post.category);
    const [search, setSearch] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const fetchCategories = async () => {
        axios.get('/categories').then((response) => {
            let catData= response.data.content.map(cat => {
                return cat
            })
            setCats(oldData => [...cats, ...catData])
        }).catch(err => {
            
        })
    }

    const onSearchHandler = (e) => {
        e.preventDefault()
        dispatch(searchPost(search))
        history.push('/posts')        
    }
    const searchHandler = (e) => {
        dispatch(searchPost(search))
        // history.push('/posts') 
        setSearch(e.target.value)       
    }
    
    useEffect(() => {
        dispatch(searchPost(''))
        fetchCategories();
    }, []);

    return (
        <>
        <div className="pull-right">
          <div className="input-group">
              <input className="form-control py-2 border-right-0 border" type="search" value={search} onChange={searchHandler} id="search"/>
              <span className="input-group-append">
                  <div onClick={onSearchHandler} className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
              </span>
          </div>
        </div>
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
                            to={cat.name == `All` ? `/posts` : `/posts/category/${cat.name}`}
                        >
                            { cat.name }
                        </Link>
                    );
                })
            }
        </div>
        </>
    )
}


export default CategoryButtons;