import React, { Fragment, useState } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    current: false,
    to: "",
    description: "",
  });

  const [toDateDisable, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    current,
    to,
    description,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <small>* = required field</small>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={school}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={degree}
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={fieldofstudy}
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
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
              type="checkbox"
              name="current"
              value={current}
              checked={current}
            />{" "}
            Current School or Bootcamp
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
            placeholder="Program Description"
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

export default connect(null, { addEducation })(AddEducation);
