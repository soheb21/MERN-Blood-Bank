import React from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAnalyticsBloodRecords } from '../redux/features/inventory/inventoryAction';
import { selectInventory } from '../redux/features/inventory/inventorySlice';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Spinner from "../utils/Spinner"


defaults.maintainAspectRatio = false;
defaults.responsive = true;
const Analytics = () => {

    const dispatch = useDispatch();
    const { loading, error, analytics } = useSelector(selectInventory);
    useEffect(() => {
        dispatch(getAnalyticsBloodRecords());
    }, [])

    const colrs = [
        "#FFAF45",
        "#FB6D48",
        "#D74B76",
        "#8B93FF",
        "#627254",
        "#EFBC9B"
    ]

    return (
        <Layout>
            <>
                {
                    loading ? <Spinner />
                        : <section className='flex flex-col h-full gap-4 w-full overflow-hidden bg-white'>
                            {error && <p className='text-red-500'>{error}</p>}
                            <p className='bg-purple-200 text-white text-2xl font-semibold'>Analytics</p>
                            <div className="bar mb-3 h-40 ">
                                <Bar
                                    data={{
                                        labels: analytics.map(i => i.bloodgrp),
                                        datasets: [
                                            {
                                                label: "Total In Qty",
                                                data: analytics.map(i => i?.tIn),
                                                backgroundColor: "green",
                                                borderRadius: 4
                                            },
                                            {
                                                label: "Total out Qty",
                                                data: analytics.map(i => i?.tout),
                                                backgroundColor: "orange",
                                                borderRadius: 4
                                            },
                                            {
                                                label: "Available Qty",
                                                data: analytics.map(i => i?.availableBlood),
                                                backgroundColor: "red",
                                                borderRadius: 4
                                            }
                                        ]

                                    }}

                                />

                            </div>
                            <div className="chart flex flex-col  gap-6 md:gap-2  md:flex-row md:justify-around">
                                <div className="dougnat md:w-1/2 h-60 overflow-auto no-scrollbar">
                                    <p className='text-sm bg-purple-500 text-white py-1'>Available Bloods</p>
                                    <Doughnut
                                        data={{
                                            labels: analytics.map(i => i.bloodgrp),
                                            datasets: [

                                                {
                                                    label: "Available Qty",
                                                    data: analytics.map(i => i?.availableBlood),
                                                    backgroundColor: colrs,


                                                }
                                            ],

                                        }}

                                    />
                                </div>
                                <div className="line md:w-1/2 h-60  overflow-auto no-scrollbar ">
                                    <p className='text-sm bg-purple-500 text-white py-1'>Total In and Out Qty</p>
                                    <Line
                                        data={{
                                            labels: analytics.map(i => i.bloodgrp),
                                            datasets: [
                                                {
                                                    label: "Total In Qty",
                                                    data: analytics.map(i => i?.tIn),
                                                    backgroundColor: "green",
                                                    borderRadius: 4
                                                },
                                                {
                                                    label: "Total out Qty",
                                                    data: analytics.map(i => i?.tout),
                                                    backgroundColor: "orange",
                                                    borderRadius: 4
                                                },

                                            ],

                                        }}
                                    />
                                </div>
                            </div>

                        </section>
                }
            </>
        </Layout>
    )
}

export default Analytics