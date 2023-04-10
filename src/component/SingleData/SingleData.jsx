import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';

const SingleData = ({ singleData}) => {
    // console.log(detail)
    const { CompanyName, companyLogo, name, salary, location, type, id
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
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</p>
                <p><FontAwesomeIcon icon={faDollar} /> {location} {salary}</p>
            </div>
            <Link to={`/detail/${id}`} ><button className='bg-indigo-400 p-2 rounded text-white font-medium'>View Details</button></Link>
            
        </div>
    );
};

export default SingleData;