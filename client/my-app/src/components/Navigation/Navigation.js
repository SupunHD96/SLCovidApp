import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css';

export default function Navigation(){

        return (
          <div>
            <div className="navbar-fixed ">
              <nav>
                <div className="nav-wrapper"  style={{backgroundColor:"#1FA2FF"}}>
                  <a className="brand-logo"><NavHashLink smooth to='/landing#intro'>Home</NavHashLink></a>
                  <ul id="nav-large" className="right hide-on-small-only">
                    <li><NavHashLink smooth to='/landing#local'>Local Data</NavHashLink></li>
                    <li><NavHashLink smooth to='/landing#global'>Global Data</NavHashLink></li>
                    <li><NavHashLink smooth to='/safety#safety'>Prevention</NavHashLink></li>
                    <li></li>
                  </ul>

                  <div>
                  <ul id="nav-mobile" className="hide-on-med-and-up">
                    <li><NavHashLink to='/landing#intro'>HomeMob</NavHashLink></li>
                    <li><NavHashLink to='/safety#safety'>PreventionMob</NavHashLink></li>
                    <li></li>
                  </ul>
                  </div>
                  
                </div>
              </nav>
            </div>
          </div>
        );
    }
