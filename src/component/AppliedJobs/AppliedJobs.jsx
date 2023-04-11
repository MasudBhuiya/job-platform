import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';


const AppliedJobs = () => {
    const loader = useLoaderData()
    console.log(loader)
    const [cart, setCart] = useState(loader)
    const handleRemote = (value) => {
        setCart(loader)
        const filter = loader.filter(dt => dt.type.first === value)
        setCart(filter)
    }
    const handleOnside = (value) => {
        setCart(loader)
        const filter = loader.filter(dt => dt.type.first === value)
        setCart(filter)
    }
    return (
        <div className='mt-12'>
            <div className='flex justify-end '>
            <button onClick={()=>handleRemote('Remote')} className='bg-indigo-400 p-2 rounded text-white font-medium mr-10 '>Remote</button>
            <button onClick={()=>handleOnside('Onside')} className='bg-indigo-400 p-2 rounded text-white font-medium mr-10 '>Onside</button>
            </div>
            {
                cart.map(jb=> <Jobs job={jb} key={jb.id}></Jobs>)
            }
        </div>
    );
};

export default AppliedJobs;