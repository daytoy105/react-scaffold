import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import './index.scss';
//import {fetchUrl} from 'actions/index';
// @connect(state => ({
//   isloading: state.getIn('index', 'isloading')
// }), {fetchUrl})
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: 0
    }
  }
  handleClick = () => {
    this.setState({isloading: 1})
  }
  render() {
    return (<Card title={<h1> 首页</h1>} style={{
        width: "80%",
        margin: "20% auto"
      }}>
      <h1 onClick={this.handleClick} className="cont">单主页哦~*-*~</h1>
    </Card>)
  }
}
