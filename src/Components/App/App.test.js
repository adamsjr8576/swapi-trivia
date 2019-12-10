import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App/App.js';
import { getAllMovies, getCharacterHomeworld, getCharacterSpecies, getCharacterRelatedFilm } from '../../apiCalls.js';

jest.mock('../../apiCalls.js');

describe('App', () => {

  let wrapper, mockFilms;

  beforeEach(() => {
    mockFilms = [{
      title: 'A new Hope',
      episode_id: 1,
      release_date: '1983/4/12',
      characters: [{name: 'Luke', homeworld: 'url', species: 'url', relatedFilms: ['url', 'url']}],
      opening_crawl: 'In the beginning...'
    }]

    getAllMovies.mockImplementation(() => {
      return Promise.resolve(mockFilms)
    });

    wrapper = shallow(<App />);

  });

  it('Should match the snapshot with all data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getAllMovies after component is mounted', () => {
    shallow(<App />);

    expect(getAllMovies).toHaveBeenCalled();
  });

  it('handleCharacterHomeworld should call getCharacterHomeworld when invoked' , () => {
    let mockHomeworldData = {name: 'Tatooine', population: '200000'}

    getCharacterHomeworld.mockImplementation(() => {
      return Promise.resolve(mockHomeworldData);
    });

    const wrapper = shallow(<App />);
    wrapper.instance().handleCharacterHomeworld();
    expect(getCharacterHomeworld).toHaveBeenCalled();
  });

  it('handleCharacterHomeworld should return the correct homeworld data' , () => {
    let mockHomeworldData = {name: 'Tatooine', population: '200000'}

    getCharacterHomeworld.mockImplementation(() => {
      return Promise.resolve(mockHomeworldData);
    });

    const wrapper = shallow(<App />);
    expect(wrapper.instance().handleCharacterHomeworld()).resolves.toEqual(mockHomeworldData);
  });

  it('handleCharacterSpecies should call getCharacterSpecies when invoked' , () => {
    let mockSpeciesData = {species: 'human', creature: 'mammal', character: 'john'}

    getCharacterSpecies.mockImplementation(() => {
      return Promise.resolve(mockSpeciesData);
    });

    const wrapper = shallow(<App />);
    wrapper.instance().handleCharacterSpecies();
    expect(getCharacterSpecies).toHaveBeenCalled();
  });

  it('handleCharacterSpecies should return the correct species data' , () => {
    let mockSpeciesData = {species: 'human', creature: 'mammal', character: 'john'}

    getCharacterSpecies.mockImplementation(() => {
      return Promise.resolve(mockSpeciesData);
    });

    const wrapper = shallow(<App />);
    expect(wrapper.instance().handleCharacterSpecies()).resolves.toEqual(mockSpeciesData);
  });

  it('handleCharacterRelatedFilm should call getCharacterRelatedFilm when invoked' , () => {
    let mockRelatedFilmData = {relatedFilms: 'A new hope'}
    let mockCharacter = {films: ['A new hope', 'The last Jedi']};

    getCharacterRelatedFilm.mockImplementation(() => {
      return Promise.resolve(mockRelatedFilmData);
    });

    const wrapper = shallow(<App />);
    wrapper.instance().handleCharacterRelatedFilm(mockCharacter);
    expect(getCharacterRelatedFilm).toHaveBeenCalled();
  });

  it('handleCharacterRelatedFilm should return the correct related film data' , () => {
    let mockRelatedFilmData = {relatedFilms: 'A new hope'};
    let mockCharacter = {films: ['A new hope', 'The last Jedi']};
    let mockReturnedRelatedFilmData = Promise.resolve([{relatedFilms: 'A new hope'}, {relatedFilms: 'A new hope'}]);

    getCharacterRelatedFilm.mockImplementation(() => {
      return Promise.resolve(mockRelatedFilmData);
    });

    const wrapper = shallow(<App />);
    expect(Promise.resolve(wrapper.instance().handleCharacterRelatedFilm(mockCharacter))).toEqual(mockReturnedRelatedFilmData);
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
