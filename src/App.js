import "bootstrap/dist/css/bootstrap.min.css";
// import "./scss/styles";

import "./scss/styles.scss";

import Col from "react-bootstrap/Col";
//CUSTOM COMPONENTS
import Navigation from "../src/components/Navigation";
import Nav__Logo from "./components/Nav__Logo";

function App() {
  return (
    <div class="container">
      <div class="col-sm-3">
        <Nav__Logo />
      </div>
      <div class="col sm-6">
        <Navigation />
      </div>
      <div class="col-sm-3"></div>
    </div>
  );
}

export default App;
