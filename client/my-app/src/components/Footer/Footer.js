import React from 'react';

import "./Footer.css";

export default function Footer(){
    return(
        <footer className="page-footer" style={{backgroundColor:"#4661EC"}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">DESIGN & DEVELOPMENT</h5>
                <h6 className="black-text">Coded_Life(Pvt) Ltd</h6>
                <p className="grey-text text-lighten-4">Add about us here and logo @Supun</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Referances</h5>
                <ul>
                  <li><a className="links" target="_blank" rel="noreferrer" href="https://www.covid19api.dev/">Global Coronavirus API</a></li>
                  <li><a className="links" target="_blank" rel="noreferrer" href="https://hpb.health.gov.lk/ta/api-documentation">Sri Lanka Health Promotion Bureau</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Copyright &copy; {new Date().getFullYear()}
            <a className="links right" target="_blank" rel="noreferrer" href="https://github.com/SupunHD96/SLCovidApp">Github</a>
            </div>
          </div>
        </footer>
    );
}
