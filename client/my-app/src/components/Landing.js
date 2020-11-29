import React,{useEffect,useState} from 'react'
import {DailyCovidCases,SLTotalBreakdown,FatalityRates,RecoveryRates} from "./Graphs/Graphs";
import {LocalStats,GlobalStats} from "./Statistics/Statistics";
import {HospitalStats} from "../components/Graphs/Hospitals"
import Intro from "./Intro/intro";

const API = `https://hpb.health.gov.lk/api/get-current-statistical`;
const API_global=`https://api.covid19api.com/summary`;

export default function Landing() {
    //local data 
    const [pcrTestData,setPCRTestData]=useState(undefined);
    const [localStats,setLocalStats]=useState(undefined);
    //non local Data
    const [globalStats,setGlobalStats]=useState(undefined);
    const [globalUniqueData,setglobalUniqueData]=useState(undefined);
    //local hospital data
    const [hospitalStats, setHospitalStats]=useState(undefined);
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
            setHospitalStats(data.data.hospital_data)
            console.log(data);
        },
        (error)=>{
            console.log(error);
        })
        fetch(API_global).then((res)=>res.json()).then((data)=>{
            setglobalUniqueData(data.Countries);
            console.log(data.Countries);
        })
    },[])
    return (
        <div>
            <div>
                <Intro />
                {localStats && <LocalStats local={localStats} />}
                {globalStats && <GlobalStats global={globalStats} />}
                {pcrTestData && <DailyCovidCases cases={pcrTestData}/>}
                {localStats && <SLTotalBreakdown local={localStats} />}
                {(globalStats && globalUniqueData) && 
                    <>
                        <FatalityRates global={globalUniqueData} globalTotal={globalStats} />
                        <RecoveryRates global={globalUniqueData} globalTotal={globalStats} />
                    </>
                }
                {hospitalStats && <HospitalStats hos={hospitalStats} />}
            </div>
        </div>
    );
}

/*Helpful formulas 
#Recovery Rate = New Recoveries/New Infected
#Fatality Rate = New Fatality/New Infected
*/