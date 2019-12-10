import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App/App.js';
import { getAllMovies } from '../../apiCalls.js';

jest.mock('../../apiCalls.js');

describe('App', () => {

  let wrapper, mockFilms;

  beforeEach(() => {
    wrapper = shallow(<App />);

    mockFilms = [{
      title: ''
    }]

    getAllMovies.mockImplementation(() => {
      return Promise.resolve([{

      }])
    })
  })

  it('Should match the snapshot with all data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should update state with a new hasError when handleLoginError is called', () => {
    wrapper.setState({hasError: true});
    wrapper.instance().handleLoginError(false);

    expect(wrapper.state('hasError')).toEqual(false);
  });

  it('Should update state with a new hasError, userInfo and characters when resetUserInfo is called', () => {
    wrapper.setState({
      hasError: false,
      userInfo: {
        name: 'Luke Skywalker',
        quote: 'You are not my dad!!!',
        skillLevel: 'Jedi Master'
      },
      characters: [
        {
          character: "C-3PO",
          creature: "artificial",
          name: "Tatooine",
          openingCrawl: "Turmoil has engulfed th",
          population: "200000",
          relatedFilms: [{
            relatedFilms: "The Empire Strikes Back"},
            {relatedFilms: "Attack of the Clones"}],
          species: "Droid"
        },
        {
          character: "Jabba Desilijic Tiure",
          creature: "gastropod",
          name: "Nal Hutta",
          openingCrawl: "Turmoil has engulfed th",
          population: "7000000000",
          relatedFilms: [{
            relatedFilms: "The Phantom Menace"},
            {relatedFilms: "Return of the Jedi"}],
          species: "Hutt"
        }
      ]
    });

    wrapper.instance().resetUserInfo();
    expect(wrapper.state('hasError')).toEqual(true);
    expect(wrapper.state('userInfo')).toEqual({});
    expect(wrapper.state('characters')).toEqual([])
  });

  it('Should update state with userInfo when handleUserInfo is called', () => {
    const info = {
      name: 'Luke Skywalker',
      quote: 'Strong you are',
      skillLevel: 'Jedi Master'
    }

    wrapper.setState({userInfo: {}});
    wrapper.instance().handleUserInfo(info);

    expect(wrapper.state('userInfo')).toEqual(info);
  });

  it('Should reset characters state when resetCharacters is called', () => {
    wrapper.setState({characters: [
      {
        character: "C-3PO",
        creature: "artificial",
        name: "Tatooine",
        openingCrawl: "Turmoil has engulfed th",
        population: "200000",
        relatedFilms: [{
          relatedFilms: "The Empire Strikes Back"},
          {relatedFilms: "Attack of the Clones"}],
        species: "Droid"
      },
      {
        character: "Jabba Desilijic Tiure",
        creature: "gastropod",
        name: "Nal Hutta",
        openingCrawl: "Turmoil has engulfed th",
        population: "7000000000",
        relatedFilms: [{
          relatedFilms: "The Phantom Menace"},
          {relatedFilms: "Return of the Jedi"}],
        species: "Hutt"
      }
    ]});

    wrapper.instance().resetCharacters();

    expect(wrapper.state('characters')).toEqual([]);
  });

  it('Should add selected favorite to favorites when handleFavorites is called', () => {
    const mockFavorite = {
      character: "C-3PO",
      creature: "artificial",
      name: "Tatooine",
      population: "200000",
      relatedFilms: [
        {relatedFilms: "The Empire Strikes Back"},
        {relatedFilms: "Attack of the Clones"}
      ],
      species: "Droid"
    }

    wrapper.setState({ favorites: [] });

    wrapper.instance().handleFavorites(mockFavorite);
    expect(wrapper.state('favorites')).toEqual([mockFavorite]);
  });

  it('Should remove selectecd favorite if it is already in favorite when handleFavorites is called', () => {
    const mockFavorite2 = {
      character: "C-3PO",
      creature: "artificial",
      name: "Tatooine",
      population: "200000",
      relatedFilms: [
        {relatedFilms: "The Empire Strikes Back"},
        {relatedFilms: "Attack of the Clones"}
      ],
      species: "Droid"
    }

    wrapper.setState({ favorites: [mockFavorite2] });

    wrapper.instance().handleFavorites(mockFavorite2);
    expect(wrapper.state('favorites')).toEqual([]);
  });
});
