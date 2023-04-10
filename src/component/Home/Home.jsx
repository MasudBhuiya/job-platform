import React, { useEffect, useState } from 'react';
import Category from '../CategoryList/Category';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturesJobs/FeaturedJobs';

const Home = () => {
    const data = useLoaderData() 
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid md:grid-cols-2 bg-slate-100 gap-3 p-4 rounded'>
                <img className='' src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" alt="" />
                <div>
                    <h1 className='font-bold text-4xl mb-4'>Getting a great <br /> job starts with a<br /><span className='text-indigo-400'> great resume</span></h1>
                    <p className='text-black mb-5'>Explore thousands of job opportunities with all the <br></br> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='bg-indigo-400 p-2 rounded text-white font-medium'>Get Started</button>
                </div>
            </div>
            <h2 className='font-bold text-3xl text-center mt-10'>Job Category List</h2>
            <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 mt-9'>
            {
                category.map(singleData => <Category singleData={singleData} key={singleData.id}></Category>)
            }
            </div>
            <FeaturedJobs  data={data}></FeaturedJobs>
        </div>
    );
};

export default Home;