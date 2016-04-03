import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import PlayerControls from '../../client/components/PlayerControls';


test('PlayerControls should use the PlayerControls class', t => {
  const component = shallow(<PlayerControls />);

  t.true(component.hasClass('PlayerControls'), 'You need to include the PlayerControls class');
});


test('PlayerControls\' Random should not contain is-active class if isRandom is not passed', t => {
  const component = shallow(<PlayerControls />);
  const randomIcon = component.render().find('.Icon-random');

  t.false(randomIcon.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('PlayerControls\' Random should contain is-active class if isRandom is set to true', t => {
  const component = shallow(<PlayerControls isRandom />);
  const randomIcon = component.render().find('.Icon-random');

  t.true(randomIcon.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('PlayerControls\' Loop should not contain is-active class if isLooped is not passed', t => {
  const component = shallow(<PlayerControls />);
  const loopedIcon = component.render().find('.Icon-refresh');

  t.false(loopedIcon.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('PlayerControls\' Loop should contain is-active class if isLooped is set to true', t => {
  const component = shallow(<PlayerControls isLooped />);
  const loopedIcon = component.render().find('.Icon-refresh');

  t.true(loopedIcon.hasClass('is-active'), 'You need to include the `is-active` class');
});


test('PlayerControls\' Playing Icon should use play class if isPlaying is not passed', t => {
  const component = shallow(<PlayerControls />);
  const playingIcon = component.render().find('.Icon-play');

  t.ok(playingIcon.length, 'You need to use the `play` class');
});


test('PlayerControls\' Playing Icon should use pause class if isPlaying is set to true', t => {
  const component = shallow(<PlayerControls isPlaying />);
  const playingIcon = component.render().find('.Icon-pause');

  t.ok(playingIcon.length, 'You need to use the `pause` class');
});
