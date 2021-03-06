import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav/Nav.js';

describe('Nav', () => {

  let wrapper, mockUserInfo, mockHandleLoginError, mockResetUserInfo, mockFavorites

  beforeEach(() => {
    mockUserInfo = {
      name: 'Patrick',
      quote: 'Sick wiggy',
      skillLevel: 'Jedi Master'
    };
    mockHandleLoginError = jest.fn();
    mockResetUserInfo = jest.fn();
    mockFavorites = {
        character: "C-3PO",
        creature: "artificial",
        name: "Tatooine",
        openingCrawl: "the guardians of",
        population: "200000",
        relatedFilms:[
          {relatedFilms: "The Empire Strikes Back"},
          {relatedFilms: "Attack of the Clones"}],
          species: "Droid"
      }
    wrapper = shallow(
      <Nav 
        userInfo={mockUserInfo}
        handleLoginError={mockHandleLoginError}
        resetUserInfo={mockResetUserInfo}
        favorites={mockFavorites}
      />
    )
  });

  it('Should match the snapshot with data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleLoginError when button is clicked', () => {
    wrapper.find('.btn-logout').simulate('click');

    expect(mockHandleLoginError).toHaveBeenCalledWith(false);
  });

  it('Should call handleLoginError when button is clicked', () => {
    wrapper.find('.btn-logout').simulate('click');

    expect(mockResetUserInfo).toHaveBeenCalledWith();
  });

  it('Should call resetUserInfo when button is clicked', () => {
    wrapper.find('.btn-logout').simulate('click');

    expect(mockResetUserInfo).toHaveBeenCalled();
  });
});