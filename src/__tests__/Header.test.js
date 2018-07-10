import React from 'react';
import { shallow } from 'enzyme'
import Header from '../components/commom/Header';

it ('Renders', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').text()).toEqual('Welcome to React');
})