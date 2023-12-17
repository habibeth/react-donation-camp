import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageDonation } from "../utility/localStorage";
import './Statistics.css'

import { PieChart, Pie, Cell } from 'recharts';


const Statistics = () => {
    const statisticsOfPrice = useLoaderData();
    const [totalPercentage, setTotalPercentage] = useState(100);
    const [donatePercentage, setDonatePercentage] = useState(0);



    useEffect(() => {
        let summationTotalPrice = 0;
        let summationDonatePrice = 0;
        const donateData = getLocalStorageDonation();
        const existsData = [];

        for (const item of statisticsOfPrice) {
            const price = item.price;
            summationTotalPrice += price;
        }

        for (const donateId of donateData) {
            const exists = statisticsOfPrice.find(data => data.id === donateId);
            existsData.push(exists);
        }

        for (const donateItem of existsData) {
            const price = donateItem.price;
            summationDonatePrice += price;
        }

        const donateP = (summationDonatePrice * 100 / summationTotalPrice).toFixed(2);
        setDonatePercentage(donateP)
        const totalP = (totalPercentage - donateP).toFixed(2);
        setTotalPercentage(totalP);

        console.log(donateP)
        console.log(totalP)
    }, [statisticsOfPrice]);



    const data = [
        { name: 'Group A', value: parseInt(totalPercentage) },
        { name: 'Group B', value: parseInt(donatePercentage) },
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        fill="#8884d8"
                        cx="50%"
                        cy="50%"
                        label={renderCustomizedLabel}
                        labelLine={false}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center">
                    <span>Your Donation</span>
                    <p className="ml-2 h-2 w-14 my-donation mt-1 rounded-lg"></p>
                </div>
                <div className="ml-4 flex items-center">
                    <span>Total Donation</span>
                    <p className="ml-2 h-2 w-14 total-donation mt-1 rounded-lg"></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;