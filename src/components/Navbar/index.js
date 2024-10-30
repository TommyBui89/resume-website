import React from 'react';
import { 
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
  LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, 
  MobileLink, MobileMenuButton 
} from './NavbarStyledComponent';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); // Close menu when navigating
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', cursor: 'pointer' }}>
            <Span>Tommy Bui</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink onClick={scrollToTop}>About</NavLink>
          <NavLink>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </NavLink>
          <NavLink>
            <Link to="experience" smooth={true} duration={500}>Experience</Link>
          </NavLink>
          <NavLink>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </NavLink>
          <NavLink>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <LinkedInButton href={Bio.linkedin} target="_blank">LinkedIn Profile</LinkedInButton>
        </ButtonContainer>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <MobileMenu isOpen={isOpen}>
          <MobileLink onClick={scrollToTop}>About</MobileLink>
          <MobileLink>
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
          </MobileLink>
          <MobileLink>
            <Link to="experience" smooth={true} duration={500} onClick={closeMenu}>Experience</Link>
          </MobileLink>
          <MobileLink>
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
          </MobileLink>
          <MobileLink>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
          </MobileLink>
          <MobileMenuButton href={Bio.linkedin} target="_blank">
            LinkedIn Profile
          </MobileMenuButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
