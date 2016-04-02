import React from 'react';
import { render } from 'react-dom';

import MyComponent from './component';

const $mountPoint = document.querySelector('#app');
const rootElement = <MyComponent text="world" />;

render(rootElement, $mountPoint);
