import React, { useEffect, useState} from 'react'
import { firestore } from '../../firebase.config';
import CategoryActions from './CategoryActions';
import CategoryEditMode from './CategoryEditMode';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [action, setAction] = useState({id: 0, editMode: false});

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
          <th>#</th>
          <th>Category name</th>
          <th>Slug</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map(({ data, uid}, index) => {
            return (
              <tr key={ uid }>
                <td>{ index + 1 }</td>
                {
                  action.editMode && action.id == uid
                  ?
                    <CategoryEditMode
                      data={ data }
                      setAction={ setAction }
                      id={ uid }
                    />
                  :
                    <CategoryActions
                      propValues={{ data, uid }}
                      setAction={ setAction }
                      action={ action }
                    />
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

export default CategoryList
