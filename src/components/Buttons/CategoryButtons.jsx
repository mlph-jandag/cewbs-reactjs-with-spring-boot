import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase.config';

const CategoryButtons = () => {
    const [cats, setCats] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = firestore.collection('categories');
            const data = await response.get();
            data.docs.forEach(item => {
               const catValue = item.data().category_name;
                setCats(oldCats => [...oldCats, catValue])
            });
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <div className="category-buttons">
            <a href="/" className="btn-yellow toupper">All </a>
            {
                cats.map((cat, index) => {
                    return (
                        <a href="/" className="btn-yellow toupper" key={index}>
                            { cat }
                        </a>
                    );
                })
            }
        </div>
    )
}


export default CategoryButtons;