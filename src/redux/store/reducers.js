import { combineReducers } from "redux";
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";
const { SHOW_ALL } = VisibilityFilters;
let count = 0;
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
const blogPosts = [
  {
    id: "post1",
    author: { username: "user1", name: "User 1" },
    body: "......",
    text: "text",
    completed: false,
    comments: [
      {
        id: "comment1",
        author: { username: "user2", name: "User 2" },
        comment: ".....",
        text: "text",
        completed: false
      },
      {
        id: "comment2",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
        text: "text",
        completed: false
      }
    ]
  },
  {
    id: "post2",
    author: { username: "user2", name: "User 2" },
    body: "......",
    text: "text",
    completed: false,
    comments: [
      {
        id: "comment3",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
        text: "text",
        completed: false
      },
      {
        id: "comment4",
        author: { username: "user1", name: "User 1" },
        comment: ".....",
        text: "text",
        completed: false
      },
      {
        id: "comment5",
        author: { username: "user3", name: "User 3" },
        comment: ".....",
        text: "text",
        completed: false
      }
    ]
  }
];
function todos(state = blogPosts, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: count++,
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
