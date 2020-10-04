import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const Posts = ({ post: { post, posts, loading }, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Welcome to the community!
          </p>
          <PostForm />
          <div class="posts">
            {posts.length > 0 ? (
              posts.map((post) => <PostItem key={post._id} post={post} />)
            ) : (
              <div> No posts found... </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
