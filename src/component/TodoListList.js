import React, { Component } from 'react';
import { List } from 'antd';
import store from '../store';
import * as actionCreate from '../store/actionCreates';


class TodoListList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(()=>actionCreate.handleStoreChange(this,store));
  }

  handleDeleteItem(index){
    const action = actionCreate.deleteItemAction(index);
    store.dispatch(action);
  }

  render() {
    return(
        <List style={{marginTop:'10px', marginLeft:'10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={()=>this.handleDeleteItem(index)}>{item}</List.Item>)}
          />
    )
  }
}

export default TodoListList;
