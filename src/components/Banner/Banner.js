import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import hrms from "../../assets/img/hrms.png";
import drdo from "../../assets/img/drdo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Admin Officer's", "Manager's", "Registered Employee's" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to HRMS</span>
                <h1>{`HRMS portal is Activated`}</h1>
                <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Admin Officers", "Managers", "Registered Employee"  ]'><span className="wrap">{text}</span></span></h2>
                <h3>{' are requested to LOGIN'}</h3><br />
                <div className="intro">
                <p>DRDO <img src={drdo} alt="Header Img"/>  is India's largest research organisation. It has a network of laboratories engaged in developing defence technologies covering various fields, like aeronautics, armaments, electronics, land combat engineering, life sciences, materials, missiles, and naval systems.</p>
                </div>
                <a href="http://localhost:3001/"><button onClick={() => console.log('connect')}>Log In <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={hrms} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
