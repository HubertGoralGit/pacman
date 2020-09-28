import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  background-color: #000;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({ score }) {
  return (
    <Wrapper>
      <span>SCORE: {score}</span>
    </Wrapper>
  );
}

Header.defaultProps = {
  score: 0,
};

export default Header;
