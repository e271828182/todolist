import React, { Component, Fragment } from 'react';
import TodoInput from './component/TodoInput'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoInput/>
      </Fragment>
    );
  }
}

export default App;
