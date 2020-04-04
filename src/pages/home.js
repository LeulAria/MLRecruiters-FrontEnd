import React from "react";

import Button from "@material-ui/core/Button";

function home() {
  return (
    <div>
      <h1>Home</h1>
      <Button
        disableElevation
        size="large"
        variant="contained"
        color="secondary"
      >
        Some Button
      </Button>
    </div>
  );
}

export default home;
