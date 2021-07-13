import React from 'react';
import CategoryButtons from '../../components/Buttons/CategoryButtons';
import DefaultLayout from '../../components/Layouts/DefaultLayout';

const Dashboard = () => {
    return (
        <DefaultLayout>
            <CategoryButtons />
            <div className="card mt-5">
                <h5 className="card-header font-weight-light">Posts</h5>
                <div className="card-body">
                    Sample
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Dashboard
