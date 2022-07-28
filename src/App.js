import './App.css';
import "./components/NavBar/NavBar.css";
import "./components/Banner/Banner.css";
import "./components/AboutUs/AboutUs.css";
import "./components/Contact/Contact.css";
import "./components/ServiceFile/Services.css";
import "./components/Footer/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { Services } from "./components/ServiceFile/Services";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
