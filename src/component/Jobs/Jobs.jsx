import React from 'react';
import './Jobs.css'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const { name,jobTitle, companyLogo,salary,type,location, id} = job;
    return (
        <div className='container mx-auto border-indigo-200 border-2 m-4 p-3 flex items-center h-[200px]'>
            <img className='w-32' src={companyLogo} alt="" />
            <div  className='ml-5 details'>
                <h1>{jobTitle}</h1>
                <h1>{name}</h1>
                <div className='flex gap-3 '>
                    <p className='m-1 border-indigo-400 border-2 rounded px-1 text-indigo-400'>{type.first}</p>
                    <p className='m-1 border-indigo-400 border-2 rounded px-1 text-indigo-400'>{type.second}</p>
                </div>
                <div className='flex gap-3'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/detail/${id}`}><button className='bg-indigo-400 p-2 rounded text-white font-medium mr-10' >View Details</button></Link>
        </div>
    );
};

export default Jobs;