import React, { Fragment } from "react";
import Moment from "react-moment";
import { capitalize } from '../../utils/capitalize'

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <Fragment>
      {experience.length > 0 && (
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {experience.map((exp) => (
            <Fragment>
              <div>
                <h3 className="text-dark">{capitalize(exp.company)}</h3>
                <p>
                  <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
                  {exp.to === null || exp.to === "" ? (
                    " Now"
                  ) : (
                    <Moment format="DD/MM/YYYY">{exp.to}</Moment>
                  )}
                </p>
                <p>
                  <strong>Position: </strong>
                  {capitalize(exp.title)}
                </p>
                {exp.description && (
                  <p>
                    <strong>Description: </strong>
                    {exp.description}
                  </p>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ProfileExperience;
