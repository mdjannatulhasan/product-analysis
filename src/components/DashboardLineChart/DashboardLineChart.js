import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartDataDasboard from '../../hooks/chartData';

const DashboardLineChart = () => {
    const [data, setData] = ChartDataDasboard();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default DashboardLineChart;