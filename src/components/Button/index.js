import React from "react";
import { Button } from "react-bootstrap";

const Line = (props) => {
  const { style } = props;

  return (
    <Button onClick={() => console.log("carinha chorando")}>FUNCIONA</Button>
  );
};

export default Line;
