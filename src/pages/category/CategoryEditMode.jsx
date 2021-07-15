import React, { useState } from 'react';

// refactor this later
const CategoryEditMode = (props) => {
  const [catName, setCatName] = useState(props.data.category_name);
  const [slug, setSlug] = useState(props.data.slug);

  const onChangeCatName = (e) => {
    props.setFormData(prev => ({
      ...prev,
      name: catName
    }));
    setCatName(e.target.value);
  }

  const onChangeSlug = (e) => {
    props.setFormData(prev => ({
      ...prev,
      slug: slug
    }));
    setSlug(e.target.value);
  }
  return (
    <>
      <td>
        <input
          type="text"
          className="form-control"
          value={catName}
          onChange={onChangeCatName}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={slug}
          onChange={onChangeSlug}
        />
      </td>
    </>
  )
}

export default CategoryEditMode
