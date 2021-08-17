import React from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import GenerateReport from './GenerateRequestReport'
import RequestList from './RequestList'

const HRRequest = () => {
    return (
        <DefaultLayout>
            <h3 className="mb-4">
                <span className="fa fa-list-alt fa-fw"></span> HR Requests
            </h3>
            <div className="row">
                <div className="col-md-4">
                    <GenerateReport />
                </div>
                <div className="col">
                    <RequestList />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default HRRequest;