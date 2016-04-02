/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import AlbumList from '../../client/components/AlbumList';
import Album from '../../client/components/Album';


test.beforeEach(t => {
  t.context.albums = [
    { id: 1, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    { id: 2,
      title: 'ラブライブ！ μ\'s Best Album Best Live! Collection Ⅱ sadasddasdsd a',
      image: '/assets/iguigu.jpg' },
    { id: 3, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  ];
});


test('AlbumList should use the AlbumList class', t => {
  const { albums } = t.context;

  const component = shallow(<AlbumList albums={albums} />);

  t.true(component.hasClass('AlbumList'), 'You need to include the AlbumList class');
});


test('AlbumList should render a item per link passed', t => {
  const { albums } = t.context;

  const component = shallow(<AlbumList albums={albums} />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, albums.length, 'Item count is wrong.');
});


test('AlbumList should return an empty list if no albums passed', t => {
  const component = shallow(<AlbumList />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, 0, 'There should be not items in the list.');
});


test('AlbumList children should render the info properly', t => {
  const { albums } = t.context;

  const component = shallow(<AlbumList albums={albums} />);
  const childComponent = component.find('ul').childAt(0).shallow();
  const expectedComponent = shallow(<Album {...albums[0]} />);

  t.is(childComponent.text(), expectedComponent.text());
});
