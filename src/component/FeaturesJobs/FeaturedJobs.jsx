import React, { useState } from 'react';
import SingleData from '../SingleData/SingleData';


const FeaturedJobs = ({data}) => {
    const [seemore, setSeeMore] = useState(false)
    const handleViewAll = () => {
        setSeeMore(true)
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-center mt-7 mb-2'>Featured Jobs</h1>
            <p className='text-center mb-9'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6'>
            {
                data && data.slice(0,seemore ? 6 : 4).map(singleData => <SingleData  key={singleData.id} singleData={singleData}></SingleData>)
            }
            </div>
            <div className='flex items-center justify-center mt-6 '>
            {
                !seemore && <button className='bg-indigo-400 p-2 rounded text-white font-medium ' onClick={handleViewAll} >See  All Jobs</button>
            }
            </div>
        </div>
    );
};

export default FeaturedJobs;