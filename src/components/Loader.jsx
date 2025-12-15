import React from "react";
import { Spinner, Stack } from "react-bootstrap";

const Loader = () => (
  <Stack
    direction="horizontal"
    className="justify-content-center align-items-center w-100"
    style={{ height: "80vh" }}
  >
    <Spinner animation="border" variant="light" />
  </Stack>
);

export default Loader;
