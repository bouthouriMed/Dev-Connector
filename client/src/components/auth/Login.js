import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { login } from "../../actions/auth";

function Login({ login, isAuthenticated }) {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

 

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
    console.log("isAuth", isAuthenticated)

  };

  if(isAuthenticated === true) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
}

const mapstateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect( mapstateToProps, { login })(Login);
