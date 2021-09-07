import "bootstrap/dist/css/bootstrap.min.css";
// import "./scss/styles";

import "./scss/styles.scss";

//CUSTOM COMPONENTS
import Navigation from "../src/components/Navigation";
import Nav__Logo from "./components/Nav__Logo.js";
import backgroundLanding from "./images/landing.jpg";
import Buttons from "./components/ButtonsNav.js";
import Information from "./components/BannerInfo";

function App() {
  return (
    <section
      class="landing__page"
      style={{ backgroundImage: `url(${backgroundLanding})` }}
    >
      <div className="container container__Nav">
        <div className="col-sm-3">
          <Nav__Logo />
        </div>
        <div className="col-sm-6">
          <Navigation />
        </div>
        <div className="col-sm-3 navBtns">
          <Buttons />
        </div>
      </div>
      <div className="container landing__info">
        <div className="col-sm-8">
          <Information />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
      </div>
      <div className="container">
        <div className="col-sm-8"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
      </div>
    </section>
  );
}

export default App;
