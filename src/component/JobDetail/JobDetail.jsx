import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleDetail from '../SingleDetail/SingleDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCalendarAlt, faPhoneAlt, faMailBulk, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';

const JobDetail = () => {
    const [detail, setDetail] = useState({})
    const [cart, setCart] = useState([])
    const params = useParams()

    const handleAddToCart = (id) =>{
        const addCart = addToDb(id);
        setCart(addCart);
    }

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
    // console.log(detail)
    return (
        <div className='container mx-auto grid md:grid-cols-2 mt-10 gap-10 '>
            <div >
                <h2 className='font-bold text-2xl mb-2'>Name: {detail.name}</h2>
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
                <p className='mt-3 mb-2'><span className='text-indigo-400'><FontAwesomeIcon icon={faDollarSign} /></span> Salary: {detail.salary}</p>
                <p className='text-indigo-400'><FontAwesomeIcon icon={faCalendarAlt} /></p>
                <br />
                <h2 className='font-bold text-lg mb-3'>Contact Information</h2>
                <hr/>
                <p className='mt-3'><span className='text-indigo-400'><FontAwesomeIcon icon={faPhoneAlt} /></span> <span className='font-bold '>Phone:</span> {detail.phone}</p>
                <p className='mt-2'><span className='text-indigo-400'><FontAwesomeIcon icon={faMailBulk} /></span> <span className='font-bold'>Email:</span> {detail.email}</p>
                <p className='mt-2'><span className='text-indigo-400'><FontAwesomeIcon icon={faMapMarkerAlt} /></span> <span className='font-bold'>Address:</span> {detail.address}</p>
            </div>
            <button className='bg-indigo-400 text-white font-bold w-96 mt-6 p-2 rounded-lg' onClick={()=>handleAddToCart(detail.id)}>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetail;