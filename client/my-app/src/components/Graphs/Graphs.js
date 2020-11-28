import React,{useEffect,useState} from 'react';
import Chart from "react-apexcharts";

export function DailyCovidCases(props){
    const {cases}=props
    const [options,setOptions]=useState(undefined);
    const [series,setSeries]=useState(undefined);

    useEffect(() => {
        let data=[];
        for(var i=0;i<cases.length;i++){
            data.push([new Date(cases[i].date),parseInt(cases[i].count)]);
        }
        setOptions(
            {
                chart: {
                    id: "covid-cases"
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('19 Feb 2020').getTime(),
                    tickAmount: 6,
                  },
                  tooltip: {
                    x: {
                      format: 'dd MMM yyyy'
                    }
                },
                stroke:{
                    curve:"smooth"
                },
                title: {
                    text: "DAILY COVID CASES VS TIME",
                    align: 'center',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '24px',
                      fontWeight:  'bold',
                      fontFamily:  "helvetica",
                      color:  '#263238'
                    },
                }
            }
        );
        setSeries(
            [
                {
                  name: "COVID-19 CASES",
                  data: data
                }
            ]
        );
    },[cases])
    return (
        <div className="content">
        {
            (options && series) &&
            <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
            />
        }
        </div>
    );
}