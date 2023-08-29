import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
  margin-left: 40px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row !important;
  padding-left: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  position: relative;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.textLight};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 88px;
  height: 62px;
  margin-right: 100px;
`;

export const Wallpaper = styled.img`
  border-radius: 18% 0 0 0;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  object-fit: cover;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 350%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    width: 120px;
    height: 120px;
  }
`;

export const ContainerText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 190px;
  padding: 20px;

  background: rgba(6, 39, 40, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ContainerMape = styled.div`
  position: relative;
  z-index: -1;
`;

export const Mape = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  top: -80px;
  left: 0;
`;
