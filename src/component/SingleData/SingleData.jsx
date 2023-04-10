import React from 'react';

const SingleData = ({ singleData }) => {
    const { CompanyName, companyLogo, name, salary, location, type
    } = singleData
    return (
        <div className='border-2 p-4 rounded-md'>
            <img className='h-12 w-32' src={companyLogo} alt="" />
            <h2 className='font-bold text-lg'>{CompanyName}</h2>
            <h4>{name}</h4>
            <div >
                <button className='m-3 border-indigo-400 border-2 rounded px-1 text-indigo-400'>{type.first}</button>
                <button className='m-3 border-indigo-400 border-2 rounded px-1 text-indigo-400'>{type.second}</button>
            </div>
            <div className='flex gap-5 mb-3'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='bg-indigo-400 p-2 rounded text-white font-medium'>View Details</button>
        </div>
    );
};

export default SingleData;