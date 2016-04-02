import React from 'react';

import Header from '../components/Header';
import AlbumList from '../components/AlbumList';

const albums = [
  { id: 1, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  { id: 2,
    title: 'ラブライブ！ μ\'s Best Album Best Live! Collection Ⅱ sadasddasdsd a',
    image: '/assets/iguigu.jpg' },
  { id: 3, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  { id: 4, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  { id: 5, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  { id: 6, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  { id: 7, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
];


const AlbumsContainer = () => (
  <main className="Content">
    <Header text="Iguchi Yuka" />
    <AlbumList albums={albums} />
  </main>
);


export default AlbumsContainer;
