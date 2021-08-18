import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/categorySlice";

const CategoryDropDown = ({ category, onCategoryChanged }) => {
  const [cats, setCats] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
        const fetchData = async () => {
              axios.get("/categories").then((response) => {
                  let cat = response.data.content.map(data => {
                    return { data: {...data}, id: data.id }
                  });
                  setCats(cat)
              })
            }
        fetchData();
        dispatch(setUpdate(false))
    }, [dispatch]);

  const categoryName = (category) => {
    const result = cats.find(cat => cat.id === category)
    if(result){
      return result.data.name
    }
    return "Please select category"
  }
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownCategoryButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* {cats.some(c => c.id === category) ? cats.find(c => c.id === category).name : "Select category"} */}
        {categoryName(category)}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
        {cats.map((cat) => {
          return (
            <button
              onClick={() => onCategoryChanged(cat.data.id)}
              className="dropdown-item"
              key={cat.id}
            >
              {cat.data.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropDown;
