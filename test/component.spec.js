import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../client/component';

test('It should render a message based on the props', t => {
  const component = shallow(<MyComponent text="Bro" />);

  t.is(component.text(), 'Hello, Bro! #1');
});
