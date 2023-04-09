import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header '>
            <h2 className='text-black text-2xl font-semibold'>Job Platform</h2>
            <div className='font-normal'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            </div>
            <Link><button className='bg-indigo-400 p-2 rounded text-white font-medium'>Star Applying</button></Link>
        </div>
    );
};

export default Header;