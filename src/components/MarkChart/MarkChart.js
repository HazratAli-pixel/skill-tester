import React from 'react';
import {
    Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis,
    YAxis
} from "recharts";

const MarkChart = ({chartData}) => {
    
    const rightmarkdata = localStorage.getItem('RightMark')
    const wrongmarkdata = localStorage.getItem('WrongMark')
        

    const rightmarkdataOBJ = JSON.parse(rightmarkdata);
    const wrongmarkdataOBJ = JSON.parse(wrongmarkdata)
    
    const gitfilterdataR = rightmarkdataOBJ.filter(data => data.topic ==='Git').length;
    const gitfilterdataW = wrongmarkdataOBJ.filter(data => data.topic ==='Git').length;

    const cssfilterdataR = rightmarkdataOBJ.filter(data => data.topic ==='CSS').length;
    const cssfilterdataW = wrongmarkdataOBJ.filter(data => data.topic ==='CSS').length;

    const jsfilterdataR = rightmarkdataOBJ.filter(data => data.topic ==='JavaScript').length;
    const jsfilterdataW = wrongmarkdataOBJ.filter(data => data.topic ==='JavaScript').length;

    const reactfilterdataR = rightmarkdataOBJ.filter(data => data.topic ==='React').length;
    const reactfilterdataW = wrongmarkdataOBJ.filter(data => data.topic ==='React').length;

    
    const total = chartData.map(data => data.total);

      const data = [
        {
            name: "Git",
            totalquiz: total[3],
            right: gitfilterdataR,
            wrong: gitfilterdataW,

        },
        {
            name: "CSS",
            totalquiz: total[2],
            right:cssfilterdataR,
            wrong:cssfilterdataW,

        },
        {
            name: "JavaScript",
            totalquiz: total[1],
            right:jsfilterdataR,
            wrong:jsfilterdataW,

        },
        {
            name: "React",
            totalquiz: total[0],
            right:reactfilterdataR,
            wrong:reactfilterdataW,

        },
      ];


      return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="right" stackId="a" fill="#413ea0" />
                <Bar dataKey="totalquiz" stackId="b" fill="#00000" />
                <Bar dataKey="wrong" stackId="c" fill="#ffc658" />
            </BarChart>
        </div>
    );
};

export default MarkChart;
