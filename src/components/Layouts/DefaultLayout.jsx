import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar/Navbar';

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
