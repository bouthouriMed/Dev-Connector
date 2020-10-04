import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deletePost, likePost, unlikePost } from "../../actions/post";
import { capitalize } from "../../utils/capitalize";

const PostItem = ({
  post: { _id, name, avatar, text, date, likes, comments, user },
  likePost,
  unlikePost,
  deletePost,
  auth,
  showActions,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link href="profile.html">
          <img className="round-img" src={avatar} alt="" />
          <h4>{capitalize(name)}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">{`Posted on ${date}`}</p>
        {showActions && (
          <Fragment>
            <button
              onClick={(e) => likePost(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up"></i>
              <span>{likes.length > 0 && <span> {likes.length} </span>}</span>
            </button>
            <button
              onClick={(e) => unlikePost(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} className="btn btn-primary">
              Discussion{" "}
              <span className="comment-count">{comments.length}</span>
            </Link>
            {auth.loading === false && user === auth.user._id && (
              <button
                onClick={(e) => deletePost(_id)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.prototypes = {
  auth: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { likePost, unlikePost, deletePost })(
  PostItem
);
