import React from 'react';
import './Navigation.css';

export default function Navigation(){

        return (
          <div>
            <div className="navbar-fixed ">
              <nav>
                <div className="nav-wrapper"  style={{backgroundColor:"#1FA2FF"}}>
                  <a href='#intro'>Home</a>
                  <ul id="nav-large" className="right hide-on-small-only">
                    <li><a href='#local'>Local Data</a></li>
                    <li><a href='#global'>Global Data</a></li>
                    <li><a href='#safety'>Prevention</a></li>
                    <li></li>
                  </ul>
                  <div>
                  <ul id="nav-mobile" className="hide-on-med-and-up">
                    <li><a href='#intro'>HomeMob</a></li>
                    <li><a href='#safety'>PreventionMob</a></li>
                    <li></li>
                  </ul>
                  </div>
                  
                </div>
              </nav>
            </div>
          </div>
        );
    }
