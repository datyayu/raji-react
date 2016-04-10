import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Album from '../../client/components/Album';


test('Album should use the Album class', t => {
  const component = shallow(<Album id={1} title="Hello" />);

  t.true(component.hasClass('Album'), 'You need to include the Album class');
});


test('Album should use the title given', t => {
  const component = shallow(<Album id={1} title="Hello" />);
  const textNode = component.children().first().shallow();

  t.is(textNode.text(), 'Hello', 'It should use the title given via `title` prop.');
});


test.todo('Replace for non-hash url');
test('Album should generate a link with the given id', t => {
  const component = shallow(<Album id={1} title="Hello" />);
  const linkUrl = component.children().first().props().to;

  t.is(linkUrl, '/albums/1', 'It should generate a link using the `id` prop.');
});


test('Album should use the image given', t => {
  const component = shallow(<Album text="raji" image="/test.png" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/test.png', 'It should use the link given via `image` prop.');
});


test('Album\'s link should default to /assets/defaultAlbum.png if not image given', t => {
  const component = shallow(<Album text="raji" />);
  const imageUrl = component.render().find('img').attr('src');

  t.is(imageUrl, '/assets/defaultAlbum.png', 'Image should default to /assets/defaultAlbum.png');
});
