import React from 'react';
import ChartDataDasboard from '../../hooks/chartData';
import DashboardAreaChart from '../DashboardAreaChart/DashboardAreaChart';
import DashboardLineChart from '../DashboardLineChart/DashboardLineChart';

const Dashboard = () => {
    const [dataForChart, setDataForChart] = ChartDataDasboard();
    console.log(dataForChart);
    return (
        <div className='container py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <h3 className='font-medium text-2xl mb-4'>Investment vs Revenue</h3>
                    <DashboardLineChart></DashboardLineChart>
                </div>
                <div>
                <h3 className='font-medium text-2xl mb-4'>Investment vs Revenue vs Sell</h3>
                    <DashboardAreaChart></DashboardAreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;