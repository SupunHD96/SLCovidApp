import React, { Component } from 'react';
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
        <li className="menu-item left active"><a href="home.html">Home</a></li>
        <li className="menu-item right"><a href="sass.html">Sass</a></li>
        <li className="menu-item right"><a href="badges.html">Components</a></li>
        <li className="menu-item right"><a href="collapsible.html">Javascript</a></li>
        <li className="menu-item right"><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>
  </div>

<div className="mobile-wrapper teal darken-1">
  <ul className="sidenav" id="mobile-nav">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  </div>
  </div>
        );
    }
}

export default Navigation;