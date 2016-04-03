import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import RootComponent from './RootComponent';
import Store from './store';

const $mountPoint = document.querySelector('#app');


const baseComponent = (
  <Provider store={Store}>
    <RootComponent />
  </Provider>
);


render(baseComponent, $mountPoint);
