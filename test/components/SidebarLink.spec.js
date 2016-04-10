/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SidebarLink from '../../client/components/SidebarLink';


test('SidebarLink should use the SidebarLink class', t => {
  const component = shallow(<SidebarLink text="raji" />);

  t.true(component.hasClass('SidebarLink'), 'You need to include the SidebarLink class');
});


test('SidebarLink should use the text given', t => {
  const component = shallow(<SidebarLink text="raji" />);
  const textNode = component.children().first().render();

  t.is(textNode.text(), '—— raji', 'It should use the text given via `text` prop.');
});


test('SidebarLink should use the url given', t => {
  const component = shallow(<SidebarLink text="raji" url="/test" />);
  const linkUrl = component.children().first().props().to;

  t.is(linkUrl, '/test', 'It should use the link given via `url` prop.');
});


test('SidebarLink\'s link should default to / if not url given', t => {
  const component = shallow(<SidebarLink text="raji" />);
  const linkUrl = component.children().first().props().to;

  t.is(linkUrl, '/', 'It should default to /.');
});
