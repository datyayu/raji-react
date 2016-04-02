import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ArtistInfo from '../../client/components/ArtistInfo';


test('ArtistInfo should use the ArtistInfo class', t => {
  const component = shallow(<ArtistInfo />);

  t.true(component.hasClass('ArtistInfo'), 'You need to include the ArtistInfo class');
});
