import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer.js';

describe('FavoritesContainer', () => {

  let wrapper;
  const mockHandleFavorites = jest.fn();
  const mockResetCharacter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FavoritesContainer
        favorites={[{
            character: "C-3PO",
            creature: "artificial",
            name: "Tatooine",
            openingCrawl: "the guardians of",
            population: "200000",
            relatedFilms:[
              {relatedFilms: "The Empire Strikes Back"},
              {relatedFilms: "Attack of the Clones"}],
              species: "Droid"
          }, {
            character: "R2-D2",
            creature: "artificial",
            name: "Naboo",
            openingCrawl: "Turmoil has engulfed",
            population: "4500000000",
            relatedFilms: [
              {relatedFilms: "The Empire Strikes Back"},
              {relatedFilms: "Attack of the Clones"}],
            species: "Droid"
          }]}
        handleFavorites={mockHandleFavorites}
        resetCharacters={mockResetCharacter}
      />);
  })

  it('Should match the snapshot with all data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call resetCharacters on click', () => {
    wrapper.find('.button1').simulate('click');
    expect(mockResetCharacter).toHaveBeenCalled();
  });

  it('Should call resetCharacters on click when favorite.length === 0', () => {
    wrapper = shallow(<FavoritesContainer
        favorites={[]}
        handleFavorites={mockHandleFavorites}
        resetCharacters={mockResetCharacter}
      />);
    wrapper.find('.button2').simulate('click');
    expect(mockResetCharacter).toHaveBeenCalled();
  });
})
