import { post } from "request";
import {
  DELETE_POST,
  CREATE_POST,
  GET_ALL_POSTS,
  GET_SINGLE_POST,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../actions/type";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_SINGLE_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false
      };
    default:
      return state;
  }
}
