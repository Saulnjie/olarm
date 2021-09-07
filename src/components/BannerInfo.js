import React from "react";

import Button from "react-bootstrap/Button";

function BannerInfo() {
  return (
    <div className="info__text">
      <h1>
        World`s <b className="red">Smartest</b>
        <br></br>
        Home Security
      </h1>
      <h6>
        Unique secutiy experience with more than 300,000 clients,<br></br>
        Simple installation, convenience & Free Monitoring
      </h6>
      <Button class="info__button" variant="primary" size="lg">
        VISIT SHOP
      </Button>{" "}
    </div>
  );
}

export default BannerInfo;
