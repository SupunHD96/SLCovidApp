import { Component, React } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import M from 'materialize-css';
import './Navigation.css';


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
            <i className="brand-logo"><NavHashLink smooth to='/landing#intro'>Home</NavHashLink></i>

            <i className="material-icons dropdown-trigger btn-flat hide-on-med-and-up" data-target='nav-dropdown' style={{ backgroundColor: "#1FA2FF" }}>menu</i>
            <ul id="nav-dropdown" className="dropdown-content hide-on-med-and-up">
              <li className="collection-item"><NavHashLink smooth to='/landing#local'>Local Data</NavHashLink></li>
              <li className="collection-item"><NavHashLink smooth to='/landing#global'>Global Data</NavHashLink></li>
              <li className="collection-item"><NavHashLink smooth to='/safety#safety'>Prevention</NavHashLink></li>
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