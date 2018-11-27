import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import './index.scss';
import {fetchUrl, hideLoading} from 'actions/index';
@connect(state => ({
  isloading: state.getIn('index', 'isloading')
}), {fetchUrl, hideLoading})
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: 0
    }
  }
  handleClick = () => {
    let _this = this
    for (let i = 0; i < 100; i++) {
      //this.tm  = setTimeout(()=>{
        _this.setState({isloading: i})
      //})

    }
    this.props.fetchUrl('http://qy.gd95105888.com/gimc/yueyouren/qy_dongtai/get_evently_nav?userid=15625013340')
  }
  render() {
    console.log(this.state.isloading)
    return (<Card title={<h1> 首页</h1>} style={{
        width: "80%",
        margin: "20% auto"
      }}>
      <h1 onClick={this.handleClick} className="cont">单主页哦~*-*~</h1>
      <Item></Item>
    </Card>)
  }
}

const Item = (props) => {
  console.log(React.Children, props.children)
  return (<div>{React.Children.map(props.children, (child, i) => child)}</div>)

}
