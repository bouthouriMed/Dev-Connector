import React, {useState} from "react";
import {connect} from 'react-redux';
import {addComment} from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
const [text, settext] = useState('');

const handleSubmit = e => {
    e.preventDefault();

    addComment(postId, {text});
    
    settext('')

}

  return (
    <div>
      <div class="post-form">
        <div class="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form onSubmit={handleSubmit} class="form my-1">
          <textarea
          onChange={(e) => settext(e.target.value)}
            name="text"
            cols="30"
            rows="5"
            placeholder="Comment on this post"
            required
            value={text}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default connect(null, {addComment})(CommentForm);
