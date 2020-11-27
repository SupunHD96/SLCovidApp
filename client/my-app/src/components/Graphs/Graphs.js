import React,{useEffect,useState} from 'react';
import Chart from "react-apexcharts";

export function DailyCovidCases(props){
    const {cases}=props
    const [options,setOptions]=useState(undefined);
    const [series,setSeries]=useState(undefined);

    useEffect(() => {
        let dates=[];
        let count=[];
        for(var i=0;i<cases.length;i++){
            dates.push(cases[i].date);
            count.push(parseInt(cases[i].count));
        }
        setOptions(
            {
                chart: {
                    id: "covid-cases"
                },
                xaxis: {
                    categories: dates
                }
            }
        );
        setSeries(
            [
                {
                  name: "COVID-19 CASES",
                  data: count
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