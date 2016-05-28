import React, { PropTypes } from 'react';

import Header from '../components/Header';
import Player from '../components/Player';

import ApplicationContainer from '../containers/application';
import Playlist from '../components/Playlist';


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

  playlist: {
    info: {
      title: 'SOngs to test',
      image: '/assets/iguchi.jpg',
      artists: ['Iguchi yuka'],
    },
    songs: [
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
      {
        id: 2,
        title: 'Puengue',
        number: 2,
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
      {
        id: 3,
        title: 'Puengue',
        number: 3,
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
      {
        id: 4,
        title: 'Puengue',
        number: 4,
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
  },
};


const PlayerView = ({ applicationActions }) => (
  <main className="Content">
    <Header text="Now Playing" toggleAction={applicationActions.toggleSidemenu} />
    <Player {...playerState} />
    <Playlist playlist={playerState.playlist} currentSongId={1} showInfo />
  </main>
);

PlayerView.propTypes = {
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainer(PlayerView);
