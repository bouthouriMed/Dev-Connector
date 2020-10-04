import React, { Fragment } from "react";
import { connect } from "react-redux";

import { deleteComment } from "../../actions/post";
import Moment from "react-moment";

const CommentItem = ({
  postId,
  comment: { _id, name, avatar, text, date, user },
  deleteComment,
  auth,
}) => {
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <a href="profile.html">
            <img class="round-img" src={avatar} />
            <h4>{name}</h4>
          </a>
        </div>
        <div>
          <p class="my-1">{text}</p>
          <p class="post-date">
            Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
          </p>
          {!auth.loading  && auth.user._id === user && (
            <button
              onClick={() => deleteComment(postId, _id)}
              type="button"
              class="btn btn-danger"
            >
              <i class="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
