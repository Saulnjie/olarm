import React from "react";

import Button from "react-bootstrap/Button";

function ButtonsNav() {
  return (
    <div>
      <Button class="btnNav__one" variant="outline-light">
        sign up
      </Button>{" "}
      <Button class="btnNav__two" variant="outline-light">
        sign in
      </Button>{" "}
    </div>
  );
}

export default ButtonsNav;
