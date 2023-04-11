import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Headers from '../Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;