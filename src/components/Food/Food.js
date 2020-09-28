import React, { Component } from "react";
import styled from "styled-components";

const FoodWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.hidden {
    display: none;
  }
`;

const FoodElement = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: violet;
`;

class Food extends Component {
  state = {
    position: {
      top: this.props.position.top,
      left: this.props.position.left,
    },
    hidden: false,
  };

  render() {
    const { position, hidden } = this.state;
    return (
      <FoodWrapper style={position} className={hidden ? "food hidden" : "food"}>
        <FoodElement />
      </FoodWrapper>
    );
  }
}

Food.defaultProps = {
  foodSize: 50,
  position: { top: 0, left: 0 },
};

export default Food;
