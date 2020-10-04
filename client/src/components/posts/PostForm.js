import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post";

const PostForm = ({ createPost }) => {
  const [postText, setPostText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost(postText);
    setPostText('')
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form onSubmit={handleSubmit} className="form my-1">
        <textarea
          onChange={(e) => setPostText(e.target.value)}
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={postText}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default connect(null, { createPost })(PostForm);
