import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.textLight};
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 88px;
  height: 62px;
  margin-right: 100px;
`;

export const ContainerText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 190px;
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: 10px;
`;

export const ContainerGlobo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-top: 20px;
  margin-left: 190px;
`;

export const Wallpaper = styled.img`
  height: 100px;
  width: 200;
`;
