import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as GhostSvg } from "./ghost.svg";

const GhostWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  transition: 1s linear;

  .ghost-red {
    fill: red;
  }

  .ghost-blue {
    fill: blue;
  }

  .ghost-green {
    fill: green;
  }

  .ghost-pink {
    fill: pink;
  }
`;

class Ghost extends Component {
  state = {
    direction: "left",
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };

  componentDidMount() {
    this.changeDirectionInterval = setInterval(this.changeDirection, 1000);
    this.moveInterval = setInterval(this.move, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.changeDirectionInterval);
    clearInterval(this.moveInterval);
  }

  changeDirection = () => {
    const arrayOfMovement = ["left", "up", "down", "right"];
    const movement = Math.floor(Math.random() * 4);

    this.setState({ direction: arrayOfMovement[movement] });
  };

  move = () => {
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { direction } = this.state;
    const { step, size, border, topScoreBoardHeight } = this.props;

    if (direction === "down") {
      this.setState({
        position: {
          top: Math.min(
            currentTop + step,
            window.innerHeight - border * 2 - size - topScoreBoardHeight
          ),
          left: currentLeft,
        },
      });
    } else if (direction === "right") {
      this.setState({
        position: {
          top: currentTop,
          left: Math.min(
            currentLeft + step,
            window.innerWidth - border * 2 - size
          ),
        },
      });
    } else if (direction === "left") {
      this.setState({
        position: {
          top: currentTop,
          left: Math.max(currentLeft - step, 0),
        },
      });
    } else if (direction === "top") {
      this.setState({
        position: {
          top: Math.max(currentTop - step, 0),
          left: currentLeft,
        },
      });
    }
  };

  render() {
    const { color } = this.props;
    return (
      <GhostWrapper style={this.state.position}>
        <GhostSvg className={`ghost-${color}`} />
      </GhostWrapper>
    );
  }
}

Ghost.defaultProps = {
  color: "green",
  step: 50,
  size: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
