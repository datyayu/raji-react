import React from 'react';
import { render } from 'react-dom';

import RootComponent from './RootComponent';


const $mountPoint = document.querySelector('#app');
const rootComponent = <RootComponent text="world" />;


render(rootComponent, $mountPoint);
