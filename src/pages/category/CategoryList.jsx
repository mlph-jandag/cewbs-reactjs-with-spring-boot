import React, { useEffect, useState} from 'react'
import { firestore } from '../../firebase.config';
import CategoryActions from './CategoryActions';
import CategoryEditMode from './CategoryEditMode';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [action, setAction] = useState({id: 0, editMode: false});
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
  });

  useEffect(() => {
      const unsubscribe = firestore.collection("categories")
        .onSnapshot((documentSnapshot) => {
          let cats = documentSnapshot.docs.map((data) => {
              return { uid: data.id, data: data.data() };
          });
          setCategories(cats);
        });
      return unsubscribe;
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Category name</th>
          <th>Slug</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map(({ data, uid}) => {
            return (
              <tr key={ uid }>
                <td>{ uid }</td>
                {
                  action.editMode && action.id == uid
                  ?
                    <CategoryEditMode
                      data={ data }
                      setFormData={ setFormData }
                    />
                  :
                  <>
                    <td>{ data.category_name }</td>
                    <td>{ data.slug }</td>
                  </>
                }
                <td>
                  <CategoryActions
                    propValues={{ data, uid }}
                    setAction={ setAction }
                    action={ action }
                    formData={ formData }
                    setFormData={ setFormData }
                  />
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

export default CategoryList
