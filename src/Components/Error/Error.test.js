import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Error from '../Error/Error.js';

describe('Error', () => {

  it('Should match the snapshot with data passed in', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });

})
