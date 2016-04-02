import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../client/components/Header';


test('Header should use the Header class', t => {
  const component = shallow(<Header text="raji" />);

  t.true(component.hasClass('Header'), 'You need to include the Header class');
});
