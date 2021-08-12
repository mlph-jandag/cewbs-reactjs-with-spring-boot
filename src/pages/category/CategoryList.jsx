import React, { useEffect, useState} from 'react'
import { firestore } from '../../firebase.config';
import CategoryActions from './CategoryActions';
import CategoryEditMode from './CategoryEditMode';
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/categorySlice";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [action, setAction] = useState({id: 0, editMode: false});
  const dispatch = useDispatch();
  const update = useSelector(state => state.category.update);

  useEffect(() => {
      const fetchData = async () => {
            axios.get("/categories").then((response) => {
                let cat = response.data.content.map(data => {
                  return { data: {...data}, id: data.id }
                });
                setCategories(cat)
            })
          }
      fetchData();
      dispatch(setUpdate(false))
  }, [update, dispatch]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Category name</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.length > 0 ? categories.map(({ data, id}, index) => {
            return (
              <tr key={ id }>
                <td>{ index + 1 }</td>
                {
                  action.editMode && action.id == id
                  ?
                    <CategoryEditMode
                      data={ data }
                      setAction={ setAction }
                      id={ id }
                    />
                  :
                    <CategoryActions
                      propValues={{ data, id }}
                      setAction={ setAction }
                      action={ action }
                    />
                }
              </tr>
            );
          }): (
            <tr className="danger text-center">
               <td colSpan="5">No records found.</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default CategoryList
