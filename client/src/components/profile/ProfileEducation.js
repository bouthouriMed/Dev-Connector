import React, { Fragment } from "react";
import Moment from "react-moment";

const ProfileEducation = ({ profile: { education } }) => {
  return (
    <Fragment>
      {education.length > 0 && (
        <div class="profile-edu bg-white p-2">
          <h2 class="text-primary">Education</h2>
          {education.map((edu) => (
            <div>
              <h3> {edu.school} </h3>
              <p>
                <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
                {edu.to === null || edu.to === "" ? (
                  " Now"
                ) : (
                  <Moment format="DD/MM/YYYY">{edu.to}</Moment>
                )}
              </p>
              <p>
                <strong>Degree: </strong> {edu.degree}
              </p>
              <p>
                <strong>Field Of Study: </strong> {edu.fieldofstudy}
              </p>
              {edu.description && (
                <p>
                  <strong>Description: </strong> {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ProfileEducation;
