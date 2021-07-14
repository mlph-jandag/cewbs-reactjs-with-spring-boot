import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase.config";

const CategoryDropDown = ({ category, onCategoryChanged }) => {
  const [cats, setCats] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = firestore.collection("categories");
      const data = await response.get();
      data.docs.forEach((item) => {
        const catValue = item.data().category_name;
        setCats((oldCats) => [...oldCats, catValue]);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              onClick={() => onCategoryChanged(cat)}
              className="dropdown-item"
              key={cat}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropDown;
