import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const PacmanWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background: yellow;
  border-radius: 50%;
  outline: none;
  transition: 0.2s linear;

  &.pacman-left {
    transform: rotateY(180deg);
  }

  &.pacman-up {
    transform: rotate(-90deg);
  }

  &.pacman-down {
    transform: rotate(90deg);
  }
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

  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    this.pacmanRef.current.focus();
  }

  handleKeyDown = (e) => {
    /// down
    if (e.keyCode === 40) {
      this.setState((prevState) => {
        return {
          direction: "down",
          position: {
            ...prevState.position,
            top: prevState.position.top + 20,
            left: prevState.position.left,
          },
        };
      });
    }
    /// right
    else if (e.keyCode === 39) {
      this.setState((prevState) => {
        return {
          direction: "right",
          position: {
            ...prevState.position,
            top: prevState.position.top,
            left: prevState.position.left + 20,
          },
        };
      });
    }
    /// left
    else if (e.keyCode === 37) {
      this.setState((prevState) => {
        return {
          direction: "left",
          position: {
            ...prevState.position,
            top: prevState.position.top,
            left: prevState.position.left - 20,
          },
        };
      });
    }
    /// top
    else if (e.keyCode === 38) {
      this.setState((prevState) => {
        return {
          direction: "up",
          position: {
            ...prevState.position,
            top: prevState.position.top - 20,
            left: prevState.position.left,
          },
        };
      });
    }
  };

  render() {
    const { direction, position } = this.state;
    return (
      <PacmanWrapper
        className={`pacman-${direction}`}
        ref={this.pacmanRef}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        style={this.state.position}
      >
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
