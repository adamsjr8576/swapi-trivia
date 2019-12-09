import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from '../MovieContainer/MovieContainer.js';

describe('MovieContainer', () => {

  it('Should match the snapshot with data passed in', () => {
    const movieMock = [
      {
        title: 'A New Hope',
        episode_id: 4,
        release_date: '1977-05-25',
      },
      {
        title: 'Empire Strikes Back',
        episode_id: 5,
        release_date:'1980-05-17' 
      }
    ]
    let wrapper = shallow(
      <section>
        <MovieContainer
          {...movieMock}
          getCharacterData={jest.fn()}
        />
      </section>
    );
    expect(wrapper).toMatchSnapshot();
  })
})