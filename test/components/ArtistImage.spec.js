/* eslint no-param-reassign: 0 */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistImage from '../../client/components/ArtistImage';


test('ArtistImage should use the ArtistImage class', t => {
  const component = shallow(<ArtistImage id={1} name="raji" />);
  const imageNode = component.find('img').first();

  t.true(imageNode.hasClass('ArtistImage'), 'You need to include the ArtistImage class');
});


test('ArtistImage should use the name given', t => {
  const component = shallow(<ArtistImage id={1} name="raji" />);
  const imageAlt = component.render().find('img').attr('alt');

  t.is(imageAlt, 'raji', 'It should use the name given via `name` prop.');
});


test('ArtistImage should use the image given', t => {
  const component = shallow(<ArtistImage id={1} name="raji" image="/image.jpg" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/image.jpg', 'It should use the link given via `image` prop.');
});


test('ArtistImage\'s link should default to /assets/defaultArtist.jpg if not image given', t => {
  const component = shallow(<ArtistImage id={1} name="raji" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/assets/defaultArtist.jpg', 'It should default to /assets/defaultArtist.jpg.');
});
