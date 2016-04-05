import React, { PropTypes } from 'react';
import './styles';

import Icon from '../Icon';
import HeaderTitle from '../HeaderTitle';

const Header = ({ text, toggleAction }) => (
  <header className="Header">
    <Icon name="bars" onClick={toggleAction} />
    <HeaderTitle text={text} />
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  toggleAction: PropTypes.func,
  hasSearch: PropTypes.bool,
  showSearch: PropTypes.bool,
};


export default Header;
