import React, { Component } from 'react';
import { List } from 'antd';
import store from '../store';
import * as actionCreate from '../store/actionCreates';
import { handleStoreChange } from '../store/storeChangeUtil';


class TodoListList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    // this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    // store.subscribe(this.handleStoreChange);
    store.subscribe(()=>handleStoreChange(this,store));
  }

  // handleStoreChange(){
  //   this.setState(store.getState());
  // }

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
