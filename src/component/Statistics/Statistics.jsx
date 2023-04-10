import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const marks = [
        {
            id: '1',
            mark: '53',
            name: 'assignment-one'
        },
        {
            id: '2',
            mark: '56',
            name: 'assignment-one'
        },
        {
            id: '3',
            mark: '60',
            name: 'assignment-three'
        },
        {
            id: '4',
            mark: '60',
            name: 'assignment-four'
        },
        {
            id: '5',
            mark: '54',
            name: 'assignment-five'
        },
        {
            id: '6',
            mark: '58',
            name: 'assignment-six'
        },
        {
            id: '7',
            mark: '60',
            name: 'assignment-seven'
        },
    ]
    return (
        <div className='flex justify-center mt-12 '>
            <BarChart
        width={500}
        height={300}
        data={marks}
        >
            <Bar dataKey="mark" fill='#8884d8'></Bar>
            <XAxis dataKey="id"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Statistics;