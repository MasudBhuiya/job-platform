import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Category = ({ singleData }) => {
    // console.log(singleData)
    return (
        <div>
            <div className='bg-indigo-50 m-3 p-4 rounded h-46'>
                <img className='h-12 w-12 rounded' src={singleData.icon
                } alt="" />
                <h1 className='font-bold text-lg'>{singleData.name}</h1>
                <p>{singleData.abailable}</p>
            </div>
        </div>
    );
};

export default Category;