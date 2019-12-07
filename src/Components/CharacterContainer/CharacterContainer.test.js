import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharacterContainer from '../CharacterContainer/CharacterContainer.js';

describe('CharacterContainer', () => {

  it('Should match the snapshot with all the proper data passed in', () => {
    const wrapper = shallow(<CharacterContainer
      characters={[{
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
      resetCharacters={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call resetCharacters on click', () => {
    const resetCharactersMock = jest.fn()
    const wrapper = shallow(<CharacterContainer
    characters={[{
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
    resetCharacters={resetCharactersMock}
    />);

    wrapper.find('.button-movies').simulate('click');
    expect(resetCharactersMock).toHaveBeenCalled();
  })
});
