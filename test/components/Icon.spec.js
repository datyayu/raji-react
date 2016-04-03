import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../../client/components/Icon';


test('Icon should use the Icon class', t => {
  const component = shallow(<Icon name="raji" />);

  t.true(component.hasClass('Icon'), 'You need to include the Icon class');
});


test('Icon should use the fa class', t => {
  const component = shallow(<Icon name="raji" />);

  t.true(component.hasClass('fa'), 'You need to include the fa class');
});


test('It should use any classNames passed to it', t => {
  const component = shallow(<Icon name="raji" className="test test-icon" />);

  t.true(component.hasClass('test'), 'You need to use the classnames passed via props');
  t.true(component.hasClass('test-icon'), 'You need to use the classnames passed via props');
});

test('Icon should generate a fa-<name> class based on the name prop', t => {
  const component = shallow(<Icon name="raji" />);

  t.true(component.hasClass('fa-raji'), 'You need to create a fa-<name> class using the name prop');
});


test('Icon should generate a Icon-<name> class based on the name prop', t => {
  const component = shallow(<Icon name="raji" />);

  t.true(component.hasClass('Icon-raji'), 'Icon needs to include a Icon-<name-prop> class');
});
