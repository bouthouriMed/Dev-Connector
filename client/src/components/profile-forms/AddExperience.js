import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    current: false,
    to: null,
    description: "",
  });

  const [toDateDisable, toggleDisabled] = useState(false);

  const { title, company, location, from, current, to, description } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExperience(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={title}
            type="text"
            placeholder="* Job Title"
            name="title"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={company}
            type="text"
            placeholder="* Company"
            name="company"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={location}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input onChange={handleChange} value={from} type="date" name="from" />
        </div>
        <div className="form-group">
          <p>
            <input
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisable);
              }}
              value={current}
              checked={current}
              type="checkbox"
              name="current"
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            onChange={handleChange}
            value={to}
            disabled={toDateDisable ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            value={description}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default connect(null, { addExperience })(AddExperience);
