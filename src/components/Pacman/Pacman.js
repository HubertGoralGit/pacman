import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const PacmanWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background: yellow;
  border-radius: 50%;
  outline: none;
  /* transition: 0.2s linear; */

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
  background: #34495e;
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
      top: 0,
      left: 0,
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
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step, size, border, topScoreBoardHeight } = this.props;

    /// down
    if (e.keyCode === 40) {
      this.setState({
        direction: "down",
        position: {
          top: Math.min(
            currentTop + step,
            window.innerHeight - border * 2 - size - topScoreBoardHeight
          ),
          left: currentLeft,
        },
      });
    }
    /// right
    else if (e.keyCode === 39) {
      this.setState({
        direction: "right",
        position: {
          top: currentTop,
          left: Math.min(
            currentLeft + step,
            window.innerWidth - border * 2 - size
          ),
        },
      });
    }
    /// left
    else if (e.keyCode === 37) {
      this.setState({
        direction: "left",
        position: {
          top: currentTop,
          left: Math.max(currentLeft - step, 0),
        },
      });
    }
    /// top
    else if (e.keyCode === 38) {
      this.setState({
        direction: "up",
        position: {
          top: Math.max(currentTop - step, 0),
          left: currentLeft,
        },
      });
    }
  };

  render() {
    const { position, direction } = this.state;
    return (
      <PacmanWrapper
        className={`pacman-${direction}`}
        ref={this.pacmanRef}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        style={position}
      >
        <PacmanEye />
        <PacmanMouth />
      </PacmanWrapper>
    );
  }
}

Pacman.defaultProps = {
  step: 50,
  size: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Pacman;
