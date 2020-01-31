import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { PropTypes } from "prop-types";
export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
