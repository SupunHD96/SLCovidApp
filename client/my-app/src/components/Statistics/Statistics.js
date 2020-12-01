export function LocalStats(props){
    const {local}=props;
    return(
        <div className="content">
            <div className="row left-align" style={{paddingBottom:"50px"}}>
                <h4>LOCAL DATA</h4>
                <p>UPDATE({local.update_date_time})</p>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>

                    <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 387.562 387.1">
                                <g id="pills" transform="translate(0 -0.23)">
                                    <g id="Group_2" data-name="Group 2">
                                    <g id="Group_1" data-name="Group 1">
                                        <path id="Path_7" data-name="Path 7" d="M298.375,22.918a77.406,77.406,0,0,0-109.5,0l-75.8,75.8,109.6,109.6,75.7-75.9A77.5,77.5,0,0,0,298.375,22.918Zm-77.7,44.8-34.5,34-.1.1a9.971,9.971,0,1,1-13.9-14.3l34.6-34,.1-.1a9.937,9.937,0,1,1,13.8,14.3Z" fill="#000dc8"/>
                                    </g>
                                    </g>
                                    <g id="Group_4" data-name="Group 4">
                                    <g id="Group_3" data-name="Group 3">
                                        <path id="Path_8" data-name="Path 8" d="M98.875,112.818l-76.3,76.4a77.641,77.641,0,0,0,110.1,109.5l75.9-76.2Z" fill="#000dc8"/>
                                    </g>
                                    </g>
                                    <g id="Group_6" data-name="Group 6">
                                    <g id="Group_5" data-name="Group 5">
                                        <path id="Path_9" data-name="Path 9" d="M371.575,263.418l-107.9,108a76.982,76.982,0,0,0,107.9-108Z" fill="#000dc8"/>
                                    </g>
                                    </g>
                                    <g id="Group_8" data-name="Group 8">
                                    <g id="Group_7" data-name="Group 7">
                                        <path id="Path_10" data-name="Path 10" d="M310.575,233.418a77.03,77.03,0,0,0-61.1,123.9l107.9-107.9A76.156,76.156,0,0,0,310.575,233.418Z" fill="#000dc8"/>
                                    </g>
                                    </g>
                                </g>
                            </svg>


                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Active Cases</span>
                            <p>{local.local_active_cases}</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                    <div className="row">
                        <div className="col s3 m3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 455.377">
                                <g id="Active_Cases" data-name="Active Cases" transform="translate(0 -28.312)">
                                    <path id="Path_3" data-name="Path 3" d="M361.448,289.638l-8.108-32.431L330.1,321.126a15,15,0,0,1-28.434-.715l-27.51-89.406L229.926,341.571A15,15,0,0,1,216,351c-.373,0-.749-.014-1.125-.042A15,15,0,0,1,201.4,339.437l-27.889-118.53L150.23,290.744A15,15,0,0,1,136,301H67.1L245.394,479.3a15,15,0,0,0,21.212,0L444.9,301H376a15,15,0,0,1-14.552-11.362Z" fill="#000dc8"/>
                                    <path id="Path_4" data-name="Path 4" d="M161.77,161.257a15,15,0,0,1,28.832,1.308l29.117,123.75L262.073,180.43a15,15,0,0,1,28.264,1.159l26.849,87.258L341.9,200.874a15,15,0,0,1,28.648,1.488L387.712,271h86.914c51.419-57,49.685-145.22-5.2-200.109-56.682-56.682-148.908-56.682-205.59,0L256,78.722l-7.831-7.831a145.374,145.374,0,0,0-205.59,0C-12.311,125.78-14.045,214,37.374,271h87.814Z" fill="#000dc8"/>
                                    <path id="Path_5" data-name="Path 5" d="M37.374,271H15a15,15,0,0,0,0,30H67.1l-24.52-24.52Q39.891,273.794,37.374,271Z" fill="#000dc8"/>
                                    <path id="Path_6" data-name="Path 6" d="M497,271H474.626q-2.518,2.791-5.2,5.48L444.9,301H497a15,15,0,0,0,0-30Z" fill="#000dc8"/>
                                </g>
                            </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Total Deaths</span>
                            <p>{local.local_deaths}</p>
                        </div>
                    </div>
                   
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512.005 469.332">
                                <g id="checkmark" transform="translate(0 -0.004)">
                                    <path id="Path_1" data-name="Path 1" d="M306.582,317.25a63.963,63.963,0,0,1-90.5,0l-90.668-90.664a63.99,63.99,0,1,1,90.5-90.5l45.418,45.395L386.711,56.109A233.54,233.54,0,0,0,234.668,0C105.066,0,0,105.07,0,234.668S105.066,469.336,234.668,469.336,469.332,364.27,469.332,234.668a234.719,234.719,0,0,0-10.516-69.652Zm0,0" fill="#098a12"/>
                                    <path id="Path_2" data-name="Path 2" d="M261.332,293.336a21.273,21.273,0,0,1-15.082-6.25l-90.664-90.668a21.329,21.329,0,0,1,30.164-30.164l75.582,75.582L475.586,27.586A21.331,21.331,0,0,1,505.75,57.754L276.414,287.086a21.266,21.266,0,0,1-15.082,6.25Zm0,0" fill="#098a12"/>
                                </g>
                            </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Recovered</span>
                            <p>{local.local_recovered}</p>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>

                    <div className="row">
                        <div className="col s3 m3">
                            <svg id="sum" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512">
                                <g id="Group_10" data-name="Group 10">
                                    <g id="Group_9" data-name="Group 9">
                                    <path id="Path_11" data-name="Path 11" d="M366.933,179.217v-51.2H129.741L236.826,250.385a8.52,8.52,0,0,1,0,11.23L129.741,384H366.934V332.8H349.867v25.6a8.531,8.531,0,0,1-8.533,8.533H196.267a8.535,8.535,0,0,1-6.554-13.994l80.777-96.93-80.777-96.93a8.535,8.535,0,0,1,6.554-13.994H341.334a8.531,8.531,0,0,1,8.533,8.533v25.6h17.066Z" fill="#ff3d00"/>
                                    </g>
                                </g>
                                <g id="Group_12" data-name="Group 12">
                                    <g id="Group_11" data-name="Group 11">
                                    <path id="Path_12" data-name="Path 12" d="M256,0C114.842,0,0,114.842,0,256S114.842,512,256,512,512,397.158,512,256,397.158,0,256,0ZM384,187.733a8.531,8.531,0,0,1-8.533,8.533H341.334a8.531,8.531,0,0,1-8.533-8.533v-25.6H214.485l73.668,88.4a8.541,8.541,0,0,1,0,10.931l-73.668,88.4H332.8v-25.6a8.531,8.531,0,0,1,8.533-8.533h34.133A8.531,8.531,0,0,1,384,324.258v68.267a8.531,8.531,0,0,1-8.533,8.533H110.933a8.532,8.532,0,0,1-6.426-14.148L219.058,255.992,104.508,125.073a8.532,8.532,0,0,1,6.426-14.148H375.467A8.531,8.531,0,0,1,384,119.458v68.275Z" fill="#ff3d00"/>
                                    </g>
                                </g>
                            </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Total Cases</span>
                            <p>{local.local_total_cases}</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                    <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512">
                                <path id="virus" d="M480,224a32.005,32.005,0,0,0-27.7,16H423.24a167.174,167.174,0,0,0-37.727-90.886L406.125,128.5A32,32,0,1,0,383.5,105.875l-20.612,20.612A167.174,167.174,0,0,0,272,88.76V59.7a32,32,0,1,0-32,0V88.76a167.174,167.174,0,0,0-90.886,37.727L128.5,105.875A32,32,0,1,0,105.875,128.5l20.612,20.612A167.174,167.174,0,0,0,88.76,240H59.7a32,32,0,1,0,0,32H88.76a167.174,167.174,0,0,0,37.727,90.886L105.875,383.5A32,32,0,1,0,128.5,406.125l20.612-20.612A167.174,167.174,0,0,0,240,423.24V452.3a32,32,0,1,0,32,0V423.24a167.174,167.174,0,0,0,90.886-37.727L383.5,406.125A32,32,0,1,0,406.125,383.5l-20.612-20.612A167.174,167.174,0,0,0,423.24,272H452.3A32,32,0,1,0,480,224ZM203,248a28,28,0,1,1,28-28A28.031,28.031,0,0,1,203,248Zm69,96a32,32,0,1,1,32-32A32.03,32.03,0,0,1,272,344Zm56-112a24,24,0,1,1,24-24A24.032,24.032,0,0,1,328,232Z" fill="red"/>
                            </svg>


                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">New Cases</span>
                            <p>{local.local_new_cases}</p>
                        </div>
                    </div>
                   
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 511.999 445.81">
                                <g id="heart-beat" transform="translate(0 -33.095)">
                                    <path id="Path_13" data-name="Path 13" d="M377.227,33.1c-61.7,0-101.851,33.018-120.747,53.364C237.584,66.112,197.432,33.1,135.733,33.1,59.619,33.1,0,100.3,0,186.1a192.932,192.932,0,0,0,8.893,56.616h29.9l56.777-111.24,59.722,149.312,38.452-78.53,40.444,40.459h269.9C510.808,220.841,512,201.586,512,186.1,512,100.3,453.34,33.1,377.227,33.1Z" fill="red"/>
                                    <path id="Path_14" data-name="Path 14" d="M202.207,253.173l-49.673,101.47L92.256,203.954l-35.1,68.76H20.583C48.552,332.432,111.868,405.595,249.7,475.463l6.782,3.442,6.782-3.442c137.844-69.869,201.163-143.031,229.133-202.749H221.763Z" fill="red"/>
                                </g>
                            </svg>
                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">New Deaths</span>
                            <p>{local.local_new_deaths}</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}



















export function GlobalStats(props){
    const {global} = props
    return(
        <div className="content">
            <div className="row left-align">
                <h4>GLOBAL DATA</h4>
                <p>UPDATE({global.update_date_time})</p>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>

                    <div className="row">
                        <div className="col s3 m3">
                        <svg id="sum" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512">
                                <g id="Group_10" data-name="Group 10">
                                    <g id="Group_9" data-name="Group 9">
                                    <path id="Path_11" data-name="Path 11" d="M366.933,179.217v-51.2H129.741L236.826,250.385a8.52,8.52,0,0,1,0,11.23L129.741,384H366.934V332.8H349.867v25.6a8.531,8.531,0,0,1-8.533,8.533H196.267a8.535,8.535,0,0,1-6.554-13.994l80.777-96.93-80.777-96.93a8.535,8.535,0,0,1,6.554-13.994H341.334a8.531,8.531,0,0,1,8.533,8.533v25.6h17.066Z" fill="#ff3d00"/>
                                    </g>
                                </g>
                                <g id="Group_12" data-name="Group 12">
                                    <g id="Group_11" data-name="Group 11">
                                    <path id="Path_12" data-name="Path 12" d="M256,0C114.842,0,0,114.842,0,256S114.842,512,256,512,512,397.158,512,256,397.158,0,256,0ZM384,187.733a8.531,8.531,0,0,1-8.533,8.533H341.334a8.531,8.531,0,0,1-8.533-8.533v-25.6H214.485l73.668,88.4a8.541,8.541,0,0,1,0,10.931l-73.668,88.4H332.8v-25.6a8.531,8.531,0,0,1,8.533-8.533h34.133A8.531,8.531,0,0,1,384,324.258v68.267a8.531,8.531,0,0,1-8.533,8.533H110.933a8.532,8.532,0,0,1-6.426-14.148L219.058,255.992,104.508,125.073a8.532,8.532,0,0,1,6.426-14.148H375.467A8.531,8.531,0,0,1,384,119.458v68.275Z" fill="#ff3d00"/>
                                    </g>
                                </g>
                        </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Total Cases</span>
                            <p>{global.global_total_cases}</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                    <div className="row">
                        <div className="col s3 m3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 455.377">
                                <g id="Active_Cases" data-name="Active Cases" transform="translate(0 -28.312)">
                                    <path id="Path_3" data-name="Path 3" d="M361.448,289.638l-8.108-32.431L330.1,321.126a15,15,0,0,1-28.434-.715l-27.51-89.406L229.926,341.571A15,15,0,0,1,216,351c-.373,0-.749-.014-1.125-.042A15,15,0,0,1,201.4,339.437l-27.889-118.53L150.23,290.744A15,15,0,0,1,136,301H67.1L245.394,479.3a15,15,0,0,0,21.212,0L444.9,301H376a15,15,0,0,1-14.552-11.362Z" fill="#000dc8"/>
                                    <path id="Path_4" data-name="Path 4" d="M161.77,161.257a15,15,0,0,1,28.832,1.308l29.117,123.75L262.073,180.43a15,15,0,0,1,28.264,1.159l26.849,87.258L341.9,200.874a15,15,0,0,1,28.648,1.488L387.712,271h86.914c51.419-57,49.685-145.22-5.2-200.109-56.682-56.682-148.908-56.682-205.59,0L256,78.722l-7.831-7.831a145.374,145.374,0,0,0-205.59,0C-12.311,125.78-14.045,214,37.374,271h87.814Z" fill="#000dc8"/>
                                    <path id="Path_5" data-name="Path 5" d="M37.374,271H15a15,15,0,0,0,0,30H67.1l-24.52-24.52Q39.891,273.794,37.374,271Z" fill="#000dc8"/>
                                    <path id="Path_6" data-name="Path 6" d="M497,271H474.626q-2.518,2.791-5.2,5.48L444.9,301H497a15,15,0,0,0,0-30Z" fill="#000dc8"/>
                                </g>
                            </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Total Deaths</span>
                            <p>{global.global_deaths}</p>
                        </div>
                    </div>
                   
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512.005 469.332">
                                <g id="checkmark" transform="translate(0 -0.004)">
                                    <path id="Path_1" data-name="Path 1" d="M306.582,317.25a63.963,63.963,0,0,1-90.5,0l-90.668-90.664a63.99,63.99,0,1,1,90.5-90.5l45.418,45.395L386.711,56.109A233.54,233.54,0,0,0,234.668,0C105.066,0,0,105.07,0,234.668S105.066,469.336,234.668,469.336,469.332,364.27,469.332,234.668a234.719,234.719,0,0,0-10.516-69.652Zm0,0" fill="#098a12"/>
                                    <path id="Path_2" data-name="Path 2" d="M261.332,293.336a21.273,21.273,0,0,1-15.082-6.25l-90.664-90.668a21.329,21.329,0,0,1,30.164-30.164l75.582,75.582L475.586,27.586A21.331,21.331,0,0,1,505.75,57.754L276.414,287.086a21.266,21.266,0,0,1-15.082,6.25Zm0,0" fill="#098a12"/>
                                </g>
                            </svg>

                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">Recovered</span>
                            <p>{global.global_recovered}</p>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>

                    <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 612.002 603.48">
                                <g id="store-new-badges" transform="translate(0 -4.262)">
                                    <path id="Path_1" data-name="Path 1" d="M608.067,333.255l-44.973-71.364a25.567,25.567,0,0,1-3.352-19.022L577.6,160.427A25.543,25.543,0,0,0,560.432,130.7l-80.323-25.759a25.549,25.549,0,0,1-14.8-12.413L426,17.9A25.539,25.539,0,0,0,393.746,6.161l-78.094,31.9a25.587,25.587,0,0,1-19.31,0l-78.081-31.9A25.549,25.549,0,0,0,186,17.91L146.687,92.53a25.549,25.549,0,0,1-14.795,12.413L51.57,130.7a25.537,25.537,0,0,0-17.164,29.724l17.847,82.442A25.538,25.538,0,0,1,48.9,261.89L3.934,333.255A25.544,25.544,0,0,0,9.9,367.06l66.664,51.677a25.546,25.546,0,0,1,9.661,16.73L97.647,519.04A25.534,25.534,0,0,0,123.936,541.1l84.288-3.263a25.574,25.574,0,0,1,18.154,6.6l62.462,56.677a25.552,25.552,0,0,0,34.328,0l62.469-56.677a25.511,25.511,0,0,1,18.154-6.6l84.281,3.263a25.541,25.541,0,0,0,26.3-22.062l11.424-83.573a25.565,25.565,0,0,1,9.655-16.73L602.11,367.06A25.544,25.544,0,0,0,608.067,333.255ZM235.234,407.92,160.8,355.93l30.593,70.9L171,435.633l-46.92-108.719,21.353-9.221,75.84,53.4-31.34-72.6,20.389-8.806,46.933,108.725Zm45.234-19.527-46.92-108.719,80.616-34.8,7.931,18.4-58.669,25.318,10.4,24.1,54.589-23.562,7.9,18.32L281.733,331,294.5,360.59l60.738-26.212,7.9,18.32Zm183.78-79.313-56.735-71.945,13.492,90.6-23.8,10.274-72.871-97.512,22.464-9.706L395.418,298.4l-12.356-83.253,26.116-11.27,51.831,67.718-16.091-83.145,22.1-9.54L487.534,299.03Z" fill="red"/>
                                </g>
                            </svg>


                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">New Cases</span>
                            <p>{global.global_new_cases}</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col s12 m4" style={{paddingBottom:"30px"}}>
                    
                    <div className="row">
                        <div className="col s3 m3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512">
                                <path id="virus" d="M480,224a32.005,32.005,0,0,0-27.7,16H423.24a167.174,167.174,0,0,0-37.727-90.886L406.125,128.5A32,32,0,1,0,383.5,105.875l-20.612,20.612A167.174,167.174,0,0,0,272,88.76V59.7a32,32,0,1,0-32,0V88.76a167.174,167.174,0,0,0-90.886,37.727L128.5,105.875A32,32,0,1,0,105.875,128.5l20.612,20.612A167.174,167.174,0,0,0,88.76,240H59.7a32,32,0,1,0,0,32H88.76a167.174,167.174,0,0,0,37.727,90.886L105.875,383.5A32,32,0,1,0,128.5,406.125l20.612-20.612A167.174,167.174,0,0,0,240,423.24V452.3a32,32,0,1,0,32,0V423.24a167.174,167.174,0,0,0,90.886-37.727L383.5,406.125A32,32,0,1,0,406.125,383.5l-20.612-20.612A167.174,167.174,0,0,0,423.24,272H452.3A32,32,0,1,0,480,224ZM203,248a28,28,0,1,1,28-28A28.031,28.031,0,0,1,203,248Zm69,96a32,32,0,1,1,32-32A32.03,32.03,0,0,1,272,344Zm56-112a24,24,0,1,1,24-24A24.032,24.032,0,0,1,328,232Z" fill="red"/>
                            </svg>


                        </div>
                        <div className="col s9 m9">
                            <span className="card-title">New Deaths</span>
                            <p>{global.global_new_deaths}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}