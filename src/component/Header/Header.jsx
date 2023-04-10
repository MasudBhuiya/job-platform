import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Active from '../Layout/Active';

const Header = () => {
    return (
        <div className='header '>
            <h2 className='text-black text-2xl font-semibold'>Job Platform</h2>
            <div className='font-normal'>
            <Active to="/">Home</Active>
            <Active to="/statistics">Statistics</Active>
            <Active to="/applied">Applied Jobs</Active>
            <Active to="/blog">Blog</Active>
            </div>
            <Link><button className='bg-indigo-400 p-2 rounded text-white font-medium'>Star Applying</button></Link>
        </div>
    );
};

export default Header;