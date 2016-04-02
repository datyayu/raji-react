import React from 'react';

import Header from '../components/Header';
import ArtistList from '../components/ArtistList';

const baseArtist = {
  name: 'Iguchi Yuka',
  image: '/assets/iguchi.jpg',
  albums: [
    { id: 5, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    { id: 2, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
    { id: 3, title: 'Hafa Adai', image: '/assets/iguigu.jpg' },
  ],
};


const artists = [
  { ...baseArtist, id: 1, name: 'Kishida Kishin and The Akeboshi Rockets' },
  { ...baseArtist, id: 2 },
  { ...baseArtist, id: 3 },
  { ...baseArtist, id: 4 },
  { ...baseArtist, id: 5 },
  { ...baseArtist, id: 6 },
  { ...baseArtist, id: 7 },
];


const ArtistsContainer = () => (
  <main className="Content">
    <Header text="Artists" />
    <ArtistList artists={artists} />
  </main>
);


export default ArtistsContainer;
