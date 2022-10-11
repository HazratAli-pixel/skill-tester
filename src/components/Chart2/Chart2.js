import React, { useEffect, useState } from "react";
import {
    Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis,
    YAxis
} from "recharts";

export default function Chart2() {
    const [datas, setadata] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setadata(data.data))
      },[]);
  return (
     <div className="container mx-auto bg-slate-300">
         <div className="flex justify-center">
            <div>
            <ComposedChart
                width={500}
                height={400}
                data={datas}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart>
            </div>
         </div>
     </div>

  );
}