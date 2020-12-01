import React from 'react';
// import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css';

export default function Navigation(){

        return (
          <div>
            <div className="navbar-fixed ">
              <nav>
                <div className="nav-wrapper"  style={{backgroundColor:"#1FA2FF"}}>
                  <a href="/" className="brand-logo">Logo</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        );
    }
