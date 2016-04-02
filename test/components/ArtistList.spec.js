/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistList from '../../client/components/ArtistList';
import Artist from '../../client/components/Artist';


test.beforeEach(t => {
  const baseArtist = {
    name: 'Iguchi Yuka',
    image: '/assets/iguchi.jpg',
    albums: [
      { id: 5, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
      { id: 2, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
      { id: 3, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    ],
  };

  t.context.artists = [
      { ...baseArtist, id: 1, name: 'Kishida Kishin and The Akeboshi Rockets' },
      { ...baseArtist, id: 2 },
      { ...baseArtist, id: 3 },
  ];
});


test('ArtistList should use the ArtistList class', t => {
  const component = shallow(<ArtistList />);

  t.true(component.hasClass('ArtistList'), 'You need to include the ArtistList class');
});


test('ArtistList should render a item per link passed', t => {
  const { artists } = t.context;

  const component = shallow(<ArtistList artists={artists} />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, artists.length, 'Item count is wrong.');
});


test('ArtistList should return an empty list if no artists passed', t => {
  const component = shallow(<ArtistList />);
  const linksNumber = component.find('ul').children().length;

  t.is(linksNumber, 0, 'There should be not items in the list.');
});


test('ArtistList children should render the info properly', t => {
  const { artists } = t.context;

  const component = shallow(<ArtistList artists={artists} />);
  const childComponent = component.find('ul').childAt(0).shallow();
  const expectedComponent = shallow(<Artist {...artists[0]} />);

  t.is(childComponent.text(), expectedComponent.text());
});
