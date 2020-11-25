export function LocalStats(props){
    const {local}=props;
    return(
        <div className="content">
            <div className="row left-align">
                <h4>LOCAL DATA</h4>
                <p>UPDATE({local.update_date_time})</p>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Active Cases</span>
                            <p>{local.local_active_cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Total Deaths</span>
                            <p>{local.local_deaths}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Recovered</span>
                            <p>{local.local_recovered}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title"> Total Cases</span>
                            <p>{local.local_total_cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">PCR Count</span>
                            <p>{local.total_pcr_testing_count}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Patients in Hospitals</span>
                            <p>{local.local_recovered}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">New Cases</span>
                            <p>{local.local_new_cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal accent-4">
                        <div className="card-content white-text">
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
            <div className="row">
                <div className="col s12 m4">
                    <div className="card cyan accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Total Cases</span>
                            <p>{global.global_total_cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Global Deaths</span>
                            <p>{global.global_deaths}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">Recovered</span>
                            <p>{global.global_recovered}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card cyan accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">New Cases</span>
                            <p>{global.global_new_cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card cyan accent-4">
                        <div className="card-content white-text">
                            <span className="card-title">New Deaths</span>
                            <p>{global.global_new_deaths}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}