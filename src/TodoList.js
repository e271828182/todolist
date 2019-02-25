import React, { Component, Fragment } from 'react';
import TodoInput from './component/TodoInput'
import TodoListList from './component/TodoListList'
import 'antd/dist/antd.css';


class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <TodoInput/>
        <TodoListList/>
      </Fragment>
    );
  }
}

export default TodoList;
