import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as GhostSvg } from "./ghost.svg";

const GhostWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
`;

class Ghost extends Component {
  state = {
    direction: "left",
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };

  render() {
    return (
      <GhostWrapper style={this.state.position}>
        <GhostSvg />
      </GhostWrapper>
    );
  }
}

Ghost.defaultProps = {
  step: 50,
  size: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
