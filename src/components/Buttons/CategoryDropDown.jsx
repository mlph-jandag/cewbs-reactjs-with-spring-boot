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
                  console.log(cat)
              })
            }
        fetchData();
        dispatch(setUpdate(false))
    }, [dispatch]);

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
        {category !== "" ? category : "Select category"}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
        {cats.map((cat) => {
          return (
            <button
              onClick={() => onCategoryChanged(cat.data.name)}
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
