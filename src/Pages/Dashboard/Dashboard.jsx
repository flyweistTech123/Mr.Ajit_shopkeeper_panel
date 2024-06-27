import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate } from 'react-router-dom';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import { IoIosArrowForward } from "react-icons/io";
import ReactApexChart from 'react-apexcharts';
import { OfferModel } from '../Offer Modal/OfferModal'



const Dashboard = () => {


    const percentage = 70;
    const navigate = useNavigate()
    const progressData = [
        {
            id: 1,
            progress: 30,
            Device: 'Device 1',
            Devicee: 'Device1',
            number: '1,43,382',
        },
        {
            id: 2,
            progress: 50,
            Device: 'Device 2',
            Devicee: 'Device2',
            number: '87,974',
        },
        {
            id: 3,
            progress: 70,
            Device: 'Device 3',
            Devicee: 'Device3',
            number: '45,211',
        },
        {
            id: 3,
            progress: 70,
            Device: 'Device 4',
            Devicee: 'Device4',
            number: '21,893',
        }
    ];


    const statusColors = {
        Device1: "#E57676",
        Device2: "#FDB74E",
        Device3: "#10507F",
        Device4: "#DC02FF",
    };
    const [series, setSeries] = useState([
        {
            name: '2023',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            color: '#2196F3'
        },
        {
            name: '2024',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            color: '#FFA500'
        },
    ]);

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '₹ (Amount)'
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: true,
            position: 'top'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "₹ " + val + " Amount";
                }
            }
        }
    });



    const [series1, setSeries1] = useState({
        name: 'Device',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        color: '#E57676'
    });

    const [series2, setSeries2] = useState({
        name: 'Device',
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
        color: "#10507F"
    });


    const [options1] = useState({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },

            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'category',
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: true,
            position: 'top'
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newSeries = [{
                data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
            }];
            setSeries1(newSeries);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        setModalShow(true);
    }, []);





    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <OfferModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='dashboard'>
                <div className='dashboard1'>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total Product Price</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Pending Amount</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Amount</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total EMI Collection</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Due Amount</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Amount</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total Penalty
                                    Collection</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Due Penalty</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Penalty</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total Loan Amount</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Total Amount</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Loan Amount</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>EMI Collection</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Pending EMI’s</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Complete EMI’s</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Total Down
                                    Payment</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Total Down Payment</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Down Payment </p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Other Payment</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Pending Payment</p>
                                    <span>12.2K  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Collected Payment</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard3'>
                            <div className='dashboard4'>
                                <p>Profit & Loss Amount</p>
                                <div className='dashboard44'>
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: "#10507F",
                                            backgroundColor: "#FFFFFF",
                                            trailColor: '#E57676',
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='dashboard5'>
                                <div className='dashboard6'>
                                    <p>Profit Amount</p>
                                    <span>10.1k  <IoIosArrowForward /> </span>
                                </div>
                                <div className='dashboard7'>
                                    <p>Loss Amount</p>
                                    <span>12.2K <IoIosArrowForward /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard12'>
                        <div className='dashboard88'>
                            <div className='dashboard8' >
                                <div className='dashboard9'>
                                    <h3>Profit & Loss Chart</h3>
                                    <div className='dashboard10'>
                                        <select name="" id="">
                                            <option value="">Month</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='dashboard11' onClick={() => navigate('/payment')}>
                                    <ReactApexChart options={options1} series={[series1, series2]} type="line" height={220} />
                                </div>
                            </div>
                        </div>
                        <div className='dashboard888'>
                            <div className='dashboard8' >
                                <div className='dashboard9'>
                                    <h3>Device Profits</h3>
                                    <div className='dashboard10'>
                                        <select name="" id="">
                                            <option value="">Last 7 Days</option>
                                        </select>
                                    </div>
                                </div>
                                {progressData.map(item => {
                                    const gradientColor = statusColors[item.Devicee] || "#9e9e9e";
                                    return (
                                        <div key={item.id} className='dashboard13'>
                                            <div className='dashboard14'>
                                                <p>{item.Device}</p>
                                                <p>{item.number}</p>
                                            </div>
                                            <div className="dashboard15">
                                                <div className="dashboard16" style={{ width: `${item.progress}%`, backgroundColor: gradientColor }}></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    <div className='dashboard17'>
                        <div className='dashboard8'>
                            <div className='dashboard9'>
                                <h3>Anual Report</h3>
                                <div className='dashboard10'>
                                    <select name="" id="">
                                        <option value="">All State</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Month</option>
                                    </select>
                                </div>
                            </div>

                            <div className='dashboard11'>
                                <ReactApexChart options={options} series={series} type="bar" height={350} />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)