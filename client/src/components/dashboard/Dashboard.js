import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

import { getCurrentProfile, getAllProfiles, deleteMyAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteMyAccount,
  auth: { user },
  profile: { profile, loading },
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const deleteAccount = () => {
    deleteMyAccount();

    history.push("/dashboard");
  };

  return profile === null && loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> {user && `Welcome ${user.name}`}
      </p>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} profile={profile} />
          <Education education={profile.education} profile={profile} />
          <div class="my-2">
            <button onClick={deleteAccount} class="btn btn-danger">
              <i class="fas fa-user-minus"></i>
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            {" "}
            You don't acuually have a profile yet, please provide some
            information
          </p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            {" "}
            Create a profile{" "}
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, getAllProfiles, deleteMyAccount })(
  Dashboard
);
