import React, { Component } from "react";
import styled from "styled-components";
import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";
import Food from "../Food/Food";

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
        <Food position={{ top: 300, left: 300 }} />
        <Food position={{ top: 600, left: 1200 }} />
        <Food position={{ top: 800, left: 400 }} />
        <Food position={{ top: 500, left: 1000 }} />
        <Food position={{ top: 700, left: 900 }} />
        <Food position={{ top: 100, left: 1300 }} />
        <Food position={{ top: 300, left: 1000 }} />
        <Food position={{ top: 400, left: 700 }} />
      </Wrapper>
    );
  }
}

export default Board;
