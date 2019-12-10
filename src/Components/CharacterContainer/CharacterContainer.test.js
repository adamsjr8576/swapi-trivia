import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharacterContainer from '../CharacterContainer/CharacterContainer.js';

describe('CharacterContainer', () => {

  let wrapper;
  const resetCharactersMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<CharacterContainer
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
  })

  it('Should match the snapshot with all the proper data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
