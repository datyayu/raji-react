import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Artist from '../../client/components/Artist';


test('Artist should use the Artist class', t => {
  const component = shallow(<Artist />);

  t.true(component.hasClass('Artist'), 'You need to include the Artist class');
});
