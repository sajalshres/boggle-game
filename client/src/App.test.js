import React from 'react';
import ReactDom from 'react-dom';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly enzyme', () => {
  const wrapper = shallow(<App />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
