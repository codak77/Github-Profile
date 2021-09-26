import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i style={{ paddingRight: '10px' }}>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </i>
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
