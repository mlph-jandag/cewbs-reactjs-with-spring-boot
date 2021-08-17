import React, { useEffect, useState} from 'react'
import CategoryActions from './CategoryActions';
import CategoryEditMode from './CategoryEditMode';
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/categorySlice";
import Pagination from "../../components/Pagination/Pagination";
import { useAlert } from "react-alert";

const CategoryList = () => {
  const alertUi = useAlert();
  const [categories, setCategories] = useState([]);
  const [action, setAction] = useState({id: 0, editMode: false});
  const dispatch = useDispatch();
  const update = useSelector(state => state.category.update);
  const search = useSelector(state => state.category.search);

  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
            if (update) setCurrentPage(0);
            axios.get(`/categories/search?page=${currentPage}&search=${search}`).then((response) => {
                let cat = response.data.content.map(data => {
                  return { data: {...data}, id: data.id }
                });
                setPages(response.data.totalPages);
                setCurrentPage(response.data.number);
                setFirst(response.data.first);
                setLast(response.data.last);
                setLoading(false);
                setCategories(cat)
            })
            .catch((err) => {
                    setLoading(false);
                    if (err.response) alertUi.error(err.response.data.message);
                    else alertUi.error(err.message);
            })
            }
      setLoading(true);
      fetchData();
      dispatch(setUpdate(false))
  }, [currentPage, alertUi, search, update, dispatch]);

  const nextPage = (page) => {
      if (page <= pages || page >= 0) {
        setCurrentPage(page);
      }
  };

  return (
      <>
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
              }) : loading ? (
                 <tr className="text-center">
                   <td colSpan="5">
                     <i className="fa fa-spinner fa-spin"></i> Loading
                   </td>
                 </tr>
               ): (
                <tr className="danger text-center">
                   <td colSpan="5">No records found.</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <Pagination
                totalPages={pages}
                first={first}
                last={last}
                currentPage={currentPage}
                navigate={nextPage}
        />
      </>
  )
}

export default CategoryList
