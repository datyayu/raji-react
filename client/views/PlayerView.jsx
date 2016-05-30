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
      title: 'Songs to test',
      image: '/assets/iguigu.jpg',
      author: '@datyayu',
    },
    songs: [
      {
        id: '1',
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
        id: '2',
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
        id: '3',
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
        id: '4',
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
      {
        id: '5',
        title: 'Puengue',
        number: 5,
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
        id: '6',
        title: 'Puengue',
        number: 6,
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
        id: '7',
        title: 'Puengue',
        number: 7,
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
        id: '8',
        title: 'Puengue',
        number: 8,
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
        id: '9',
        title: 'Puengue',
        number: 9,
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
        id: '10',
        title: 'Puengue',
        number: 10,
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
        id: '11',
        title: 'Puengue',
        number: 11,
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


const PlayerView = ({ applicationState, applicationActions }) => (
  <main className="Content--with-playlist">
    <div className="Content">
      <Header
        text="Now playing"
        toggleAction={applicationActions.toggleSidemenu}
        togglePlaylist={applicationActions.togglePlaylist}
        playlistVisible={applicationState.showPlaylist}
        playlistIconVisible
        hasPlaylist
      />
      <Player {...playerState} />
    </div>
    <Playlist
      playlist={playerState.playlist}
      isVisible={applicationState.showPlaylist}
      currentSongId={1}
      showInfo
    />
  </main>
);

PlayerView.propTypes = {
  applicationState: PropTypes.shape({
    showPlaylist: PropTypes.bool,
  }),
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainer(PlayerView);
