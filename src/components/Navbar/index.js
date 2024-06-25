import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, LinkedInButton, ButtonContainer, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
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
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink>
              <Link to="about" smooth={true} duration={500} onClick={() => { setIsOpen(!isOpen) }}>About</Link>
            </MobileLink>
            <MobileLink>
              <Link to="skills" smooth={true} duration={500} onClick={() => { setIsOpen(!isOpen) }}>Skills</Link>
            </MobileLink>
            <MobileLink>
              <Link to="experience" smooth={true} duration={500} onClick={() => { setIsOpen(!isOpen) }}>Experience</Link>
            </MobileLink>
            <MobileLink>
              <Link to="projects" smooth={true} duration={500} onClick={() => { setIsOpen(!isOpen) }}>Projects</Link>
            </MobileLink>
            <MobileLink>
              <Link to="contact" smooth={true} duration={500} onClick={() => { setIsOpen(!isOpen) }}>Contact</Link>
            </MobileLink>
            <LinkedInButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.linkedin} target="_blank">LinkedIn Profile</LinkedInButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
