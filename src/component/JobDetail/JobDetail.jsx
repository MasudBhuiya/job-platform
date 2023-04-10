import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleDetail from '../SingleDetail/SingleDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faDollar } from '@fortawesome/free-solid-svg-icons'

const JobDetail = () => {
    const [detail, setDetail] = useState({})
    const params = useParams()
    const id = params.detailId;
    // console.log(id)
    const loader = useLoaderData();
    // console.log(loader);
    useEffect(()=>{
        if(loader){
            const find = loader ? loader.find(dt=> dt.id === id): '';
            setDetail(find)
        }
    }, [])
    console.log(detail)
    return (
        <div className='container mx-auto grid md:grid-cols-2 mt-10 gap-10 '>
            <div >
            <p className='mb-4'><span className="font-bold">Job Description: </span>{detail.jobDescription}</p>
            <br /><br />
            <p className='mb-4'><span className='font-bold'>job Responsibility:</span> {detail.jobResponsibility}</p>
            <br />
            <p className='mb-2'><span className='font-bold '>Educational Requirements:</span> <br /><br />  {detail.educational}</p>
            <br />
            <p><span className='font-bold'>Experiences: <br /><br /></span> {detail.experiences}</p>
            </div>
            <div>
            <div className='w-96 bg-indigo-50 p-4 h-fit rounded-lg'>
                <h2 className='font-bold text-lg mb-4 '>Job Details</h2>
                <hr  />
                <p className='mt-3'><FontAwesomeIcon icon={faDollarSign} /> Salary: {detail.salary}</p>
                <p></p>
                <br />
                <h2 className='font-bold text-lg mb-3'>Contact Information</h2>
                <hr/>
                <p className='mt-3'><span className='font-bold '>Phone:</span> {detail.phone}</p>
                <p className='mt-2'><span className='font-bold'>Email:</span> {detail.email}</p>
                <p className='mt-2'><span className='font-bold'>Address:</span> {detail.address}</p>
            </div>
            <button className='bg-indigo-400 text-white font-bold w-96 mt-6 p-2 rounded-lg'>button</button>
            </div>
            
        </div>
    );
};

export default JobDetail;