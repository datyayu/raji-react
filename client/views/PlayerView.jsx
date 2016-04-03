import React from 'react';

import Header from '../components/Header';
import Player from '../components/Player';


const playerState = {
  player: {
    durationTime: 342,
    playedTime: 50,
    currentSongId: 0,
    isPlaying: false,
    isRandom: false,
    isLooped: false,
    volume: 100,
  },

  playlist: [
    {
      id: 1,
      title: 'Puengue',
      number: 1,
      artists: [
        {
          url: '/api/artists/1/',
          name: 'Iguchi Yuka',
          image: '/assets/iguchi.jpg',
          bio: 'Such a cute.',
        },
      ],
      album: {
        url: '/api/albums/1/',
        title: 'Hafa Adai',
        image: '/assets/iguigu.jpg',
        single_type: 'Album',
        artists: ['/api/artists/1/'],
      },
      audio_file: '/assets/puengue.mp3',
    },
  ],
};


const PlayerView = () => (
  <main className="Content">
    <Header text="Now Playing" />
    <Player {...playerState} />
  </main>
);


export default PlayerView;
