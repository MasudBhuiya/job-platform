import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const AppliedJobs = () => {
    const loader = useLoaderData()
    return (
        <div className='mt-12'>
            <div className='flex justify-end '>
            <button className='bg-indigo-400 p-2 rounded text-white font-medium mr-10 '>Remote</button>
            </div>
            {
                loader.map(jb=> <Jobs job={jb} key={jb.id}></Jobs>)
            }
        </div>
    );
};

export default AppliedJobs;