import React, { Component, Fragment } from 'react';
import { Button ,Input } from 'antd';

class TodoInput extends Component {
  render() {
    return (
      <Fragment>
        <Input placeholder="输入" />
        <Button type="primary">Button</Button>
      </Fragment>
    )
  }
}

export default TodoInput;
