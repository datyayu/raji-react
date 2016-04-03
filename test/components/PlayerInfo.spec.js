/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import PlayerInfo from '../../client/components/PlayerInfo';


test.beforeEach(t => {
  t.context.album = {
    image: '/assets/iguigu.png',
    title: 'Hello',
  };

  t.context.artists = [
    { name: 'Ayane' },
    { name: 'Yuka' },
    { name: 'Kana' },
  ];
});


test('PlayerInfo should use the PlayerInfo class', t => {
  const { album } = t.context;

  const component = shallow(<PlayerInfo title="test" album={album} />);

  t.true(component.hasClass('PlayerInfo'), 'You need to include the PlayerInfo class');
});


test('PlayerInfo should use the image from the album as background for PlayerInfo__img', t => {
  const { album } = t.context;

  const component = shallow(<PlayerInfo title="test" album={album} />);
  const imageUrl = component.render().find('.PlayerInfo__img').css('background-image');

  t.is(imageUrl, 'url(/assets/iguigu.png)', 'background-image should be set to the album\'s image');
});


test('Player info should default to /assets/defaultAlbum if no albumImage is passed', t => {
  const component = shallow(<PlayerInfo title="test" />);
  const imageUrl = component.render().find('.PlayerInfo__img').css('background-image');

  t.is(imageUrl, 'url(/assets/defaultAlbum.png)', 'background should use default album image');
});


test('PlayerInfo should render the list of artist in a single line, separated using commas', t => {
  const { album, artists } = t.context;

  const component = shallow(<PlayerInfo title="test" album={album} artists={artists} />);
  const artistNames = component.find('.PlayerInfo__artist').first().text();

  t.is(artistNames, 'Ayane, Yuka, Kana', 'Artist names should be concatenated on a single line');
});


test('PlayerInfo should default to Unknown artist if no artist is passed', t => {
  const { album } = t.context;

  const component = shallow(<PlayerInfo title="test" album={album} />);
  const artistName = component.find('.PlayerInfo__artist').first().text();

  t.is(artistName, 'Unknown artist', 'It should use Unknown artist as default');
});


test('PlayerInfo should use the passed album title', t => {
  const { album } = t.context;

  const component = shallow(<PlayerInfo title="test" album={album} />);
  const albumName = component.find('.PlayerInfo__album').first().text();

  t.is(albumName, 'Hello', 'It should use the props\' album title');
});


test('PlayerInfo should default to Unknown album if no album is passed', t => {
  const component = shallow(<PlayerInfo title="test" />);
  const albumName = component.find('.PlayerInfo__album').first().text();

  t.is(albumName, 'Unknown album', 'It should use Unknown album as default');
});
