import React from 'react';
import SingleData from '../SingleData/SingleData';

const FeaturedJobs = ({data}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6'>
            {
                data.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
            }
            </div>
            <div className='flex items-center justify-center mt-6 '>
            <button className='bg-indigo-400 p-2 rounded text-white font-medium '>See  All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;