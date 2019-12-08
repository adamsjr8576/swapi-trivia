import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Loading from '../Loading/Loading.js';

describe('Loading', () => {

  it('Should match the snapshot with data passed in', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
