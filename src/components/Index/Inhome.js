import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import './Index.css'


export default class Inhome extends Component {
    render() {
        return (
            <div className="index-admin">

                <div className="roommns-admin">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="member" />
                </div>
                <div className="p-chart">
                    <p>สรปผล</p>
                </div>
                <div className="chartjs">
                    <Line 
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
                        datasets: [
                            {
                                label: "ปีล่าสุด",
                                data: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12],
                                backgroundColor: 'orange',
                                borderColor: 'black',
                                borderWidth: 3,
                            },
                            {
                                label: 'รวมทุก่ปี',
                                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                                backgroundColor: 'red',
                                borderColor: 'blue',
                            }
                        ]
                        
                    }}
                    height={400}
                    width={100}

                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                    />
                </div>

            </div>
        )
    }
}
