import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const content = shallow(<App />);

  expect(content.find('.App-link').text()).toEqual('Learn React :) 3');
});
