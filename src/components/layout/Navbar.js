import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav>
      <section className='nav-wrapper blue'>
        <a href='#!' className='brand-logo hide-on-med-and-down'>
          <i className='material-icons'>
            <img style={{ width: '18%' }} src='logo-white.svg' alt='' />
          </i>
        </a>
        <ul className='right' style={{ width: '94%', height: '1%'}}>
          <li>
            <SearchBar />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
