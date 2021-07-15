import React from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

const Category = () => {
    return (
        <DefaultLayout>
            <h3 className="mb-4">
                <span className="fa fa-list-alt fa-fw"></span> Category
            </h3>
            <div className="row">
                <div className="col-md-4">
                    <CategoryForm />
                </div>
                <div className="col">
                    <CategoryList />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Category;
