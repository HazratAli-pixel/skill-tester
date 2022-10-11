import React from "react";
import {
    Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis,
    YAxis
} from "recharts";

export default function Chart({chartData}) {
  return (
        <ComposedChart
      width={500}
      height={400}
      data={chartData}
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

  );
}
