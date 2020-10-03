import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getGithubRepos} from '../../actions/profile'

const ProfileGithub = ({ profile: { githubusername }, getGithubRepos }) => {
  useEffect(() => {
    getGithubRepos(githubusername);
  }, [getGithubRepos, githubusername]);

  return <div>{githubusername}</div>;
};

export default connect(null, { getGithubRepos })(ProfileGithub);
