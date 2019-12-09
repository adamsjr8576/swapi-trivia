import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharacterCard from '../CharacterCard/CharacterCard.js';

describe('CharacterCard', () => {
  let wrapper;
  const mockHandleFavorites = jest.fn();

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
  })
});
