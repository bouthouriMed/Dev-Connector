import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

function Landing({ isAuthenticated }) {

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  const guestLinks = (
    <Fragment>
      <Link to="/register" className="btn btn-primary">
        Sign Up
      </Link>
      <Link to="/login" className="btn btn-light">
        Login
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
               { !isAuthenticated ? guestLinks : null }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
