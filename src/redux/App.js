import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCounter,
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./store/actions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { PropTypes } from "prop-types";
class App extends Component {
  render() {
    // connect() 호출을 통해 주입됨:
    console.log(this.props);
    const { dispatch, visibleTodos, visibilityFilter, counter } = this.props;
    return (
      <div>
        dd
        {counter}
        <button
          onClick={() => {
            console.log('xx');
            dispatch(addCounter())
          }}
        >
          ++
        </button>
      </div>
    );
  }
}


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

// 주어진 전역 상태에서 어떤 props를 주입하기를 원하나요?
// 노트: 더 나은 성능을 위해서는 https://github.com/faassen/reselect 를 사용하세요
function select(state) {
  console.log(state);
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    counter: state.counter
  };
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(select)(App);
