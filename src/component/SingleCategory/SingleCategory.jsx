import React from 'react';

const SingleCategory = ({ singleData }) => {
    return (
        <div className='bg-indigo-50 m-3 p-4 rounded'>
            <img className='h-12 w-12 ' src={singleData.CompanyLogo
            } alt="" />
            <h1 className='font-bold text-lg'>{singleData.name}</h1>
            <p>{singleData.abailable}</p>
        </div>
    );
};

export default SingleCategory;