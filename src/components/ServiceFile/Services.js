import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCards/ServiceCard";
import { ServiceCard2 } from "./ServiceCards/ServiceCard2";
import { ServiceCard3 } from "./ServiceCards/ServiceCard3";
import projImg1 from "../../assets/img/Serv/1.png";
import projImg2 from "../../assets/img/Serv/2.png";
import projImg3 from "../../assets/img/Serv/3.png";
import projImg4 from "../../assets/img/Serv/4.png";
import projImg5 from "../../assets/img/Serv/5.png";
import projImg6 from "../../assets/img/Serv/6.png";
import projImg7 from "../../assets/img/Serv/7.png";
import projImg8 from "../../assets/img/Serv/8.png";
import projImg9 from "../../assets/img/Serv/9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const services = [
     /*servicecard-1*/
    {
      title: "Help-Portal",
      description: "Managed by HR-Department",
      imgUrl: projImg1,
    },
    {
      title: "New-Recruit",
      description: "Managed by HR-Department",
      imgUrl: projImg2,
    },
    {
      title: "Salary-Info",
      description: "Managed by Account's-Department",
      imgUrl: projImg3,
    },


    
  ];

  const services2 = [
    /*servicecard-2*/
   {
     title2: "Salary-Correction",
     description2: "Managed by Account's-Department",
     imgUrl2: projImg4,
   },
   {
     title2: "REMBS-Portal",
     description2: "Managed by REMBS-Department",
     imgUrl2: projImg5,
   },
   {
     title2: "Service-Desk",
     description2: "Managed by HR-Department",
     imgUrl2: projImg9,
   }
 ];
 
 const services3 = [
  /*servicecard-3*/
 {
   title3: "Fundings",
   description3: "Managed by Account's-Department",
   imgUrl3: projImg7,
 },
 {
   title3: "Projects-Info",
   description3: "Managed by Project Managing Department",
   imgUrl3: projImg8,
 },
 {
   title3: "Discover-More",
   description3: "Managed by HR-Department",
   imgUrl3: projImg6,
 }
];
  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p>DRDO Services Department is entrusted with handling the service affairs of DRDO's Executives of Government of Delhi Administration. The Services Department is also the controlling authority for the senior officers of the DRDO of the Delhi Administration. </p>
                <Tab.Container id="services-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          services.map((service, index) => {
                            return (
                              <ServiceCard
                                key={index}
                                {...service}
                                />
                              
                            )
                          })
                        }
                        <p>For Additional Information hover cursor  over  the Portals </p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          services2.map((service, index) => {
                            return (
                              <ServiceCard2
                                key={index}
                                {...service}
                                />
                            )
                          })
                        }
                        <p>For Additional Information hover cursor over the Portals </p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          services3.map((service, index) => {
                            return (
                              <ServiceCard3
                                key={index}
                                {...service}
                                />
                            )
                          })
                        }
                        <p>For Additional Information hover cursor over the Portals </p>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}