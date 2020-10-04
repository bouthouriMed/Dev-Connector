import {
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  CREATE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./type";
import { setAlert } from "./alert";
import axios from "axios";

// Get All posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/post");

    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post by ID
export const getPostById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/post/${id}`);

    dispatch({
      type: GET_SINGLE_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create a post
export const createPost = (postText) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ text: postText });
    console.log(body);

    const res = await axios.post("/api/post", body, config);

    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Like a post
export const likePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/post/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Unlike a post
export const unlikePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/post/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add a comment
export const addComment = (postId, {text}) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      text: JSON.stringify(text),
    };

    const res = await axios.post(`/api/post/comment/${postId}`, body, config);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete a comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
   

     await axios.delete(`/api/post/comment/${postId}/${commentId}`);

    dispatch({
      type: DELETE_COMMENT,
      payload: commentId
    });
    dispatch(setAlert('Comment deleted', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert('Post deleted', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
