import React, { Component } from "react";
import styled from "styled-components";
import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";

const Wrapper = styled.div`
  position: relative;
  background-color: #34495e;
  border: 20px solid #c0392b;
  height: calc(100vh - 90px);
  width: calc(100% - 40px);
`;

class Board extends Component {
  render() {
    return (
      <Wrapper>
        <Pacman />
        <Ghost color="red" />
        {/* <Ghost color="pink" />
        <Ghost color="green" />
        <Ghost color="blue" /> */}
      </Wrapper>
    );
  }
}

export default Board;
