import React,{useEffect,useState} from 'react'
import {DailyCovidCases,SLTotalBreakdown,FatalityRates,RecoveryRates} from "./Graphs/Graphs";
import {LocalStats,GlobalStats} from "./Statistics/Statistics";
import {HospitalStats} from "../components/Graphs/Hospitals"
import Intro from "./Intro/intro";
import Safety from "./Safety/Safety";

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
            // console.log(data);
        },
        (error)=>{
            console.log(error);
        })
        fetch(API_global).then((res)=>res.json()).then((data)=>{
            setglobalUniqueData(data.Countries);
            // console.log(data.Countries);
        })
    },[])
    return (
        <div>
                <div id="intro">
                    <Intro />
                </div>
                <div id="local">
                <br></br>
                </div>
                <div style={{backgroundColor:"#ECF0F1",textAlign:"center",color:"black"}}>
                    <h3 style={{color:"black",paddingBottom:"20px",paddingTop:"20px"}}>Covid 19 in Sri Lanka</h3>
                    <hr></hr>
                    {localStats && <LocalStats local={localStats} />}
                </div>
                <div style={{textAlign:"center"}}>
                     <h3 style={{paddingBottom:"20px",paddingTop:"20px"}}>Breakdown of the Statistics</h3> 
                    <hr></hr>
                    <div className="row">
                        <div className="col s12 m6" >
                            {pcrTestData && <DailyCovidCases cases={pcrTestData}/>}
                        </div>
                        <div className="col s12 m6" >
                            {localStats && <SLTotalBreakdown local={localStats} />}
                        </div>
                    </div>
                    
                </div>
                {hospitalStats && <HospitalStats hos={hospitalStats} />}

                <div id="global">
                    <br></br>
                </div>
                <div className="row" style={{textAlign:"center",backgroundColor:"#ECF0F1",color:"black"}}>
                    <h3 style={{paddingBottom:"20px",paddingTop:"20px"}}>Covid 19 in the World</h3>
                    <hr></hr>
                    {globalStats && <GlobalStats global={globalStats} />}
                </div>
                <div className="row" style={{textAlign:"center",backgroundColor:"white",color:"black"}}>
                    {(globalStats && globalUniqueData) && 
                        <>
                            <div className="col s12 m6">
                                <FatalityRates global={globalUniqueData} globalTotal={globalStats} />
                            </div>
                            <div className="col s12 m6">
                                <RecoveryRates global={globalUniqueData} globalTotal={globalStats} />
                            </div>
                        </>
                    }
               
               </div>

               <div id="safety">
                   <Safety />
               </div>

        </div>
    );
}

/*Helpful formulas 
#Recovery Rate = New Recoveries/New Infected
#Fatality Rate = New Fatality/New Infected
*/