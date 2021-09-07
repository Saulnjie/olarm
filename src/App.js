import "bootstrap/dist/css/bootstrap.min.css";
// import "./scss/styles";

import "./scss/styles.scss";

import Col from "react-bootstrap/Col";
//CUSTOM COMPONENTS
import Navigation from "../src/components/Navigation";
import Nav__Logo from "./components/Nav__Logo.js";
import backgroundLanding from "./images/landing.jpg";

function App() {
  return (
    <section
      class="landing__page"
      style={{ backgroundImage: `url(${backgroundLanding})` }}
    >
      >
      <div className="container container__Nav">
        <div className="col-sm-3">
          <Nav__Logo />
        </div>
        <div className="col sm-6">
          <Navigation />
        </div>
        <div className="col-sm-3"></div>
      </div>
    </section>
  );
}

export default App;
