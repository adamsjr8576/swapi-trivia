import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharacterCard from '../CharacterCard/CharacterCard.js';

describe('CharacterCard', () => {
  let wrapper;
  const mockHandleFavorites = jest.fn();
  const resetCharactersMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<CharacterCard
      character="C-3PO"
      creature="artificial"
      name="Tatooine"
      openingCrawl="the guardians of"
      population="200000"
      relatedFilms={[
        {relatedFilms: "The Empire Strikes Back"},
        {relatedFilms: "Attack of the Clones"}]}
      species="Droid"
      handleFavorites={mockHandleFavorites}
      resetCharacters={resetCharactersMock}
    />);
  })

  it('Should match the snapshot with data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleFavorites with characterInfo on click', () => {
    const characterInfo = {
      character: "C-3PO",
      creature: "artificial",
      name: "Tatooine",
      population: "200000",
      relatedFilms: [
        {relatedFilms: "The Empire Strikes Back"},
        {relatedFilms: "Attack of the Clones"}],
      species: "Droid"
    }
    wrapper.find('.button-favorites').simulate('click');
    expect(mockHandleFavorites).toHaveBeenCalledWith(characterInfo);
  });

  it('should call resetCharacters on click', () => {
    wrapper.find('.button-movies').simulate('click');
    expect(resetCharactersMock).toHaveBeenCalled();
  });
});
