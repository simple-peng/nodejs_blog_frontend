/*
 * 提交成功对话框
 *
 */
import React ,{ Component } from 'react';
import { Modal, Button } from 'antd';
export default
class App extends React.Component {
  state = {
    visible: false,
    id:''
  }
  handleState= (boolean=false,id) => {
    this.setState({
      visible: boolean,
      id:id
    });
  }
  render() {
    let { id } = this.state
    return (
      <Modal title="恭喜您提交博客成功"
          visible={this.state.visible}
          onOk={()=>this.handleState(false)}
          onCancel={()=>this.handleState(false)}>
          <p><a target="_blank" href={`/blog?id=${id}`}>查看提交的博客</a></p>
      </Modal>
    );
  }
}


