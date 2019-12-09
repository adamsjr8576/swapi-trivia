import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login.js';

describe('Login', () => {

  let wrapper, mockHandleLoginError, mockHandleUserInfo, mockEvent

  beforeEach(() => {
    mockHandleLoginError = jest.fn();
    mockHandleUserInfo = jest.fn();
    mockEvent = { target: {name: 'name', value:'Nick'} }
    wrapper = shallow(
      <Login 
        handleLoginError={mockHandleLoginError}
        handleUserInfo={mockHandleUserInfo}
      />
    )
  });

  it('Should match the snapshot with data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('Should setState when handleChange is called', () => {
      wrapper.setState({ name: '', quote:'', skillLevel:'' });
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual({ name: 'Nick', quote:'', skillLevel:'' })
    });

    it('Should call handleChange when name input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockNameEvent = { target: {name: 'name', value:'Nick'} }

      wrapper.find('.input-login-name').simulate('change', mockNameEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
    });

    it('Should call handleChange when quote input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockNameEvent = { target: {quote: 'quote', value:'May the force be with you!'} }

      wrapper.find('.input-login-quote').simulate('change', mockNameEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
    });

    it('Should call handleChange when skillLevel is selected', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockNameEvent = { target: {skillLevel: 'skillLevel', value:'Jedi Master'} }

      wrapper.find('.input-login-skill').simulate('change', mockNameEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
    });
  });

  describe('loginErrorHandler', () => {
    it('Should call handleLoginError with true when state is empty', () => {
      wrapper.find('.btn-login').simulate('click');

      expect(mockHandleLoginError).toHaveBeenCalledWith(true);
    });

    it('Should call handleLoginError and handleUserInfo with false when state is filled and button is clicked', () => {
      wrapper.setState({ name: 'Nick', quote:'YAS', skillLevel:'Youngling' })
      wrapper.find('.btn-login').simulate('click');
      wrapper.instance().loginErrorHandler()

      expect(mockHandleLoginError).toHaveBeenCalledWith(false);
    });
  });
  
});