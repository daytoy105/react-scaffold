import React, {Component} from 'react';
import {Card} from 'antd';
export default class About extends Component {
  static defaultProps = { name:'333'}
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //document.title = 'react--脚手架'
  }
  handleClick = () => {
    location.hash = '/'
  }
  render() {
    return (<Card title={<h1> 测试</h1>} style={{
        width: "80%",
        margin: "20% auto"
      }}>
      <h1 onClick={this.handleClick}>回到 "首页" , {this.props.name}</h1>
    </Card>)
  }
}
