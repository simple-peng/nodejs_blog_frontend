import React, {Component} from 'react';
import render from 'react-dom';
import {Row,Col} from 'antd';
import {getGithubData} from './ajax';
export default
class Widget extends Component{
  state={
    githubData:{}
  }
  componentDidMount(){
    getGithubData().then(githubData=>{
      this.setState({githubData});
    })
  }
  renderGithubData(){
    let {githubData} =this.state;
    if(githubData){
      let {avatar_url,public_repos,following} = githubData;

      return (
             [<Row>
              <Row type='flex' justify='center' align='center'>
                <img src={'../../img/author.jpg'} className='avatar-img' />
              </Row>
              <Row type='flex' justify='center' align='center'><h2>pingtingpeng</h2></Row>
            </Row>,
             <Row>
                <Col span={12}>
                    <Row><h3>{public_repos}</h3></Row>
                    <Row><h3>项目数</h3></Row>
                </Col>
                <Col span={12}>
                     <Row><h3>{following}</h3></Row>
                     <Row><h3>关注数</h3></Row>
                </Col>
             </Row>]
        )
      }else{
        return null;
      }
    }
  render(){
    return (
        <div className='w-container'>
          <Row type='flex' justify='center' align='center'>
            <h1>github名片</h1>
          </Row>
           {this.renderGithubData()}
        </div>
      )
  }
}