import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="row mr-0 ml-0">
                <Sidebar />
                <div className="col p-4">
                    { children }
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout
