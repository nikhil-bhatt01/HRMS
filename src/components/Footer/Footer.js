import { Container, Row, Col } from "react-bootstrap";
import drdologo from '../../assets/img/drdologo.png';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={drdologo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/company/defence-research-and-development-organisation-drdo?trk=similar-pages"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/DPIDRDO"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/dpi.drdo/?hl=en"><img src={navIcon3} alt="" /></a>
              <a href="https://twitter.com/drdo_india"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}