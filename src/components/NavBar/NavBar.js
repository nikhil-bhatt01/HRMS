import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import drdologo from '../../assets/img/drdologo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/nav-icon4.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={drdologo} alt="Logo" />
          <Navbar.Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About-Us</Nav.Link>
            <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://in.linkedin.com/company/defence-research-and-development-organisation-drdo?trk=similar-pages"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/DPIDRDO"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/dpi.drdo/?hl=en"><img src={navIcon3} alt="" /></a>
              <a href="https://twitter.com/drdo_india"><img src={navIcon4} alt="" /></a>
            </div>
            <a href="http://localhost:3001/"><button className="vvd" onClick={() => console.log('connect')}><span>Login</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}