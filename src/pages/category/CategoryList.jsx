import React, { useEffect, useState} from 'react'
import { firestore } from '../../firebase.config';
import CategoryActions from './CategoryActions';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

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
            categories.map(cat => {
              return (
                <tr key={ cat.uid }>
                    <td>{ cat.uid }</td>
                    <td>{ cat.data.category_name }</td>
                    <td>{ cat.data.slug }</td>
                    <td>
                      <CategoryActions data={ cat } />
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
