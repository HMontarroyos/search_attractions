import styled, { keyframes } from "styled-components";
import { mape_mundi } from "../../assets/images";

const rotateAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const Globo = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${mape_mundi}), url(${mape_mundi});
  background-size: 200% 100%, 200% 100%;
  background-position: 0% 0%, 100% 0%;
  background-repeat: no-repeat;
  box-shadow: -25px -25px 25px black inset, 10px 10px 30px white inset,
    0px 0px 20px #3a96ff;
  animation: ${rotateAnimation} 20s linear infinite;
`;
