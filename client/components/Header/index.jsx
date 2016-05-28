import React, { PropTypes } from 'react';
import './styles';

import Icon from '../Icon';
import HeaderTitle from '../HeaderTitle';


const Header = ({
  text,
  toggleAction,
  hasPlaylist = false,
  playlistIconVisible = true,
  playlistVisible,
  togglePlaylist,
}) => (
  <header className="Header">
    <Icon name="bars" onClick={toggleAction} />
    <HeaderTitle text={text} />
    {
      hasPlaylist && playlistIconVisible ?
        <Icon
          name="caret-square-o-left"
          className={playlistVisible ? 'over-playlist' : '' }
          onClick={togglePlaylist}
        />
        : null
    }
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  toggleAction: PropTypes.func,
  togglePlaylist: PropTypes.func,
  hasSearch: PropTypes.bool,
  hasPlaylist: PropTypes.bool,
  playlistIconVisible: PropTypes.bool,
  playlistVisible: PropTypes.bool,
  showSearch: PropTypes.bool,
};


export default Header;
