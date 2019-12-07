import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharacterCard from '../CharacterCard/CharacterCard.js';

describe('CharacterCard', () => {

  it('Should match the snapshot with data passed in', () => {
    const wrapper = shallow(<CharacterCard
      character="C-3PO"
      creature="artificial"
      name="Tatooine"
      openingCrawl="the guardians of"
      population="200000"
      relatedFilms={[
        {relatedFilms: "The Empire Strikes Back"},
        {relatedFilms: "Attack of the Clones"}]}
      species="Droid"
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
