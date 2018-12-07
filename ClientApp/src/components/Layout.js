import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = ({ children }) => (
  <div>
    <NavMenu />
    <Container>
      {children}
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
