import React, { Component } from "react";
import styled from "styled-components";

const PacmanWrapper = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: yellow;
  border-radius: 50%;
`;

class Pacman extends Component {
  render() {
    return <PacmanWrapper />;
  }
}

export default Pacman;
