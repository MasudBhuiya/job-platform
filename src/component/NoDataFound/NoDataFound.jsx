import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NoDataFound = () => {
    const navigate = useNavigate()
    const handleGoBack =()=>{
        navigate(-1)
    }
    return (
        <div className='flex items-center my-12 justify-center text-center'>
            <div>
            <h1 className='text-8xl font-bold '>404</h1>
            <h1 className='text-2xl font-bold'>Sorry, This page doesn't exist</h1>
            <Link><button className='bg-indigo-400 p-2 rounded text-white font-medium mt-8' onClick={handleGoBack}>Go Back</button></Link>
            </div>
        </div>
    );
};

export default NoDataFound;