import React, {Component} from "react";
import {connect} from 'react-redux'
import './loading.scss';
class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 0
    }
  }
  componentDidMount() {
    this.tm = setTimeout(() => {
      let show = this.props.isloading
        ? 1
        : 0
      this.setState({show: show})
    }, 200)
  }
  componentWillUnmount() {
    clearTimeout(this.tm)
  }

  render() {
    return (<div className="loading_wrap" style={{
        display: this.state.show
          ? 'flex'
          : 'none'
      }}>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>)
  }
}
export default connect(state => ({
  isloading: state.getIn(['index', 'isloading'])
}), {})(Loading);
