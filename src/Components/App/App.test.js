import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App/App.js';

describe('App', () => {

  it('Should match the snapshot with all data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should update state with a new hasError when handleLoginError is called', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({hasError: true});
    wrapper.instance().handleLoginError(false);

    expect(wrapper.state('hasError')).toEqual(false);
  });

  it('Should update state with a new hasError, userInfo and characters when resetUserInfo is called', () => {
    const wrapper = shallow(<App />);

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
    const wrapper = shallow(<App />);
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
    const wrapper = shallow(<App />);

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
  })
});
