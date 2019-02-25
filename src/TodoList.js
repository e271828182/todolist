import React, { Component, Fragment } from 'react';
import TodoListInput from './component/TodoListInput'
import TodoListList from './component/TodoListList'
import 'antd/dist/antd.css';


class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <TodoListInput/>
        <TodoListList/>
      </Fragment>
    );
  }
}

export default TodoList;
