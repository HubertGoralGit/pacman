import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: #34495e;
  border: 20px solid #c0392b;
  height: calc(100vh - 50px);
  width: calc(100% - 40px);
`;

class Board extends Component {
  render() {
    return <Wrapper>Hello</Wrapper>;
  }
}

export default Board;
