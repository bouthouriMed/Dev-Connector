import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { logout } from "../../actions/auth";

function Navbar({ isAuthenticated, logout, history}) {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>

      <li>
        <Link to="/profiles">Developers</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>

      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboad</Link>
      </li>

      <li>
        <a href='#!' onClick={() => logout(history)}>
        Logout
        </a>   
      </li>

    </ul>
  );

  return (   
    <Fragment>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        { isAuthenticated ? authLinks : guestLinks }
      </nav>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
