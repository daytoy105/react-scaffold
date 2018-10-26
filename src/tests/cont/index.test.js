import React, {Component} from 'react';
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Index from 'containers/index';
Enzyme.configure({ adapter: new Adapter() })
let component;
describe('first test:', () => {
  beforeEach(() => {
    component = mount(<Index/>)
  })
  test('Card', () => {
    expect(component.state().isloading).toBe(0)
    const cardProps = component.find('Card').props()
    expect(component.find('Card').find('h1').length).toBe(2)
    expect(cardProps.style).toEqual({ width: '80%', margin: '20% auto' })

    expect(component.find('.cont').text()).toEqual('单主页哦~*-*~')
  })
  test('h1 click', () => {
    component.find('.cont').simulate('click')
    expect(component.state().isloading).toBe(1)
  })
})

// "testMatch": [
//       "**/tests/cont/*.js?(x)"
//     ],
