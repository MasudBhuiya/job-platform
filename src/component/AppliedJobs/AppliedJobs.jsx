import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const AppliedJobs = () => {
    const loader = useLoaderData()
    return (
        <div>
            {
                loader.map(jb=> <Jobs job={jb} key={jb.id}></Jobs>)
            }
        </div>
    );
};

export default AppliedJobs;