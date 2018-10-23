import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import 'assets/css/public.css'
import 'assets/js/flexible.min.js'
import configureStore from '../store.js';

const store = configureStore();
import IndexContainer from 'containers/index';
// import 方式的路由按需加载 , asyncComponent高阶组件处理错误
import { asyncComponent } from '../asyncComponent'
const Test = asyncComponent(() => import(/* webpackChunkName: "Test" */ "containers/test.js"))
const About = asyncComponent(() => import(/* webpackChunkName: "About" */ "containers/about.js"))

ReactDOM.render(<Provider store={store}>
  <Router>
    <div>
      <Route exact="exact" path="/" component={IndexContainer}/>
      <Route path="/test" component={Test}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
</Provider>, document.getElementById('app'));
