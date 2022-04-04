import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartDataDasboard from '../../hooks/chartData';

const DashboardAreaChart = () => {
    const [data, setData] = ChartDataDasboard();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={400}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend></Legend>
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DashboardAreaChart;