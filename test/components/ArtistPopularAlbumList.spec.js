/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistPopularAlbumList from '../../client/components/ArtistPopularAlbumList';
import ArtistPopularAlbum from '../../client/components/ArtistPopularAlbum';


test.beforeEach(t => {
  t.context.albums = [
    { id: 5, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    { id: 2, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    { id: 3, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  ];
});


test('ArtistPopularAlbumList should use the ArtistPopularAlbumList class', t => {
  const component = shallow(<ArtistPopularAlbumList />);

  t.true(component.hasClass('ArtistPopularAlbumList'), 'Use the ArtistPopularAlbumList class');
});


test('ArtistPopularAlbumList should render a item per link passed', t => {
  const { albums } = t.context;

  const component = shallow(<ArtistPopularAlbumList albums={albums} />);
  // Offset -1 because of the 'More >' link.
  const linksNumber = component.find('ul').children().length - 1;

  t.is(linksNumber, albums.length, 'Item count is wrong.');
});


test('ArtistPopularAlbumList should return an empty list if no albums passed', t => {
  const component = shallow(<ArtistPopularAlbumList />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, 0, 'There should be not items in the list.');
});


test('ArtistPopularAlbumList children should render the info properly', t => {
  const { albums } = t.context;

  const component = shallow(<ArtistPopularAlbumList albums={albums} />);
  const childComponent = component.find('ul').childAt(0).shallow();
  const expectedComponent = shallow(<ArtistPopularAlbum {...albums[0]} />);

  t.is(childComponent.text(), expectedComponent.text());
});
