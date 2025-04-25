import React from 'react';
import { Sidebar, Footer } from './components';
import { Outlet } from 'react-router-dom';

function Routes() {
    return (
        <>
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Routes;
