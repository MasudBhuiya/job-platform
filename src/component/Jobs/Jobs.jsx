import React from 'react';

const Jobs = ({job}) => {
    const { name,jobTitle, companyLogo,salary,type,location} = job;
    return (
        <div className='border-indigo-200 border-2 m-4 p-3 flex items-center h-[150px]'>
            <img className='w-[240px]' src={companyLogo} alt="" />
            <div className='ml-7'>
                <h1>{jobTitle}</h1>
                <h1>{name}</h1>
                <div className='flex gap-3 '>
                    <p>{type.first}</p>
                    <p>{type.second}</p>
                </div>
                <div className='flex gap-3'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default Jobs;