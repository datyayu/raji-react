import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistName from '../../client/components/ArtistName';


test('ArtistName should use the ArtistName class', t => {
  const component = shallow(<ArtistName id={1} name="Hello" />);

  t.true(component.hasClass('ArtistName'), 'You need to include the ArtistName class');
});


test('ArtistName should use the name given', t => {
  const component = shallow(<ArtistName id={1} name="Hello" />);

  t.is(component.text(), 'Hello', 'It should use the name given via `name` prop.');
});


test.todo('Replace for non-hash url');
test('ArtistName should generate a link with the given id', t => {
  const component = shallow(<ArtistName id={1} name="Hello" />);
  const linkUrl = component.render().find('a').attr('href');

  t.is(linkUrl, '#/artists/1', 'It should generate a link using the `id` prop.');
});
