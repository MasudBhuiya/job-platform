import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


const Statistics = () => {
    // const marks = [
    //     {
    //         "id": 21,
    //         "mark": 53,
    //         "name": 'assignment-one',
    //         "fullMark":60
    //     },
    //     {
    //         "id":32,
    //         "mark": 56,
    //         "name": 'assignment-one',
    //         "fullMark":60
    //     },
    //     {
    //         "id": 43,
    //         "mark": 60,
    //         "name": 'assignment-three',
    //         "fullMark":60
    //     },
    //     {
    //         "id":54,
    //         "mark": 60,
    //         "name": 'assignment-four',
    //         "fullMark":60
    //     },
    //     {
    //         "id": 45,
    //         "mark": 54,
    //         "name": 'assignment-five',
    //         "fullMark":60
    //     },
    //     {
    //         "id": 36,
    //         "mark": 58,
    //         "name": 'assignment-six'
    //     },
    //     {
    //         "id": 27,
    //         "mark": 60,
    //         "name": 'assignment-seven',
    //         "fullMark":60
    //     },
    // ]

    const data = [
        {
          "subject": "assignment-one",
          "mark": 53,
          "fullMark": 60
        },
        {
          "subject": "assignment-two",
          "mark": 56,
          "fullMark": 60
        },
        {
          "subject": "assignment-three",
          "mark": 60,
          "fullMark": 60
        },
        {
          "subject": "assignment-four",
          "mark": 60,
          "fullMark": 60
        },
        {
          "subject": "assignment-five",
          "mark": 54,
          "fullMark": 58
        },
        {
          "subject": "assignment-six",
          "mark": 58,
          "fullMark": 60
        }
    ]
    return (
        <div className='flex justify-center mt-12 '>
            <RadarChart outerRadius={120} width={730} height={350} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 65]} />
        <Tooltip></Tooltip>
  <Radar name="FullMark" dataKey="fullMark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Mark" dataKey="mark" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
        </div>
    );
};

export default Statistics;