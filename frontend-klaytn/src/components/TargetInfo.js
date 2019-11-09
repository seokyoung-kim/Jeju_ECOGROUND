import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.maxCardWidth};
`;

const Description = styled.p`
  width: 96%;
  font-size: 16px;
  margin-bottom: 18px;
  font-weight: 100;
  line-height: 160%;
`;

const TargetInfo = ({ D_day, tokenId }) => {

  const dayGap = new Date(D_day) - new Date();
  const daySeconds = 24 * 60 * 60 * 1000;
  const dateGap = parseInt(dayGap/daySeconds) + 1;
  
  return(
  <Container>
    <Link to={`/makers/${tokenId}`}>
      <Description>{dateGap}일 남음</Description>
      <Description>{tokenId}% 달성</Description>
      <Description>{tokenId}Klay 펀딩</Description>
    </Link>
  </Container>)

}

export default TargetInfo;