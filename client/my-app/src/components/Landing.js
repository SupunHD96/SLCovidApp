import React,{useEffect,useState} from 'react'

const API = `https://hpb.health.gov.lk/api/get-current-statistical`

export default function Landing() {
    const [data,setData]=useState(undefined);
    useEffect(()=>{
        fetch(API).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setData(data);
        },
        (error)=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <h1>THIS IS THE COVID APP</h1>
            <h2>Check console for data</h2>
        </div>
    )
}
