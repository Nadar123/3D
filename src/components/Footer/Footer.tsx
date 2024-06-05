import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <NavLink to='/cookies' activeClassName='active'>
        Cookies
      </NavLink>
      <NavLink to='/notifications' activeClassName='active'>
        Notifications
      </NavLink>
      <NavLink to='/policies' activeClassName='active'>
        General Policies
      </NavLink>
    </footer>
  );
}

export default Footer;
