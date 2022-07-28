import img1 from "../../assets/img/abt/abt1.jpg";
import img2 from "../../assets/img/abt/abt2.jpg";
import img3 from "../../assets/img/abt/abt3.jpg";
import img4 from "../../assets/img/abt/abt4.jpg";
import img5 from "../../assets/img/abt/abt5.jpg";
import img6 from "../../assets/img/abt/abt6.jpg";
import img7 from "../../assets/img/abt/abt7.jpg";
import img8 from "../../assets/img/abt/abt8.jpg";
import img9 from "../../assets/img/abt/abt9.jpg";
import img10 from "../../assets/img/abt/abt10.jpg";
import img11 from "../../assets/img/abt/abt11.jpg";
import img12 from "../../assets/img/abt/abt12.jpg";
import img13 from "../../assets/img/abt/abt13.jpg";
import img14 from "../../assets/img/abt/abt14.jpg";
import img15 from "../../assets/img/abt/abt15.jpg";
import img16 from "../../assets/img/abt/abt16.jpg";
import img17 from "../../assets/img/abt/abt17.jpg";
import img18 from "../../assets/img/abt/abt18.jpg";
import img19 from "../../assets/img/abt/abt19.jpg";
import img20 from "../../assets/img/abt/abt20.jpg";
import img21 from "../../assets/img/abt/abt21.jpg";
import img22 from "../../assets/img/abt/abt22.jpg";
import img23 from "../../assets/img/abt/abt23.jpg";
import img24 from "../../assets/img/abt/abt24.jpg";
import img25 from "../../assets/img/abt/abt25.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const About = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>The <b>Defence Research and Development Organisation (DRDO)</b> (IAST: Raksā Anūsandhān Evam Vikās Sangaṭhan) is the premier agency under the Department of Defence Research and Development in Ministry of Defence of the Government of India, charged with the military's research and development, headquartered in Delhi, India. It was formed in 1958 by the merger of the Technical Development Establishment and the Directorate of Technical Development and Production of the Indian Ordnance Factories with the Defence Science Organisation. Subsequently, Defence Research & Development Service (DRDS) was constituted in 1979 as a service of Group 'A' Officers / Scientists directly under the administrative control of Ministry of Defence.<br></br> With a network of 52 laboratories, which are engaged in developing defence technologies, covering various fields, like aeronautics, armaments, electronics, land combat engineering, life sciences, materials, missiles, and naval systems, DRDO is India's largest and most diverse research organisation. The organisation includes around 5,000 scientists belonging to the DRDS and about 25,000 other subordinate scientific, technical and supporting personnel</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5> NPOL-DRDO </h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5> Embacing Yoga </h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5> The Rohini Radar </h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image" />
                                <h5> NPS Monterey Visit </h5>
                            </div>
                            <div className="item">
                                <img src={img5} alt="Image" />
                                <h5> Showcasing Indigenous Advance Defence Technology </h5>
                            </div>
                            <div className="item">
                                <img src={img6} alt="Image" />
                                <h5> Siachen Sector Yoga Session </h5>
                            </div>
                            <div className="item">
                                <img src={img7} alt="Image" />
                                <h5> BrahMosMissile </h5>
                            </div>
                            <div className="item">
                                <img src={img8} alt="Image" />
                                <h5> 'HEILNA' Anti-Tank Guided Missile </h5>
                            </div>
                            <div className="item">
                                <img src={img9} alt="Image" />
                                <h5> Odisha Coast Air Missile Off </h5>
                            </div>
                            <div className="item">
                                <img src={img10} alt="Image" />
                                <h5> Mission Shakti </h5>
                            </div>
                            <div className="item">
                                <img src={img11} alt="Image" />
                                <h5> Hon'ble Raksha Mantri </h5>
                            </div>
                            <div className="item">
                                <img src={img12} alt="Image" />
                                <h5> Flight Control System at ADE, DRDO in Bengluru </h5>
                            </div>
                            <div className="item">
                                <img src={img13} alt="Image" />
                                <h5> NSTL Visit by Adm R Hari Kumar </h5>
                            </div>
                            <div className="item">
                                <img src={img14} alt="Image" />
                                <h5> BrahMos Supersonic Cruise Missile </h5>
                            </div>
                            <div className="item">
                                <img src={img15} alt="Image" />
                                <h5> Aryabhata Award to Secreatary DDR&D and Chairman DRDO </h5>
                            </div>
                            <div className="item">
                                <img src={img16} alt="Image" />
                                <h5> Successful Flight Test of Akash Prime Missile </h5>
                            </div>
                            <div className="item">
                                <img src={img17} alt="Image" />
                                <h5> Vice President calls for making India Self-reliant in all sectors </h5>
                            </div>
                            <div className="item">
                                <img src={img18} alt="Image" />
                                <h5> Israel sign Bilateral Inovation Agreement for deverlopment of dual use technology </h5>
                            </div>
                            <div className="item">
                                <img src={img19} alt="Image" />
                                <h5> SRSO's Short Snap Bridging System-10m </h5>
                            </div>
                            <div className="item">
                                <img src={img20} alt="Image" />
                                <h5> Model of MBT Arjun Mk 1A </h5>
                            </div>
                            <div className="item">
                                <img src={img21} alt="Image" />
                                <h5> Hon'ble President of India visit to DRDO's products and technologies Exhibition </h5>
                            </div>
                            <div className="item">
                                <img src={img22} alt="Image" />
                                <h5> #AeroIndia21 "Witnessing of SWING ROLE capabilty of aircraft"  </h5>
                            </div>
                            <div className="item">
                                <img src={img23} alt="Image" />
                                <h5> DRDO at AeroIndia </h5>
                            </div>
                            <div className="item">
                                <img src={img24} alt="Image" />
                                <h5> #AeroIndia21 "Demo flight of LCATejas" </h5>
                            </div>
                            <div className="item">
                                <img src={img25} alt="Image" />
                                <h5> Demonstration of Hypersonic air-breathing Teachnology with the flight test of HSTDV </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}