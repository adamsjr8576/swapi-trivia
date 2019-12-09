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
    favorites = {
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
  })




})