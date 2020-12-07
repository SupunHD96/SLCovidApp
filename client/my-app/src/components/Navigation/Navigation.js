import { Component, React } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import M from 'materialize-css';
import './Navigation.css';
import Flag from '../../images/flag.png';

class Navigation extends Component {

  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }

  render() {
    return (
      <div className="navbar-fixed ">
        <nav>
          <div className="nav-wrapper" style={{ backgroundColor: "#1FA2FF" }}>
            <li className="brand-logo"><NavHashLink smooth to='/landing#intro'><img src={Flag} width="125px" height="50px" alt="flag" className="img"/></NavHashLink></li>

            <span className="dropdown-trigger hide-on-med-and-up" data-target='nav-dropdown'><i className="large material-icons">menu</i></span>
            <ul id="nav-dropdown" className="dropdown-content hide-on-med-and-up">
              <li className="white"><NavHashLink smooth to='/landing#local'>Local Data</NavHashLink></li>
              <li className="white"><NavHashLink smooth to='/landing#global'>Global Data</NavHashLink></li>
              <li className="white"><NavHashLink smooth to='/safety#safety'>Prevention</NavHashLink></li>
            </ul>

            <ul id="nav-large" className="right hide-on-small-only">
              <li><NavHashLink smooth to='/landing#local'>Local Data</NavHashLink></li>
              <li><NavHashLink smooth to='/landing#global'>Global Data</NavHashLink></li>
              <li><NavHashLink smooth to='/safety#safety'>Prevention</NavHashLink></li>
            </ul>

          </div>

        </nav>
      </div>

    )
  }
}

export default Navigation;