import React from 'react';
import Navbar from './Navbar.tsx';

const Layout = ({ children }) => {
    return (
        <>
            <div className="h-40 grid place-content-center bg-indigo-900 text-gray-50">
                <h1 className="text-2xl">Hello, world. Learn how to code</h1>
            </div>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;