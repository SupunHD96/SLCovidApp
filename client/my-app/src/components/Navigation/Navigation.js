import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import M from 'materialize-css'
import './Navigation.css';

class Navigation extends Component {

  componentDidMount() {
    let sidenav = document.querySelector("#mobile-nav");
    M.Sidenav.init(sidenav, {});
 }

    render() {
        return (
  <div>
  <div className="navbar-fixed">
  <nav>
    <div className="nav-wrapper teal darken-1">
      <a href="#" data-target="mobile-nav" className="btn-floating btn-large light-blue accent-4 pulse sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="hide-on-med-and-down">
        <li className="menu-item left"><NavLink to='/testing' activeClassName="active-link">Home</NavLink></li>
        <li className="menu-item right"><NavLink to='/testing' activeClassName="active-link"> Testing</NavLink></li>
        <li className="menu-item right"><NavLink to='/landing' activeClassName="active-link">Landing</NavLink></li>
        <li className="menu-item right"><NavLink to='/testing' activeClassName="active-link">Testing 1</NavLink></li>
        <li className="menu-item right"><NavLink to='/testing' activeClassName="active-link">Testing 2</NavLink></li>
      </ul>
    </div>
  </nav>
  </div>

<div className="mobile-wrapper teal darken-1">
  <ul className="sidenav" id="mobile-nav">
    <li><NavLink to='/testing'>Home</NavLink></li>
    <li><NavLink to='/testing'>Testing</NavLink></li>
    <li><NavLink to='/landing'>Landing</NavLink></li>
    <li><NavLink to='/testing'>Testing 1</NavLink></li>
    <li><NavLink to='/testing'>Testing 2</NavLink></li>
  </ul>
  </div>
  </div>
        );
    }
}

export default Navigation;