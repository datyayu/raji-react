import React, { PropTypes } from 'react';
import './styles';


const PlayerInfo = ({
  title,
  album = { title: 'Unknown album' },
  artists = [{ name: 'Unknown artist' }],
}) => {
  const artistsNames = artists.map(a => a.name).join(', ');
  const albumImage = album.image || '/assets/defaultAlbum.png';
  const backgroundStyle = { backgroundImage: `url(${albumImage})` };

  return (
    <div className="PlayerInfo">
      <div style={backgroundStyle} className="PlayerInfo__img" />

      <div className="PlayerInfo__text">
        <h2 className="PlayerInfo__title">{title}</h2>
        <h3 className="PlayerInfo__artist">{artistsNames}</h3>
        <h3 className="PlayerInfo__album">{album.title}</h3>
      </div>
    </div>
  );
};

PlayerInfo.propTypes = {
  title: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  album: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default PlayerInfo;
