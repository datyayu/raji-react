/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../../client/components/Sidebar';


test('Sidebar should use the Sidebar class', t => {
  const component = shallow(<Sidebar />);

  t.true(component.hasClass('Sidebar'), 'You need to include the Sidebar class');
});


test('Sidebar should use the `is-active` class if `isActive` prop is set to `true`', t => {
  const component = shallow(<Sidebar isActive />);

  t.true(component.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('Sidebar should not use the `is-active` class if `isActive` prop is set to `false`', t => {
  const component = shallow(<Sidebar isActive={false} />);

  t.false(component.hasClass('is-active'), 'You need to exclude the `is-active` class');
});
