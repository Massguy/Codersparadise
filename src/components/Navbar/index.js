import React,{useState,useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav,setScrollNav] = useState(false)

  const changeNav= () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

 const toggleHome=()=>{
scroll.scrollToTop();
  }
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>CodersParadise</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Meet The Creator" smooth="true" duration={500} spy={true} exact='true' offset={-80}>Meet The Creator</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth="true" duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="classes" smooth="true" duration={500} spy={true} exact='true' offset={-80}>Classes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth="true" duration={500} spy={true} exact='true' offset={-80}>SignUp</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin" smooth="true" duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
