import React,{useEffect,useState} from 'react';
import Chart from "react-apexcharts";

export function DailyCovidCases(props){
    const {cases}=props
    const [options,setOptions]=useState(undefined);
    const [series,setSeries]=useState(undefined);

    useEffect(() => {
        let data=[];
        for(var i=0;i<cases.length;i++){
            data.push([new Date(cases[i].date),parseInt(cases[i].pcr_count)]);
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
                    curve:"smooth",
                    width:1.5
                },
                title: {
                    text: "DAILY PCR COUNT VS TIME",
                    align: 'center',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '14px',
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

export function DailyAntigenCount(props){

    const {antigen} = props;
    const [options,setOptions]=useState(undefined);
    const [series,setSeries]=useState(undefined);

    useEffect(() => {
        let data=[];
        for(var i=0;i<antigen.length;i++){
            data.push([new Date(antigen[i].date),parseInt(antigen[i].antigen_count)]);
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
                    curve:"smooth",
                    width:1.5
                },
                title: {
                    text: "DAILY ANTIGEN TEST COUNT VS TIME",
                    align: 'center',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '14px',
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
    },[antigen]);
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

export function SLTotalBreakdown(props){
    const {local_active_cases,local_deaths,local_recovered}=props.local;
    const series=[local_active_cases, local_deaths, local_recovered];
    return (
        <div className="content">
        {
            <Chart
                options={{
                    labels:['Total Active Cases', 'Total Deaths', 'Total Recovered'],
                    colors:['#5372F2', '#F25853', '#53F283'],
                    legend:{
                        position:'bottom'
                    }
                }}
                series={series}
                type="donut"
                width="100%"
            />
        }
        </div>
    );
}
export function FatalityRates(props){
    const {globalTotal,global}=props;
    const fatalityStats=[
        {x:"USA",y:((global[181].TotalDeaths/global[181].TotalConfirmed)*100).toFixed(2)},
        {x:"Sri Lanka",y:((global[161].TotalDeaths/global[161].TotalConfirmed)*100).toFixed(2)},
        {x:"France",y:((global[59].TotalDeaths/global[59].TotalConfirmed)*100).toFixed(2)},
        {x:"India",y:((global[76].TotalDeaths/global[76].TotalConfirmed)*100).toFixed(2)},
        {x:"Russia",y:((global[140].TotalDeaths/global[140].TotalConfirmed)*100).toFixed(2)},
        {x:"Global",y:((globalTotal.global_deaths/globalTotal.global_total_cases)*100).toFixed(2)}
    ]
    fatalityStats.sort(function(a,b){
        var keyA= parseFloat(a.y);
        var keyB= parseFloat(b.y);
        if(keyA<keyB) return 1;
        if(keyA>keyB) return -1;
        return 0;
    });
    return(
        <div className="content">
            <Chart
                options={{
                    plotOptions: {
                        bar: {
                            horizontal: true
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function(val) {
                            return  val +"%" 
                        },
                    },
                    tooltip: {
                        y: {
                            show: true,
                            formatter: function(val){
                                return val+"%"
                            }
                        },
                    },
                    title:{
                        text: "Fatality Rates",
                        align: 'center',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                          fontSize:  '18px',
                          fontWeight:  'bold',
                          fontFamily:  "sans-serif",
                          color:  '#263238'
                        },
                    }
                }}
                series={[{
                    name:"Fatality Rate",
                    data: fatalityStats
                  }]}
                type="bar"
                width="100%"
            />
        </div>
    );

}
export function RecoveryRates(props){
    const {globalTotal,global}=props;
    const recoveryStats=[
        {x:"USA",y:((global[181].TotalRecovered/global[181].TotalConfirmed)*100).toFixed(2)},
        {x:"Sri Lanka",y:((global[161].TotalRecovered/global[161].TotalConfirmed)*100).toFixed(2)},
        {x:"France",y:((global[59].TotalRecovered/global[59].TotalConfirmed)*100).toFixed(2)},
        {x:"India",y:((global[76].TotalRecovered/global[76].TotalConfirmed)*100).toFixed(2)},
        {x:"Russia",y:((global[140].TotalRecovered/global[140].TotalConfirmed)*100).toFixed(2)},
        {x:"Global",y:((globalTotal.global_recovered/globalTotal.global_total_cases)*100).toFixed(2)}
    ]
    recoveryStats.sort(function(a,b){
        var keyA= parseFloat(a.y);
        var keyB= parseFloat(b.y);
        if(keyA<keyB) return 1;
        if(keyA>keyB) return -1;
        return 0;
    });
    return(
        <div className="content">
            <Chart
                options={{
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            dataLabels:{
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function(val) {
                            return  val +"%" 
                        },
                    },
                    tooltip: {
                        y: {
                            show: true,
                            formatter: function(val){
                                return val+"%"
                            }
                        },
                    },
                    title:{
                        text: "Recovery Rates",
                        align: 'center',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                          fontSize:  '18px',
                          fontWeight:  'bold',
                          fontFamily:  "sans-serif",
                          color:  '#263238'
                        },
                    }
                }}
                series={[{
                    name:"Recovery Rate",
                    data: recoveryStats
                  }]}
                type="bar"
                width="100%"
            />
        </div>
    );

}
