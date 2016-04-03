import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Player from '../../client/components/Player';


test('Player should use the Player class', t => {
  const component = shallow(<Player player={{ currentSongId: 0 }} />);

  t.true(component.hasClass('Player'), 'You need to include the Player class');
});
