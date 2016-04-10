/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SidebarLinkList from '../../client/components/SidebarLinkList';
import SidebarLink from '../../client/components/SidebarLink';


test.beforeEach(t => {
  t.context.links = [
    { text: 'home', url: '/' },
    { text: 'player', url: '/player' },
    { text: 'artists', url: '/artists' },
    { text: 'albums', url: '/albums' },
  ];
});


test('SidebarLinkList should use the SidebarLinkList class', t => {
  const { links } = t.context;

  const component = shallow(<SidebarLinkList links={links} />);

  t.true(component.hasClass('SidebarLinkList'), 'You need to include the SidebarLinkList class');
});


test('SidebarLinkList should render a item per link passed', t => {
  const { links } = t.context;

  const component = shallow(<SidebarLinkList links={links} />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, links.length, 'Item count is wrong.');
});


test('SidebarLinkList should return an empty list if no links passed', t => {
  const component = shallow(<SidebarLinkList />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, 0, 'There should be not items in the list.');
});


test('SidebarLinkList children should render the info properly', t => {
  const { links } = t.context;

  const component = shallow(<SidebarLinkList links={links} />);
  const childComponent = component.find('ul').childAt(0).shallow();
  const expectedComponent = shallow(<SidebarLink {...links[0]} />);

  t.is(childComponent.text(), expectedComponent.text());
});
