/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SidebarLogo from '../../client/components/SidebarLogo';


test.beforeEach(t => {
  t.context.logo = {
    img: '/assets/logo.svg',
    text: 'raji',
  };
});


test('SidebarLogo should use the SidebarLogo class', t => {
  const { logo } = t.context;

  const component = shallow(<SidebarLogo {...logo} />);

  t.true(component.hasClass('SidebarLogo'), 'You need to include the SidebarLogo class');
});


test('SidebarLogo should use the image given', t => {
  const { logo } = t.context;

  const component = shallow(<SidebarLogo {...logo} />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/assets/logo.svg', 'It should use the image given via `img` prop.');
});


test('SidebarLogo should use the title given', t => {
  const { logo } = t.context;

  const component = shallow(<SidebarLogo {...logo} />);
  const textNode = component.children().first();

  t.is(textNode.text(), 'raji', 'It should use the title given via `text` prop.');
});


test('SidebarLogo should use the url given', t => {
  const { logo } = t.context;

  const component = shallow(<SidebarLogo url="/test" {...logo} />);
  const linkUrl = component.props().to;

  t.is(linkUrl, '/test', 'It should use the link given via `url` prop.');
});


test('SidebarLogo\'s link should default to home (/) if not url given', t => {
  const { logo } = t.context;

  const component = shallow(<SidebarLogo {...logo} />);
  const linkUrl = component.props().to;


  t.is(linkUrl, '/', 'It should default to /.');
});
