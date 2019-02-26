import React, { Component, Fragment } from 'react';
import TodoListInput from './component/TodoListInput'
import TodoListList from './component/TodoListList'
import * as actionCreate from './store/actionCreates';
import store from './store';
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

  componentDidMount(){
    const action = actionCreate.initListAction();
    store.dispatch(action);
  }
}

export default TodoList;
