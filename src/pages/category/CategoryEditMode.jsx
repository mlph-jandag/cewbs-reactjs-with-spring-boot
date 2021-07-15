import React, { useState } from 'react';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';

const CategoryEditMode = (props) => {
  console.log(props);
  const [catName, setCatName] = useState(props.data.category_name);
  const [slug, setSlug] = useState(props.data.slug);
  
  const onCancelHandler = () => {
    console.log('cancel');
    props.setAction({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {
    console.log('id'+ props.id);
  }
  return (
    <>
      <td>
        <input
          type="text"
          className="form-control"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
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
      <td>
        <UpdateCancel 
          onCancelHandler={ onCancelHandler }
          onUpdateHandler={ onUpdateHandler }
        />
      </td>
    </>
  )
}

export default CategoryEditMode
