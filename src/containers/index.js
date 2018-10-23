import React, { Component } from 'react'
import { Card } from 'antd'
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //document.title = 'react--脚手架'
  }
  render() {
    return (
      <Card title={<h1>主页</h1>} style={{width:"80%", margin:"20% auto"}}>
        <h1 onClick ={ () => location.hash = '/test'} >单主页哦~*-*~</h1>
      </Card>
    )
  }
}
