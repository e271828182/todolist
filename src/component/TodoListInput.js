import React, { Component } from 'react';
import { Button ,Input } from 'antd';
import store from '../store';
import * as actionCreate from '../store/actionCreates';

class TodoListInput extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    store.subscribe(()=>actionCreate.handleStoreChange(this,store));
  }

  render() {
    return (
      <div style={{marginTop:'10px', marginLeft:'10px'}}>
        <Input
        placeholder='输入'
        value={this.state.inputValue}
        style={{width:'300px', marginRight:'10px'}}
        onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
      </div>
    )
  }

  handleInputChange(e){
    const action = actionCreate.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleButtonClick(){
    const action = actionCreate.addItemAction();
    store.dispatch(action);
  }

}

export default TodoListInput;
