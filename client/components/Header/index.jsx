import React, { PropTypes } from 'react';
import './styles';

import Icon from '../Icon';
import HeaderTitle from '../HeaderTitle';

const Header = ({ text }) => (
  <header className="Header">
    <Icon name="bars" />
    <HeaderTitle text={text} />
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool,
  showSearch: PropTypes.bool,
};


export default Header;
