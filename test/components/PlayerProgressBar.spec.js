import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import PlayerProgressBar from '../../client/components/PlayerProgressBar';


test('PlayerProgressBar should use the PlayerProgressBar class', t => {
  const component = shallow(<PlayerProgressBar max={100} />);

  t.true(component.hasClass('PlayerProgressBar'), 'You need to use the PlayerProgressBar class');
});


test('PlayerProgressBar\'s width should be based on the current & max props', t => {
  const component = shallow(<PlayerProgressBar max={100} current={50} />);
  const componentWidth = component.render().find('.PlayerProgressBar__current').css('width');

  t.is(componentWidth, '50%', 'Component\'s width shoud depend on the current vs max');
});


test('PlayerProgressBar\'s width should be 0 if not current is specified', t => {
  const component = shallow(<PlayerProgressBar max={100} />);
  const componentWidth = component.render().find('.PlayerProgressBar__current').css('width');

  t.is(componentWidth, '0%', 'Component\'s width shoud depend on the current vs max');
});
