import React,{useEffect} from 'react';
import Chart from 'chart.js';

export function DailyCovidCases(props){
    const {cases}=props
    useEffect(() => {
        const ctx= document.getElementById("covid_cases");
        let dates=[];
        let count=[];
        for(var i=0;i<cases.length;i++){
            dates.push(cases[i].date);
            count.push(parseInt(cases[i].count));
        }
        new Chart(ctx,{
            type: 'bar',
            data: {
                labels: dates,
                datasets: [{
                    label: 'COVID CASES',
                    data: count,
                    borderWidth: 1,
                    backgroundColor:"#1fa2ff",
                    borderColor:"#1fa2ff",
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    })
    return (
        <div className="content">
            <canvas id="covid_cases" width="400" height="400"></canvas>
        </div>
    );
}