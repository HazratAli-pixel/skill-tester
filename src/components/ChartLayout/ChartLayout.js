import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const ChartLayout = () => {
    const chartData = useLoaderData();
    return (
        <div>
            <Chart chartData = {chartData.data}></Chart>
        </div>
    );
};

export default ChartLayout;