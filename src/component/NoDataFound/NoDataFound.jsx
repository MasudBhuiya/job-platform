import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const NoDataFound = () => {
    const navigate = useNavigate()
    const handleGoBack =()=>{
        navigate(-1)
    }
    const {error, status} = useRouteError()
    console.log(error.message, status)
    return (
        <div className='flex items-center my-12 justify-center text-center'>
            <div>
            <h1 className='text-8xl font-bold '>{status|| 400}</h1>
            <h1 className='text-2xl font-bold'>{error?.message}</h1>
            <Link><button className='bg-indigo-400 p-2 rounded text-white font-medium mt-8' onClick={handleGoBack}>Go Back</button></Link>
            </div>
        </div>
    );
};

export default NoDataFound;