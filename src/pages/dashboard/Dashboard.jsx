import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="row mr-0 ml-0">
                <Sidebar />
                <div className="col p-4">
                    <h1 className="display-4">Welcome,</h1>
                    <div className="card">
                        <h5 className="card-header font-weight-light">Posts</h5>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
