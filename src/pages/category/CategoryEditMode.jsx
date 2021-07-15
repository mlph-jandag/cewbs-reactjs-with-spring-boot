import React, { useState } from 'react';
import UpdateCancel from '../../components/Buttons/ActionsButton/UpdateCancel';
import { firestore } from '../../firebase.config';
import { useAlert } from 'react-alert';

const CategoryEditMode = (props) => {
  const alertUi = useAlert();

  const [catName, setCatName] = useState(props.data.category_name);
  const [slug, setSlug] = useState(props.data.slug);
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const onCancelHandler = () => {
    props.setAction({
      id: 0, editMode: false
    })
  }

  const onUpdateHandler = () => {
    setBtnDisabled(true);
    firestore.collection('categories').doc(props.id).update({
      category_name: catName,
      slug: slug
    }).then(result => {
      console.log(result);
      alertUi.success('Updated successfully!');
      onCancelHandler();
    }).catch(error => {
      alertUi.error('There is a problem while updating!');
    }).finally(
      setBtnDisabled(false)
    )
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
          btnDisabled={ btnDisabled }
        />
      </td>
    </>
  )
}

export default CategoryEditMode
