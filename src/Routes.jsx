import React from 'react';
import { SidebarNav, Footer } from './components';
import { Outlet } from 'react-router-dom';

function Routes() {
    return (
        <div className='flex h-screen'>
            <SidebarNav />
            <div className='flex flex-1 flex-col'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
export default Routes;
