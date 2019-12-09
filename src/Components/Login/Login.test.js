import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login.js';

describe('Login', () => {

  let wrapper, mockHandleLoginError, mockhandleUserInfo

  beforeEach(() => {
    mockHandleLoginError = jest.fn();
    mockhandleUserInfo = jest.fn();
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







})