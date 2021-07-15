import React, { useEffect, useState} from 'react'
import { firestore } from '../../firebase.config';
import CategoryActions from './CategoryActions';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [isEdit, setIsEdit] = useState({id: 0, editMode: false});

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

    // useEffect(() => {
    //   console.log(isEdit);
    //   setIsEdit(isEdit);
    // }, [isEdit]);

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
            categories.map(cat => {
              let mslug = cat.data.slug;
              let mname = cat.data.category_name;
              return (
                <tr key={ cat.uid }>
                    <td>{ cat.uid }</td>
                    <td>
                      {
                        isEdit.editMode && isEdit.id == cat.uid
                        ?
                        <input
                          type="text"
                          className="form-control"
                          value={mname}
                        />
                        :
                        <span>{ mname }</span>
                      }
                    </td>
                    <td>
                      {
                        isEdit.editMode && isEdit.id == cat.uid
                        ?
                        <input
                          type="text"
                          className="form-control"
                          value={mslug}
                        />
                        :
                        <span>{ mslug }</span>
                      }
                    </td>
                    <td>
                      <CategoryActions
                        data={ cat }
                        setIsEdit={ setIsEdit }
                        isEdit={ isEdit }
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
