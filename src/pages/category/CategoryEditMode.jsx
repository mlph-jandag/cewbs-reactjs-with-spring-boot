import React, { useState } from 'react';

const CategoryEditMode = (props) => {
  const [name, setName] = useState(props.name);
  const [slug, setSlug] = useState(props.slug);

  return (
    <>
      <td>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </td>
    </>
  )
}

export default CategoryEditMode
