import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { capitalize } from '../../utils/capitalize'

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{capitalize(name)}</h2>
        <p>
          {capitalize(status)} {company && <span> at {capitalize(company)}</span>}
        </p>
        <p className='my-1'>{location && <span>{capitalize(location)}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {capitalize(skill)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;