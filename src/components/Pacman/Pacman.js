import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const PacmanWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background: yellow;
  border-radius: 50%;
`;

const PacmanEye = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  background: black;
  border-radius: 50%;
  top: 10px;
  right: 15px;
`;

const eatingAnimation = keyframes`
    0% {
    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }
    25% {
        clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
    }
    50% {
        clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
    }
    75% {
        clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
    }
    100% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }
`;

const PacmanMouth = styled.div`
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  animation-name: ${eatingAnimation};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
`;

class Pacman extends Component {
  state = {
    direction: "right",
    position: {
      top: 20,
      left: 20,
    },
  };

  render() {
    return (
      <PacmanWrapper style={this.state.position}>
        <PacmanEye />
        <PacmanMouth />
      </PacmanWrapper>
    );
  }
}

Pacman.defaultProps = {
  step: 20,
  size: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Pacman;
