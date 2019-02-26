import React, { Component } from 'react';
import { Button ,Input } from 'antd';
import * as actionCreate from '../store/actionCreates';
import { connect } from 'react-redux';

class TodoListInput extends Component {

  render() {
    const {inputValue, handleInputChange, handleButtonClick} = this.props;
    return (
      <div style={{marginTop:'10px', marginLeft:'10px'}}>
        <Input
        placeholder='输入'
        value={inputValue}
        style={{width:'300px', marginRight:'10px'}}
        onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleButtonClick}>提交</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputChange(e){
      const action = actionCreate.getInputChangeAction(e.target.value);
      dispatch(action);
    },

    handleButtonClick(){
      const action = actionCreate.addItemAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListInput);
