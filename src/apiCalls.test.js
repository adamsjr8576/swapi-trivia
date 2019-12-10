import { getAllMovies, getCharacterHomeworld, getCharacterSpecies, getCharacterRelatedFilm, getCharacter } from './apiCalls.js';

describe('getAllMovies', () => {
  let mockResponse = [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      release_date: "1977-05-25",
      characters: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/4/",
          "https://swapi.co/api/people/5/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/9/",
          "https://swapi.co/api/people/10/",
          "https://swapi.co/api/people/12/",
          "https://swapi.co/api/people/13/",
          "https://swapi.co/api/people/14/",
          "https://swapi.co/api/people/15/",
          "https://swapi.co/api/people/16/",
          "https://swapi.co/api/people/18/",
          "https://swapi.co/api/people/19/",
          "https://swapi.co/api/people/81/"
        ]
      }
    ];

    beforeEach(() => {

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      });
    });

    it('Should call fetch with the correct URL', () => {
      getAllMovies();

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
    });

    it('Should return an array of movie information', () => {
      expect(getAllMovies()).resolves.toEqual(mockResponse);
    });

    it('Should return an error for a response that fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        })
      }); 

      expect(getAllMovies()).rejects.toEqual(Error('Error fetching movies'))
    });
});

describe('getCharacterHomeworld', () => {
  let mockResponse =
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/4/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/9/",
          "https://swapi.co/api/people/11/",
          "https://swapi.co/api/people/43/",
          "https://swapi.co/api/people/62/"
      ],
      films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/"
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-21T20:48:04.175778Z",
      url: "https://swapi.co/api/planets/1/"
      };

    let url = {
      homeworld: 'https://swapi.co/api/planets/1/'
    }

    let cleanedMockdata = {
      name: "Tatooine",
      population: "200000"
    }

    beforeEach(() => {

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      });
    });

    it('Should call fetch with the correct URL', () => {
      getCharacterHomeworld(url);

      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/1/');
    });

    it('Should return a new object', () => {
      expect(getCharacterHomeworld(url)).resolves.toEqual(cleanedMockdata);
    });

    it('Should return an error for a response that fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        })
      }); 

      expect(getCharacterHomeworld(url)).rejects.toEqual(Error('Error fetching homeworld'))
    });
});

describe('getCharacterSpecies', () => {
  let mockResponse = {
    name: "Human",
    classification: "mammal",
    designation: "sentient",
    average_height: "180",
    skin_colors: "caucasian, black, asian, hispanic",
    hair_colors: "blonde, brown, black, red",
    eye_colors: "brown, blue, green, hazel, grey, amber",
    average_lifespan: "120",
    homeworld: "https://swapi.co/api/planets/9/",
    language: "Galactic Basic",
    people: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/12/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/19/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/25/",
        "https://swapi.co/api/people/26/",
        "https://swapi.co/api/people/28/",
        "https://swapi.co/api/people/29/",
        "https://swapi.co/api/people/32/",
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/51/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/62/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/67/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/69/",
        "https://swapi.co/api/people/74/",
        "https://swapi.co/api/people/81/",
        "https://swapi.co/api/people/84/",
        "https://swapi.co/api/people/85/",
        "https://swapi.co/api/people/86/",
        "https://swapi.co/api/people/35/"
    ],
    films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/7/",
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
    ],
    created: "2014-12-10T13:52:11.567000Z",
    edited: "2015-04-17T06:59:55.850671Z",
    url: "https://swapi.co/api/species/1/"
  }

  let url = { species: [
    "https://swapi.co/api/species/1/"
    ]
  };

  let cleanedMockdata = {
    species: mockResponse.name,
    creature: mockResponse.classification,
    character: "Human"
  }

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse)
        }
      })
    });
  });

  it('Should call fetch with the correct URL', () => {
    getCharacterSpecies(mockResponse);

    expect(window.fetch).toHaveBeenCalledWith(mockResponse.species);
  });

  it('Should return a new object', () => {
    expect(getCharacterSpecies(url)).resolves.toEqual(cleanedMockdata);
  });

  it('Should return an error for a response that fails', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    }); 

    expect(getCharacterSpecies(url)).rejects.toEqual(Error('Error fetching species'))
  });

});