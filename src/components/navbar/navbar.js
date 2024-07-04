import React, { useState } from 'react';
import { Link } from 'gatsby';

// Navbar MenuItems Data Import
import { MenuItems } from './menu_item';

// React Bootstrap Style Import
import { Container } from 'react-bootstrap';

// Navbar Styles SCSS Import
import navbarStyles from './navbar.module.scss';

// React Icons Import
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';

const Navbar = () => {
  const [open, toggleHumbugger] = useState(false);

  const handleToggleHumbugger = () => {
    toggleHumbugger(!open);
  };

  return (
    <Container fluid className={open ? navbarStyles.NavbarItemsActive : navbarStyles.NavbarItems}>
      <Link to="/" className={navbarStyles.navbarLogo}>
        <AiOutlineCode />
        <h1>Software Engineer</h1>
      </Link>

      <div
        className={navbarStyles.menuIcon}
        onClick={handleToggleHumbugger}
        onKeyDown={handleToggleHumbugger}
        role="button"
        tabIndex={0}
      >
        {open ? (
          <FaRegTimesCircle className={navbarStyles.xIcon} />
        ) : (
          <FaBars className={navbarStyles.hamburgerIcon} />
        )}
      </div>

      <div className={open ? navbarStyles.navMenuActive : navbarStyles.navMenu}>
        {MenuItems.map(({ text, url, cName, isActive }, index) => {
          return (
            <Link
              key={index}
              to={url}
              className={navbarStyles[cName]}
              activeClassName={navbarStyles[isActive]}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Navbar;
