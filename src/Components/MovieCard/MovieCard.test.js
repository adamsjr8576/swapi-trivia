import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../MovieCard/MovieCard.js';

describe('MovieCard', () => {

  let wrapper, mockGetCharacterData, mockMovie;

  beforeEach(() => {
    mockGetCharacterData = jest.fn()
    mockMovie = {
        title:'Some Movie Title',
        episode_id: 28,
        release_date:'2020-05-22',
        id: 28
      };
    wrapper = shallow(<MovieCard 
        title={mockMovie.title}
        episode_id={mockMovie.episode_id}
        release_date={mockMovie.release_date}
        id={mockMovie.episode_id} 
        getCharacterData={mockGetCharacterData}
      />)
  });

  it('Should match the snapshot with data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Should call getCharacterData when the button is clicked', () => {
    const mockEvent = { target: { title: 'Some Title II', id: 28  } };
    wrapper.find('button').simulate('click', mockEvent)

    expect(mockGetCharacterData).toHaveBeenCalledWith(28)
  });
})