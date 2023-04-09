import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = ({data}) => {
    console.log(data)
    return (
        <div>
            <h2 className='font-bold text-3xl text-center mt-10'>Job Category List</h2>
            <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-3 mt-9'>
            {
                data.map(singleData => <SingleCategory singleData={singleData} key={singleData.id}></SingleCategory>)
            }
            </div>
        </div>
    );
};

export default Category;