import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import HeaderTitle from '../../client/components/HeaderTitle';


test('HeaderTitle should use the HeaderTitle class', t => {
  const component = shallow(<HeaderTitle text="raji" />);

  t.true(component.hasClass('HeaderTitle'), 'You need to include the HeaderTitle class');
});


test('HeaderTitle should use the text given', t => {
  const component = shallow(<HeaderTitle text="raji" />);

  t.is(component.text(), 'raji', 'It should use the text given via `text` prop.');
});


test('HeaderTitle should use the `is-showing` class if `isShowing` prop is set to `true`', t => {
  const component = shallow(<HeaderTitle isShowing />);

  t.true(component.hasClass('is-showing'), 'You need to include the `is-showing` class');
});


test('HeaderTitle should not use the `is-showing` class if `isShowing` prop is set to false', t => {
  const component = shallow(<HeaderTitle isShowing={false} />);

  t.false(component.hasClass('is-showing'), 'You need to exclude the `is-showing` class');
});
