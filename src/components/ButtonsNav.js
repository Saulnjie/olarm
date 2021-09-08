import React from "react";

import Button from "react-bootstrap/Button";

function ButtonsNav() {
  return (
    <div>
      <Button className="btnNav__one button_non_active" variant="outline-light">
        sign up
      </Button>{" "}
      <Button className="btnNav__two" variant="outline-light">
        sign in
      </Button>{" "}
    </div>
  );
}

export default ButtonsNav;
