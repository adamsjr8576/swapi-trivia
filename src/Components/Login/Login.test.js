import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login.js';

describe('Login', () => {

  let wrapper, mockHandleLoginError, mockhandleUserInfo, mockEvent

  beforeEach(() => {
    mockHandleLoginError = jest.fn();
    mockhandleUserInfo = jest.fn();
    mockEvent = { target: {name: 'Nick', quote:'YAS', skillLevel:'Youngling'} }
    wrapper = shallow(
      <Login 
        handleLoginError={mockHandleLoginError}
        handleUserInfo={mockhandleUserInfo}
      />
    )
  });

  it('Should match the snapshot with data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should setState when handleChange is called', () => {
    wrapper.state({ name: '', quote:'', skillLevel:'' });
    wrapper.instance().handleChange(mockEvent);

    wrapper.setState({ mockEvent })
  });







})