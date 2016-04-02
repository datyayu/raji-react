/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import MobileContentBlocker from '../../client/components/MobileContentBlocker';


test('MobileContentBlocker should use the MobileContentBlocker class', t => {
  const component = shallow(<MobileContentBlocker />);

  t.true(component.hasClass('MobileContentBlocker'), 'Use the MobileContentBlocker class');
});


test('MobileContentBlocker should use the is-active class if isActive is set to true', t => {
  const component = shallow(<MobileContentBlocker isActive />);

  t.true(component.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('MobileContentBlocker should not use the is-active class if isActive is set to false', t => {
  const component = shallow(<MobileContentBlocker isActive={false} />);

  t.false(component.hasClass('is-active'), 'You need to exclude the `is-active` class');
});
