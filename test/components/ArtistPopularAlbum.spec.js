import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistPopularAlbum from '../../client/components/ArtistPopularAlbum';


test('ArtistPopularAlbum should use the ArtistPopularAlbum class', t => {
  const component = shallow(<ArtistPopularAlbum id={1} title="raji" />);

  t.true(component.hasClass('ArtistPopularAlbum'), 'Include the ArtistPopularAlbum class');
});


test('ArtistPopularAlbum should use the title given', t => {
  const component = shallow(<ArtistPopularAlbum id={1} title="raji" />);
  const imageAlt = component.render().find('img').attr('alt');

  t.is(imageAlt, 'raji', 'It should use the title given via `title` prop.');
});


test('ArtistPopularAlbum should use the image given', t => {
  const component = shallow(<ArtistPopularAlbum id={1} title="raji" image="/image.jpg" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/image.jpg', 'It should use the link given via `image` prop.');
});


test('ArtistPopularAlbum\'s should default to /assets/defaultAlbum.png if not image given', t => {
  const component = shallow(<ArtistPopularAlbum id={1} title="raji" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/assets/defaultAlbum.png', 'It should default to /assets/defaultArtist.jpg.');
});
