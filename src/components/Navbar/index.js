import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, MobileMenuButton } from './NavbarStyledComponent';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <Span>Tommy Bui</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </NavLink>
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
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink>
              <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
            </MobileLink>
            <MobileLink>
              <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
            </MobileLink>
            <MobileLink>
              <Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link>
            </MobileLink>
            <MobileLink>
              <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
            </MobileLink>
            <MobileLink>
              <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
            </MobileLink>
            <MobileMenuButton href={Bio.linkedin} target="_blank">LinkedIn Profile</MobileMenuButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
