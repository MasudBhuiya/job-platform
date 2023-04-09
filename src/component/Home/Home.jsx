import React from 'react';
import Category from '../CategoryList/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData() 
    // console.log(data)
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
            <Category data={data}></Category>
        </div>
    );
};

export default Home;