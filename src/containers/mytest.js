import React, {Component} from 'react';
import {Card} from 'antd';
export default class Test extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //  document.title = 'react--脚手架'
  }
  handleClick = () => {
    location.hash = '/about';
  }
  render() {
    return (<Card title={<h1> 测试</h1>} style={{
        width: "80%",
        margin: "20% auto"
      }}>
      <h1 onClick={this.handleClick}>跳转到 关于</h1>
    </Card>)
  }
}
