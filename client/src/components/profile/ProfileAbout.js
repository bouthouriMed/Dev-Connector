import React, { Fragment } from "react";
import {capitalize} from '../../utils/capitalize'

const ProfileAbout = ({ profile: { user: {name}, bio, skills } }) => {
  return (
    <Fragment>
      <div className="profile-about bg-light p-2">
        {bio && (
          <Fragment>
            <h2 className="text-primary">{ capitalize(`${name.trim().split(' ')[0]}'s Bio`)}</h2>
            <p>{bio}</p>

          </Fragment>
        )}

        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          {skills.map((skill) => (
            <div className="p-1">
              <i className="fa fa-check"></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileAbout;
