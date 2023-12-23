import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveNavbar from './Common/ResponsiveNavbar';

const Root = () => {
    return (
        <div className='relative'>
            <ResponsiveNavbar ></ResponsiveNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;