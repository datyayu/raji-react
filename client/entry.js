import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import Store from './store';

const $mountPoint = document.querySelector('#app');


const baseComponent = (
  <Provider store={Store}>
    <Router />
  </Provider>
);


render(baseComponent, $mountPoint);
