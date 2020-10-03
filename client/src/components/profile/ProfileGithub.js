import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({
  auth: { isAuthenticated, user },
  profile: { repos, loading, profile },
  username,
  getGithubRepos,
}) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <Fragment>
      <div class="profile-github">
        <h2 class="text-primary my-1">
          <i class="fab fa-github"></i> Github Repos
        </h2>
        {username && repos.length > 0 ? (
          repos.map((repo) => (
            <div key={repo._id} class="repo bg-white p-1 my-1">
              <div>
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                  <li class="badge badge-primary">
                    Stars: {repo.stargazers_count}
                  </li>
                  <li class="badge badge-dark">
                    Watchers: {repo.watchers_count}
                  </li>
                  <li class="badge badge-light">Forks: {repo.forks_count}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div class="repo bg-white p-1 my-1">
            {" "}
            There is no repos for this developer{" "}
            {isAuthenticated === true &&
              loading === false &&
              profile.user._id === user._id && (
                <Fragment>
                  <p>Please add a valid github username to add your repos</p>
                  <div style={{marginLeft:'10px'}}>
                    {" "}
                    <Link to="/edit-profile" className="btn btn-dark ">
                      {" "}
                      Edit profile
                    </Link>
                  </div>
                </Fragment>
              )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
