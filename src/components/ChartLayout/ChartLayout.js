import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';
import MarkChart from '../MarkChart/MarkChart';

const ChartLayout = () => {
    const chartData = useLoaderData();
    const rightmarkdata = localStorage.getItem('RightMark')
    const wrongmarkdata = localStorage.getItem('WrongMark')
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 bg-slate-200 p-2'>
                <div className='overflow-scroll bg-emerald-300 p-2'>
                    <div>
                        <h1 className='text-2xl font-bold p-3 bg-violet-600 rounded-lg text-white'>Quiz topic name and total questions</h1>
                    </div>
                    <div>
                    <Chart chartData={chartData.data}></Chart>
                    </div>
                </div>
                <div className='overflow-scroll bg-emerald-300 p-2'>
                    <div>
                        <h1 className='text-2xl font-bold p-3 bg-violet-600 rounded-lg text-white'>Mark Chart (Quiz Result)</h1>
                    </div>
                    <div>
                    {
                            rightmarkdata && wrongmarkdata? <MarkChart chartData={chartData.data}></MarkChart>:<p className='p-4 bg-red-300 rounded-lg my-2 font-bold'>For Quiz Result Chart you need to practice first</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartLayout;