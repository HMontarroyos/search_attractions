import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  flex-direction: column;
  padding-left: 40px;
  margin-left: 40px;
`;

export const Teste = styled.h1`
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;
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
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ContainerGlobo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-top: 20px;
  margin-left: 40px;
`;
