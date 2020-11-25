import React,{useEffect,useState} from 'react'
import {DailyCovidCases} from "./Graphs/Graphs";
import {LocalStats,GlobalStats} from "./Statistics/Statistics";

const API = `https://hpb.health.gov.lk/api/get-current-statistical`

export default function Landing() {
    const [pcrTestData,setPCRTestData]=useState(undefined);
    const [localStats,setLocalStats]=useState(undefined);
    const [globalStats,setGlobalStats]=useState(undefined);
    useEffect(()=>{
        //fetching data from the gov health api (GET req)
        fetch(API).then((res)=>res.json()).then((data)=>{
            setPCRTestData(data.data.daily_pcr_testing_data);
            setLocalStats({
                local_active_cases:data.data.local_active_cases,
                local_deaths:data.data.local_deaths,
                local_new_cases:data.data.local_new_cases,
                local_new_deaths:data.data.local_new_deaths,
                local_recovered:data.data.local_recovered,
                local_total_cases:data.data.local_total_cases,
                local_total_number_of_individuals_in_hospitals:data.data.local_total_number_of_individuals_in_hospitals,
                total_pcr_testing_count:data.data.total_pcr_testing_count,
                update_date_time:data.data.update_date_time
            })
            setGlobalStats({
                global_deaths:data.data.global_deaths,
                global_new_cases:data.data.global_new_cases,
                global_new_deaths:data.data.global_new_deaths,
                global_recovered:data.data.global_recovered,
                global_total_cases:data.data.global_total_cases,
                update_date_time:data.data.update_date_time
            })
            console.log(data);
        },
        (error)=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <div>
                {localStats && <LocalStats local={localStats} />}
                {globalStats && <GlobalStats global={globalStats} />}
                {pcrTestData && <DailyCovidCases cases={pcrTestData}/>}
            </div>
            <p>Check console for data</p>
        </div>
    );
}
